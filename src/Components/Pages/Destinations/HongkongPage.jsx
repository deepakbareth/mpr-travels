// HongkongPage.jsx

import React from 'react'
import HeroSearch from '../../Destinations/HeroSearch';
import ViatorWidgetSection from '../../Destinations/ViatorWidgetSection';

const HongkongPage = () => {
    return (
        <>
            <HeroSearch destinationName="Hongkong" />

            <ViatorWidgetSection
                countryName="Hongkong"
                widgetRef="W-433fbdab-ed75-4113-b158-034e5f80f85b"
                title="Popular Tours in Hongkong"
            />
        </>
    );
};

export default HongkongPage;