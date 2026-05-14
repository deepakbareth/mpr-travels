import React, { useEffect } from "react";

const FeaturedDeals = () => {
    useEffect(() => {
        // 1. Check if the script already exists to avoid duplicates
        const scriptId = "viator-widget-script";
        let script = document.getElementById(scriptId);

        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://www.viator.com/orion/partner/widget.js";
            script.async = true;
            document.body.appendChild(script);
        } else {
            /** 
             * If the script is already loaded (e.g., navigating back to this page),
             * some widgets need a manual re-initialization call. 
             * Viator's widget.js usually scans the DOM on load.
             */
            if (window.Viator) {
                // If Viator provides a refresh method, call it here.
                // Usually, the script handles the initial render on append.
            }
        }

        // Cleanup (Optional): Decide if you want to remove the script when component unmounts
        // return () => { document.body.removeChild(script); };
    }, []);

    return (
        <section className="w-full bg-white py-[60px] px-[15px]">
            {/* HEADING */}
            <div className="text-center mb-[35px]">
                <h2 className="relative inline-block pb-[12px] text-[24px] font-[serif] font-bold text-[rgba(5,13,41,0.65)]">
                    Featured Vacation Deals
                    <span className="absolute bottom-0 left-1/2 h-[3px] w-[50px] -translate-x-1/2 bg-[#c9252c]" />
                </h2>
            </div>

            {/* VIATOR WIDGET */}
            <div className="max-w-[1250px] mx-auto">
                <div
                    className="viator-widget"
                    data-vi-partner-id="U00006658"
                    data-vi-widget-ref="W-8bfa3a4a-72c6-4414-8e07-a7498e0b5e8b"
                    data-vi-search-term="<Location>"
                ></div>
            </div>
        </section>
    );
};

export default FeaturedDeals;