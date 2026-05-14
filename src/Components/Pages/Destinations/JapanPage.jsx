// JapanPage.jsx

import React from 'react'
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';

const JapanPage = () => {
    return (
        <>
            <HeroSearch destinationName="Japan" />

            <ViatorWidgetSection
                countryName="Japan"
                widgetRef="W-a835fc5f-6ad0-4a7f-93b8-9ddcacfa0631"
                title="Popular Tours in Japan"
            />
        </>
    );
};

export default JapanPage;