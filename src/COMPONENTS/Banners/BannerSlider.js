import React from 'react'
import Slider from 'react-slick'
import'./BannerSlider.css'
import slider from 'react-slick' 

const BannerSlider = () => {
  const data =[ 
    {
       id:1,
      image:'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D',
      tittle:"Nature's Bounty, Delivered to Your Doorstep.",
      description:"Embark on a journey of freshness with our curated selection of farm-fresh fruits, vibrant vegetables, and wholesome dairy products",
      button:'https://www.google.com'

    },

   {
       id:2,
      image:'https://images.unsplash.com/photo-1584473457406-6240486418e9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D',
      tittle:"Farm to Table: Fresh Vegetable and Fruit Deliveries",
      description:"Nature's best, handpicked for you: Fresh vegetables and fruits at your doorstep.",
      button:'https://www.google.com'

    },  


     {
       id:3,
      image:'https://images.pexels.com/photos/6868793/pexels-photo-6868793.jpeg?auto=compress&cs=tinysrgb&w=400',
      tittle:"Nature's Bounty, Delivered to Your Doorstep.",
      description:"We deliver Fresh vegetables and fruits at your doorstep.",
      button:'https://www.google.com'

    } 



    


  ]


    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
  };
  

  return (
    <div className='bannerslider' >
      <Slider className = 'bannerslider'{...settings}>

{
    data.map(item=>{
      return(
        <div className='imagecont' key={item.id}>
          <img src={item.image} alt='no img'/>
          <div className='content'>
          <h1>{item.tittle}</h1>
          <span>{item.description}</span>
          <button>Shop Now</button>




          </div>
        </div>
      )
    })

}


      </Slider>
    </div>
  )
}

export default BannerSlider