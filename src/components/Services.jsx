import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img2 from '../assests/img2.png'
import img4 from '../assests/img4.jpg'

const Services = () => {
  return (
    <div className='services' >
        <Carousel infiniteLoop autoPlay showStatus={false}
        showThumbs={false} interval={1000}>
            <div>
                <img src={img2} alt="Item1" />
                <p className='legend'>Analysis</p>
            </div>
            <div>
                <img src={img4} alt="Item2" />
                <p className='legend'>Development</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services