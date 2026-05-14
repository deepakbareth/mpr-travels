// HawaiiPage.jsx

import React from 'react'
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';

const HawaiiPage = () => {
    return (
        <>
            <HeroSearch destinationName="Hawaii" />

            <ViatorWidgetSection
                countryName="Hawaii"
                widgetRef="W-71b64042-4dba-4637-8525-4c21e363fe7b"
                title="Popular Tours in Hawaii"
            />
        </>
    );
};

export default HawaiiPage;