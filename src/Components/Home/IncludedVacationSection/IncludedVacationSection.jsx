import React from "react";
import img3 from "../../../assets/Home/img3.jpg";
import img5 from "../../../assets/Home/img5.jpg";
import img6 from "../../../assets/Home/img6.jpg";

const cards = [
    {
        image: img3,
        title: "Stress-Free Transfers",
        description:
            "Apple Vacations makes getting there easy. Round-trip transportation to your hotel, provided by Amstar, is included in your vacation package price to most destinations in Mexico and the Caribbean.",
    },
    {
        image: img5,
        title: "Nonstop Service",
        description:
            "Get your vacation quicker! When you book a vacation package at an Inclusive Collection, part of Hyatt resort, nonstop ground transfer service, provided by Amstar, is included at no additional charge.",
        readMore: true,
    },
    {
        image: img6,
        title: "In-Destination Support",
        description:
            "As an Apple Vacations guest, the Amstar team is available to you while you're on vacation to assist with excursions, transportation, and local information. You'll often find a representative right in your hotel lobby.",
        readMore: true,
    },
];

const IncludedVacationSection = () => {
    return (
        <section className="px-[15px] py-[30px] lg:px-[30px] lg:py-[50px]">

            {/* TITLE */}
            <h2 className="mb-[40px] text-center text-[24px] font-bold leading-[30px] text-[rgba(5,13,41,0.65)] font-sans">
                Included with Your{" "}
                <span className=" pb-[4px]">
                    Apple Vacation
                </span>
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">

                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="border border-[#adacac] p-[15px]"
                    >

                        {/* IMAGE */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="mb-[15px] h-[190px] w-full object-cover lg:h-[210px]"
                        />

                        {/* TITLE */}
                        <h3 className="mb-[10px] text-[18px] font-bold text-[rgb(17,59,99)] lg:text-[20px]">
                            {card.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-[14px] leading-[20px] text-[rgb(68,68,68)]">
                            {card.description}

                            {card.readMore && (
                                <span className="cursor-pointer text-[12px] font-normal leading-[14px] text-[rgb(17,59,99)]">
                                    {" "}
                                    … READ MORE
                                </span>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IncludedVacationSection;