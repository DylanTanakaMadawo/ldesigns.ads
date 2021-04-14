import React from 'react'
import ImageSlider from '../ImageSlide/ImageSlider'
import './SocialMediaAds.css'
import { SocialMediaAdsData } from '../CatalogData'

const Flyer = () => {
    return (
        <div className='socialMediaAds-section' id='social_media_ads'>
            <h1>Social Media Advertisements</h1>
            <ImageSlider slides={SocialMediaAdsData}/>
            <div className="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                </p>
            </div>
        </div>
    )
}

export default Flyer
