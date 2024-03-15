import React from 'react'
import img1 from '../../ASSETS/Images/20.png'
import img2 from '../../ASSETS/Images/21.png'
import img3 from '../../ASSETS/Images/28.png'
import img4 from '../../ASSETS/Images/4.png'
import img5 from '../../ASSETS/Images/23.png'
import img6 from '../../ASSETS/Images/24.png'
import img7 from '../../ASSETS/Images/25.png'
import img8 from '../../ASSETS/Images/26.png'
import img9 from '../../ASSETS/Images/27.png'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Seasonal Veggies'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Seasonal Fruits'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Fresh Milk'
        },
        {
            id: 4,
            categoryimage: img5,
            categoryname: 'Atta,Rice & Dal'
        },
        {
            id: 5,
            categoryimage: img6,
            categoryname: 'Dry Fruits'
        },
        {
            id: 6,
            categoryimage: img7,
            categoryname: 'Oil and Masalas'
        },
        {
            id: 7,
            categoryimage: img8,
            categoryname: 'Cleaning Essentials'
        },
        {
            id: 8,
            categoryimage: img9,
            categoryname: 'Personal Care'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar