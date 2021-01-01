  
import React, { useState, useEffect } from 'react'
import {  BasePropertyProps } from 'admin-bro'


import ItemsList from "./items-list"

const ItemsListEdit: React.FC<BasePropertyProps> = (props) => {
  const { record  } = props
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(record.populated['items'] as any )
  }, []) 

  return (
  <ItemsList items={items} />
  )
}

export default ItemsListEdit



