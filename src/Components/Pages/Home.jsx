// import PromoBanner from "../Home/Banner/PromoBanner2"
import ViatorWidgetSection from "../Destinations/ViatorWidgetSection"
import PromoBanner from "../Home/Banner/PromoBanner"
import BenefitsSection from "../Home/BenefitsSection/BenefitsSection"
import DisclaimerSection from "../Home/DisclaimerSection/DisclaimerSection"
import FeaturedDeals from "../Home/FeaturedDeals/FeaturedDeals"
import FeaturedOffers from "../Home/FeaturedOffers/FeaturedOffers"
import IncludedVacationSection from "../Home/IncludedVacationSection/IncludedVacationSection"
import ParadiseSection from "../Home/ParadiseSection/ParadiseSection"
import ResortsSection from "../Home/ResortsSection/ResortsSection"
import TopPromotions from "../Home/TopPromotions/TopPromotions"
import TopVacationDestinations from "../Home/TopVacationDestinations/TopVacationDestinations"
import Footer from "../Layout/Footer"

// import Navbar from "../Layout/Navbar"


function Home() {
    return (
        <>
            {/* <Navbar />  this */}

            <PromoBanner />
            <TopPromotions />
            <FeaturedDeals />

            {/* <ResortsSection />   mexico remove */}
            <BenefitsSection />
            <TopVacationDestinations />
            <ParadiseSection />
            <FeaturedOffers />
            <IncludedVacationSection />
            <DisclaimerSection />
            {/* <Footer /> */}


        </>
    )
}

export default Home