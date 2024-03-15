import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Fresh Choices, Delivered to Your Door
                </h1>
                <p>Harvested with Care, Delivered with Freshness – Bringing Farm to Your Table!

                </p>
            </div>
        </div>
    )
}

export default Footer1