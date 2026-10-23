import React from 'react'
import BurgerComponent from './burgerComponent.js'
import data from '../Data/data.js'

function ProductsComp() {
 

  return (
    <>
     
 <div className="container ms-sm-auto text-center ">
     <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4  mt-5 row-gap-3 '>
      {
         data.map((item)=>(
            <BurgerComponent key={item.id} data={item} />
         ))
         
      }
   </div>
 </div>


    </>
  )
}

export default ProductsComp;
