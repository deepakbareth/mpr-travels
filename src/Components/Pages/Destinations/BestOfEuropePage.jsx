// BestOfEuropePage.jsx

import React from 'react'
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';

const BestOfEuropePage = () => {
    return (
        <>
            <HeroSearch destinationName="Best of Europe" />

            <ViatorWidgetSection
                countryName="Best of Europe"
                widgetRef="W-b1087218-8dd7-4a65-b53e-9963a944a01a"
                title="Popular Tours in Europe"
            />
        </>
    );
};

export default BestOfEuropePage;