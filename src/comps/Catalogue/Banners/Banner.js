import React from 'react'
import ImageSlider from '../ImageSlide/ImageSlider'
import './Banner.css'
import { BannerData } from '../CatalogData'

const Banner = () => {
    return (
        <div className='banner-section' id='banners'>
            <h1>X Frame and Pull Up banners</h1>
            <ImageSlider slides={BannerData}/>
            <div className="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                </p>
            </div>
        </div>
    )
}

export default Banner
