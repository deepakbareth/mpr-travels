// RomePage.jsx

import React from 'react'
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';

const RomePage = () => {
    return (
        <>
            <HeroSearch destinationName="Rome" />

            <ViatorWidgetSection
                countryName="Rome"
                widgetRef="W-d0ea197c-c4b6-44f7-8e0d-3a2744487a0e"
                title="Popular Tours in Rome"
            />
        </>
    );
};

export default RomePage;