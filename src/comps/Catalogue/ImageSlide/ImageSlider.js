import React,{ useState } from 'react'
import './ImageSlider.css'
import { BannerData } from '../CatalogData'
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            <section className="slider">
                <FaArrowAltCircleLeft 
                    className='left-arrow'
                    onClick={prevSlide} 
                />
                <FaArrowAltCircleRight 
                    className='right-arrow'
                    onClick={nextSlide} 
                />
                {
                    BannerData.map((img, index) => {
                        return(
                            <div 
                                className={index === current ? 'slide active' : 'slide'}
                            >
                                {index === current && (
                                    <img src={img.image} alt="product" className='image'/>
                                )}
                            </div>
                            
                        )
                    })
                }
            </section>
        </>
    )
}

export default ImageSlider
