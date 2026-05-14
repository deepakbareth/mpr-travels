import React from 'react'
// import HeroSearch from './HeroSearch';
// import ViatorWidgetSection from './ViatorWidgetSection';
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';


const ParisPage = () => {
    return (
        <>
            <HeroSearch destinationName="Paris" />
            <ViatorWidgetSection
                countryName="Paris"
                widgetRef="W-0599b86f-64b3-48e1-a52e-997206325c24"
                title="Popular Tours in Paris"
            />
        </>
    );
};
export default ParisPage;