import React from "react";

const DisclaimerSection = () => {
    return (
        <div className="max-w-[1250px] mx-auto px-[10px] md:px-5 pt-[22px] pb-[40px]">

            <p className="mb-[18px] font-['Lato',sans-serif] text-[12px] leading-[18px] text-[rgba(5,13,41,0.9)]">
                *Valid for bookings made 12/5/25–1/8/26 at 6PM CT for travel
                12/6/25–12/15/26. Restrictions, exclusions, and blackout dates
                may apply to hotel offers.
            </p>

            <p className="font-['Lato',sans-serif] text-[12px] leading-[18px] text-[rgba(5,13,41,0.9)]">
                **Package prices shown are the lowest found within the past
                24-hours. Prices and availability subject to change.
                Additional terms may apply.
            </p>
        </div>
    );
};

export default DisclaimerSection;