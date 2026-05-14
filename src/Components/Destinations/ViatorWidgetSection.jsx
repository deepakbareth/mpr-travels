import React, { useEffect } from 'react';

const ViatorWidgetSection = ({
    countryName,
    widgetRef,
    title
}) => {

    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="https://www.viator.com/orion/partner/widget.js"]'
        );

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = "https://www.viator.com/orion/partner/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section className="w-full py-12 md:py-16 bg-white">
            <div className="max-w-[1300px] mx-auto px-[15px]">

                <h2 className="text-2xl md:text-5xl font-[serif] text-[#113b63] mb-8 text-center">
                    {title || `Explore ${countryName}`}
                </h2>

                <div
                    data-vi-partner-id="U00006658"
                    data-vi-widget-ref={widgetRef}
                    className="w-full flex justify-center"
                ></div>

            </div>
        </section>
    );
};

export default ViatorWidgetSection;