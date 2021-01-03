  
import React from 'react'
import {  BasePropertyProps } from 'admin-bro'
import { Button, Link } from "@admin-bro/design-system"

const DocumentButtonShow: React.FC<BasePropertyProps> = (props) => {
  const { record } = props

 
  return (
      <Button variant="primary" rounded>
        <Link style={{color: '#FFF', textDecoration: 'none'}} target="blank" href={`//${record.params.redirectUrl}`}>Download PDF</Link>
      </Button>
  )
}

export default DocumentButtonShow



