import React from 'react'
import './HomeCategories.css'
import img1 from'../../ASSETS/Images/20.png'
import img2 from'../../ASSETS/Images/21.png'
import img3 from'../../ASSETS/Images/28.png'
import img4 from'../../ASSETS/Images/23.png'


const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
          <h1>
            Fresh Vegetables
          </h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='container'>
         <img src={img2} alt='img2' />
         <div className='content'>
          <h1>
            Fresh Seasonal Fruits
          </h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
          <h1>
            Fresh Farm Dairy
          </h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='container'>
         <img src={img4} alt='img4' />
         <div className='content'>
          <h1>
            Atta , Rice and Dal
          </h1>
          <p>Shop  Now</p>
        </div>
         
      </div>
      </div>

 

    
  )
}

export default HomeCategories