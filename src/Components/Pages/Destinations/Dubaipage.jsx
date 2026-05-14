import React from 'react'
// import HeroSearch from './HeroSearch';
// import ViatorWidgetSection from './ViatorWidgetSection';
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';


const DubaiPage = () => {
    return (
        <>
            <HeroSearch destinationName="Dubai" />
            <ViatorWidgetSection
                countryName="Dubai"
                widgetRef="W-850c8acb-955a-46c0-b872-6546e610fddf"
                title="Popular Tours in Dubai"
            />
        </>
    );
};
export default DubaiPage;