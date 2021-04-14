import React from 'react'
import ImageSlider from '../ImageSlide/ImageSlider'
import './Cards.css'
import { CardData } from '../CatalogData'

const Cards = () => {
    return (
        <div className='cards-section' id='cards'>
            <h1>Business Cards Designs</h1>
            <ImageSlider slides={CardData}/>
            <div className="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi.
                </p>
            </div>
        </div>
    )
}

export default Cards
