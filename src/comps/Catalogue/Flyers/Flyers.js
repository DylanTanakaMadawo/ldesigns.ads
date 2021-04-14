import React from 'react'
import ImageSlider from '../ImageSlide/ImageSlider'
import './Flyers.css'
import { FlyerData } from '../CatalogData'

const Flyer = () => {
    return (
        <div className='flyer-section' id='flyers'>
            <h1>Flyers Designs</h1>
            <ImageSlider slides={FlyerData}/>
            <div className="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                </p>
            </div>
        </div>
    )
}

export default Flyer
