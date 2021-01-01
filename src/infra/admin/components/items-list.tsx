  
import React from 'react'
import { Box, Table, Label, Badge,
  TableRow,
  TableCell,
  TableHead,
  TableBody, 
  Button,
  Icon,
  Link} from '@admin-bro/design-system'
import { ViewHelpers } from 'admin-bro'


const ItemsList = ({items}) => {
 const viewHelper = new ViewHelpers()
  return (
   

<Box   mb="x4" variant="grey">
<Label>Items Related to this Sales</Label>
      <Box variant="white">
       
      <Table >
     
  

     <TableHead>
      
       <TableRow>
        <TableCell>
           Item ID
         </TableCell>
         <TableCell>
           Completion Date
         </TableCell>
         <TableCell>
           Status
         </TableCell>
         <TableCell>
           Details
         </TableCell>
        
       </TableRow>
     </TableHead>


     <TableBody>
   
        {items?.map((item, index) => {
         
          return(
            <TableRow key={index}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell><Badge>{item.status}</Badge></TableCell>          
            <TableCell> <Link href={viewHelper.editUrl("Items",item.id)} ><Icon style={{cursor: 'pointer'}} color="blue" icon="View" variant="24" /></Link> </TableCell>
            </TableRow>
          )

          
        })}

          
      

     </TableBody>

   </Table>
      </Box>
    </Box>

  
    
  )
}

export default ItemsList



