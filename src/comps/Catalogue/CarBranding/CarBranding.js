import React from 'react'
import ImageSlider from '../ImageSlide/ImageSlider'
import './CarBranding.css'
import { CarBrandingData } from '../CatalogData'

const Flyer = () => {
    return (
        <div className='car-branding-section' id='car_branding'>
            <h1>Car Branding Designs</h1>
            <ImageSlider slides={CarBrandingData}/>
            <div className="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                </p>
            </div>
        </div>
    )
}

export default Flyer

