import React from "react";
import img11 from "../../../assets/Home/img11.jpg";

const ParadiseSection = () => {
    return (
        <>
            {/* VIEW ALL */}
            <div className="my-[35px] mb-[25px] text-center">
                <a
                    href="#"
                    className="font-sans text-[16px] font-bold leading-[24px] text-[rgb(17,59,99)] no-underline"
                >
                    View All Destinations
                </a>
            </div>

            {/* SECTION */}
            <section className="max-w-[1350px] mx-auto mb-[60px] px-[25px]">

                {/* BOX */}
                <div className="grid grid-cols-1 items-center gap-[30px] border border-[#8f8f8f] p-[25px] lg:grid-cols-[1.1fr_1.3fr] lg:p-[35px]">

                    {/* LEFT CONTENT */}
                    <div>

                        <h3 className="mb-[12px] text-[20px] font-bold leading-[30px] text-[rgb(17,59,99)]">
                            MPR Travel
                        </h3>

                        <p className="mb-[18px] max-w-[520px] text-[14px] font-normal leading-[20px] text-[rgb(68,68,68)]">
                            MPR Travel Inc DBA Ariana Tours & Travel is an award-winning,
                            IATA, ARC and ASTA-certified travel agency with experience in
                            the industry since 1990.
                            <br />
                            <br />
                            We strive to evolve and progress in everything we do. We have a
                            finger on the pulse of the industry and constantly innovate to
                            offer you the best in customer service and travel experience.
                            Our teams is committed to providing you the best service and
                            experience and remain in a priority and bestow a corporate
                            strength that is essential to succeed within the travel
                            industry.
                            <br />
                            <br />
                            Our team helps to give our clients the best possible experience
                            when booking air tickets, hotels, cars, cruises, travel
                            insurance vacation packages and activities.
                            <br />
                            <br />
                            We have the lowest special negotiated net fares economy,
                            business, first class with all major airlines. We work with our
                            partners around the globe to get the cheapest and most flexible
                            flights.
                        </p>

                        <a
                            href="#"
                            className="inline-block rounded-[3px] bg-[#0b3a6f] px-[18px] py-[10px] text-[14px] font-bold text-white no-underline"
                        >
                            LEARN MORE
                        </a>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <img
                            src={img11}
                            alt="MPR Travel"
                            className="h-[260px] w-full object-cover lg:h-[320px]"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ParadiseSection;