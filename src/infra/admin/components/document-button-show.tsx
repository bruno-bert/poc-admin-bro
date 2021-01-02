  
import React, { useState, useEffect } from 'react'
import {  withNotice, BasePropertyProps, RecordJSON } from 'admin-bro'
import { Button, Link } from "@admin-bro/design-system"

const DocumentButtonShow: React.FC<BasePropertyProps> = (props) => {
  const { record   } = props
  const [items, setItems] = useState([])
   useEffect(() => {
    setItems(record.populated['items'] as any )   
    console.log('record.params.redirectUrl',record.params.redirectUrl)
  }, [])  

 
  return (

      
      <Button variant="primary" rounded>
        <Link style={{color: '#FFF', textDecoration: 'none'}} target="blank" href={`//${record.params.redirectUrl}`}>Download PDF</Link>
      </Button>

   
 
  )
}

export default withNotice(DocumentButtonShow)



