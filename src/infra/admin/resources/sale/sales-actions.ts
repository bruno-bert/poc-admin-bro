import { ItemsModel } from '../item/entities/sequelize'


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
      
      if (originalResponse.record){
        const items = await ItemsModel.findAll({where:{SaleId: originalResponse.record.params.id}})
        originalResponse.record.populated = { ...originalResponse.record.populated, items}
        return originalResponse
      }
      else return originalResponse
   
  }


export const SalesActions = {
   new:  { after: addItems  },
   edit: { after: getItems },
   show: { after: getItems }
   
}