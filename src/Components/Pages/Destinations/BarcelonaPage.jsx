// BarcelonaPage.jsx

import React from 'react'
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';

const BarcelonaPage = () => {
    return (
        <>
            <HeroSearch destinationName="Barcelona" />

            <ViatorWidgetSection
                countryName="Barcelona"
                widgetRef="W-9e9af931-d3ea-46c4-8324-e81a2758b1bc"
                title="Popular Tours in Barcelona"
            />
        </>
    );
};

export default BarcelonaPage;