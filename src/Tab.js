

import React from 'react';
import ReactDOM from 'react-dom';
import products from './products.js'


function Tab() {
    console.log(products)
   
    return(
        <table border="1"  width="100%" cellspacing="0" cellpadding="6">
            <tr>
              <th  >Name</th>
              <th  >price</th>
              <th  >Brand</th>
              <th  >Desc</th>
              <th  >Measure</th>
           </tr>
{

products.map(items=>
    <tr>
              <td>{items.name}</td>    
              <td>{items.price * 10}</td>   
              <td>{items.brand}</td>   
              <td>{items.desc}</td>  
              <td>{items.measure}</td> 
           </tr>
  
)  
}
           

          

 
  
      </table>
 
    )
}

export default Tab;