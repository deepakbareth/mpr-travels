// LasVegasPage.jsx

import React from 'react'
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';

const LasVegasPage = () => {
    return (
        <>
            <HeroSearch destinationName="Las Vegas" />

            <ViatorWidgetSection
                countryName="Las Vegas"
                widgetRef="W-eb6d7ac8-2f1d-4fa3-b272-d9a0840e42c3"
                title="Popular Tours in Las Vegas"
            />
        </>
    );
};

export default LasVegasPage;