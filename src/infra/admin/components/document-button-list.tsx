  
import React, { useState, useEffect } from 'react'
import {  BasePropertyProps } from 'admin-bro'
import { Button, Icon, Tooltip} from "@admin-bro/design-system"

const DocumentButtonList: React.FC<BasePropertyProps> = (props) => {
  const { record  } = props
  //const [items, setItems] = useState([])
 /*  useEffect(() => {
    setItems(record.populated['items'] as any )
  }, [])  */ 

  const generatePDF = (salesId: string)=>{
    
    console.log(`printing document for sale ${salesId}`)
  }
  
  return (

      
      <Button onClick={()=>generatePDF(record.params.id)} size="icon" variant="primary" rounded>
        <Icon icon="Document" />
      </Button>

   
 
  )
}

export default DocumentButtonList



