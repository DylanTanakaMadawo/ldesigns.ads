import React from 'react'
import ImageSlider from '../ImageSlide/ImageSlider'
import './Logos.css'
import { LogoData } from '../CatalogData'

const Logos = () => {
    return (
        <div className='logos-section' id='logos'>
            <h1>Personal & Business Logo Designs</h1>
            <ImageSlider slides={LogoData}/>
            <div className="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                </p>
            </div>
        </div>
    )
}

export default Logos
