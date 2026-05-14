import React from 'react'
// import HeroSearch from './HeroSearch';
// import ViatorWidgetSection from './ViatorWidgetSection';
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';


const SaudiPage = () => {
    return (
        <>
            <HeroSearch destinationName="Saudi" />
            <ViatorWidgetSection
                countryName="Saudi"
                widgetRef="W-cc0c1b9e-8b65-4ae8-8b53-1643c1676198"
                title="Popular Tours in Saudi"
            />
        </>
    );
};
export default SaudiPage;