import AdminBro from 'admin-bro'
import { ItemsModel } from '../item/entities/sequelize'
import {env} from '../../../api/express/env'
import { canShowOrListSales } from '../../../../data/rbac/can-show-or-list-sales'
import { canAddSales } from '../../../../data/rbac/can-add-sales'
import { canDeleteSales} from '../../../../data/rbac/can-delete-sales'
import { canPrintSales} from '../../../../data/rbac/can-print-sales'


const print = async(request, response, data)=>{
  const fs = require('fs')
  const pdf = require('html-pdf')

  const Handlebars  = require('handlebars');


  const renderHtml = async (file, data) => {
      return new Promise((resolve, reject)=>{
        fs.readFile(file, (err, content)=>{
          if (err) reject(err)
          const template = Handlebars.compile(content.toString());
          resolve(template(data));
        });
      })
  }

  const items = await ItemsModel.findAll({where:{SaleId: data.record.params.id}, raw: true})
  console.log('items',items)

  const html = await renderHtml('./templates/document.hbs', { 
    sale: data.record.params, 
    user: data.record.populated['userId'].params,
    items })
        
    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait'
    }

    const createPDF = async (html,options)=>{
      return new Promise((resolve, reject)=>{
        pdf.create(html, options).toBuffer((err, buffer) => {
          if(err) reject(err)
          resolve(buffer)  
        })
      }) 
    }

    const result = await createPDF(html, options)
    const fileUrl = `public/documents/${data.record.params.id}.pdf`;
    fs.writeFileSync(fileUrl, result);
   
  
   
    const notice =  {message: 'Click to download', type: 'success'}
    const redirectUrl =  `${String(env.server).replace('http://', '')}:${env.port}/${fileUrl}`    
    data.record.params = { ...data.record.params, notice, redirectUrl}
    return {    
      record: data.record.toJSON(),
    } 
 
} 

  const addItems = async (originalResponse, request, context) => {
   
    const conditionToAddItems = String(request.method).toUpperCase() === 'POST'
                                && originalResponse.record
                                && !Object.keys(originalResponse.record.errors).length

    if (conditionToAddItems)  {
           
            for(var itemIndex=0;itemIndex<originalResponse.record.params.numberOfItems;itemIndex++) {
                await ItemsModel.create({
                    status: 'pending',
                    SaleId: originalResponse.record.params.id
                })
            }
            
    }
    
    return originalResponse
  }


  const getItems = async(originalResponse, request, context)=>{
    
    const salesId = originalResponse.record?.params?.id || originalResponse.params?.recordId
    console.log('salesId', salesId)
      if (salesId){
        const items = await ItemsModel.findAll({where:{SaleId: salesId}})
        originalResponse.record.populated = { ...originalResponse.record.populated, items}
        return originalResponse
      }
      else return originalResponse
   
  }


export const SalesActions = {
   new:  { after: addItems, isAccessible: canAddSales  },
   edit: {  after: getItems, isAccessible: canShowOrListSales },
   show: { after: getItems, isAccessible: canShowOrListSales },
   delete:  { isAccessible: canDeleteSales  },
   list: {
    
      before: async (request, context) => {
        const { currentAdmin } = context
        if (currentAdmin.role === 'admin' || currentAdmin.role === 'jnj'){
          return request
        } else {
          return {
            ...request,
            query: {
               ...request.query,
               'filters.userId': currentAdmin.id 
          }
         }
        }
        
      }
   },
   print: {
    isAccessible: canPrintSales,
    actionType: 'record',
    icon: 'Document',
    component: AdminBro.bundle('../../../../../src/infra/admin/components/document-button-show'), 
    handler: print,
    showFilter: false,
   },
   
}