import React, { useEffect } from 'react';
import bannerBg from '../../../assets/Home/BannerImg/bnrBg2.jpg';

const PromoBanner = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.viator.com/orion/partner/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script if the component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="relative bg-white flex overflow-visible pb-[40px] lg:pb-0 lg:min-h-[480px]">

            {/* Right Background Image (Replaces the CSS ::after pseudo-element) */}
            {/* Hidden on screens smaller than 992px (lg) matching your @media (max-width: 992px) */}
            <div
                className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-center bg-cover bg-no-repeat z-[1]"
                style={{ backgroundImage: `url(${bannerBg})` }}
            ></div>

            {/* Container */}
            <div className="w-full max-w-[1400px] mx-auto px-[15px] py-[30px] lg:px-[20px] lg:py-[40px] relative z-10">

                {/* Hero Text Wrapper */}
                <div className="w-full max-w-[660px] mx-auto lg:mx-0 text-center lg:text-left">

                    {/* 
                      Responsive Header matching your exact pixel values:
                      Base (Mobile): 26px / 32px
                      sm (>576px): 32px / 38px
                      lg (>992px): 40px / 48px
                      xl (>1200px): 48px / 57.6px 
                    */}
                    <h1 className="font-['Montserrat',sans-serif] font-thin text-[#113b63] uppercase mb-[25px] 
                                   text-[26px] leading-[32px] tracking-[1px]
                                   sm:text-[32px] sm:leading-[38px] 
                                   lg:text-[40px] lg:leading-[48px] lg:tracking-[2px] 
                                   xl:text-[48px] xl:leading-[57.6px]">
                        Holiday Savings Up<br className="hidden sm:block" /> To 40%*
                    </h1>

                    <a
                        href="#"
                        className="inline-block bg-[#0b3a6f] text-white px-[26px] py-[12px] text-[14px] font-bold no-underline rounded uppercase mb-[30px] hover:bg-[#082a52] transition-colors"
                    >
                        Learn More
                    </a>

                    {/* Viator Widget */}
                    <div
                        className="border-none text-[24px] w-full max-w-[600px] mx-auto lg:mx-0"
                        data-vi-partner-id="U00006658"
                        data-vi-widget-ref="W-5294acad-b86c-48a1-a4a1-be5ee70dd759"
                        data-vi-currency="<UserCurrency>"
                        data-vi-language="<UserLanguage>"
                        data-vi-search-term="<DestinationName>"
                        data-vi-travel-date-from="<TravelDate>"
                        data-vi-travel-date-to="<ReturnDate>"
                        data-vi-travellers-adults="<AdultTravellerCount>"
                        data-vi-travellers-children-ages="<ChildTravellerAges.join(',')>"
                    ></div>

                </div>
            </div>
        </section>
    );
};

export default PromoBanner;