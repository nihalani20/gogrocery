import React from 'react'
import AllProduct from './AllProduct'
import CategorySidebar from './CategorySidebar'
import './ProductSidebar.css'
const ProductSidebar = () => {
  return (
    <div className='product_sidebar'>
        <CategorySidebar/>
        <AllProduct/>
    </div>
  )
}

export default ProductSidebar