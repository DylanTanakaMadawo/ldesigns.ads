import React from 'react'
import Banner from './Banners/Banner'
import CarBranding from './CarBranding/CarBranding'
import Cards from './Cards/Cards'
import Contact from './Contact/Contact'
import Flyers from './Flyers/Flyers'
import Logos from './Logos/Logos'
import SocialMediaAds from './SocialMediaAds/SocialMediaAds'

const Catalogue = () => {
    return (
        <>
            <Banner />
            <Flyers />
            <Logos />
            <Cards />
            <CarBranding />
            <SocialMediaAds />
            <Contact />
        </>
    )
}

export default Catalogue
