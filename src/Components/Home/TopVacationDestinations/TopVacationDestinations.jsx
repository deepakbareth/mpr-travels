import React from "react";
import img6 from "../../../assets/Home/img6.jpg";
import img8 from "../../../assets/Home/img8.jpg";
import img9 from "../../../assets/Home/img9.jpg";
import img10 from "../../../assets/Home/img10.jpg";

const destinations = [
    {
        image: img6,
        link: "/mprtravels/destinations/seoul",
        title: "Seoul",
        description: "Book a Seoul all-inclusive vacation package.",
    },
    {
        image: img8,
        link: "/mprtravels/destinations/las-vegas",
        title: "Las Vegas",
        description:
            "Book a Las Vegas all-inclusive vacation package.",
    },
    {
        image: img9,
        link: "/mprtravels/destinations/dubai",
        title: "Dubai",
        description: "Visit the beaches of Dubai.",
    },
    {
        image: img10,
        link: "/mprtravels/destinations/hawaii",
        title: "Hawaii",
        description: "Escape to the tropical bliss of Hawaii.",
    },
];

const TopVacationDestinations = () => {
    return (
        <section className="max-w-[1350px] mx-auto my-[50px] px-[25px]">

            {/* TITLE */}
            <h2 className="relative mb-[30px] text-center text-[24px] font-bold text-[rgba(5,13,41,0.65)] font-[serif] after:mx-auto after:mt-[8px] after:block after:h-[3px] after:w-[45px] after:bg-[#c9252c] after:content-['']">
                Top Vacation Destinations
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">

                {destinations.map((item, index) => (
                    <div
                        key={index}
                        className="relative h-[210px] overflow-hidden text-white lg:h-[210px]"
                    >
                        <a href={item.link}>
                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/35" />

                            {/* CONTENT */}
                            <div className="absolute bottom-[20px] left-[20px] z-[2]">

                                <h3 className="mb-[6px] flex items-center gap-[8px] text-[32px] font-bold leading-[40px]">
                                    <span className="text-[22px]">➤</span>
                                    {item.title}
                                </h3>

                                <p className="text-[16px] font-bold">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopVacationDestinations;