import AdminBro from 'admin-bro'
import { ItemsModel } from '../item/entities/sequelize'
import {env} from '../../../api/express/env'

const print = async(request, response, data)=>{
  const fs = (require('fs'))
  const pdf = require('html-pdf')
  const html = fs.readFileSync('./document.html').toString()
        
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
   
  
    /** According to documentation actionresponse should have notice and redirectUrl by standard 
     * since not working, added the params to record.parms
    */
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
      
      if (originalResponse && originalResponse.record){
        const items = await ItemsModel.findAll({where:{SaleId: originalResponse.record.params.id}})
        originalResponse.record.populated = { ...originalResponse.record.populated, items}
        return originalResponse
      }
      else return originalResponse
   
  }


export const SalesActions = {
   new:  { after: addItems  },
   edit: {  after: getItems },
   show: { after: getItems },
   print: {
    after: getItems,
    actionType: 'record',
    icon: 'Document',
    component: AdminBro.bundle('../../../../../src/infra/admin/components/document-button-show'), 
    handler: print,
    showFilter: false,
   },
   
}