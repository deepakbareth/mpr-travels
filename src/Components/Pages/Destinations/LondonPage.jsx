import React from 'react'
// import HeroSearch from './HeroSearch';
// import ViatorWidgetSection from './ViatorWidgetSection';
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';


const LondonPage = () => {
    return (
        <>
            <HeroSearch destinationName="London" />
            <ViatorWidgetSection
                countryName="London"
                widgetRef="W-1aa8a1c7-104b-48a8-a382-8019c92f35bd"
                title="Popular Tours in London"
            />
        </>
    );
};
export default LondonPage;