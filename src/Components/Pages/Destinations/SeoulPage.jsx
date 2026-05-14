// SeoulPage.jsx

import React from 'react'
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';

const SeoulPage = () => {
    return (
        <>
            <HeroSearch destinationName="Seoul" />

            <ViatorWidgetSection
                countryName="Seoul"
                widgetRef="W-c95d5a28-c6d1-47be-bf5f-9f2f392216d6"
                title="Popular Tours in Seoul"
            />
        </>
    );
};

export default SeoulPage;