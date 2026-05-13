import React from "react";
import {
    SlidersHorizontal,
    Circle,
    MapPin,
    CalendarDays,
    Hotel,
    Plane,
    ChevronDown,
} from "lucide-react";

import img2 from "../../../assets/Home/Featureimg/img2.jpg";
import img3 from "../../../assets/Home/Featureimg/img3.jpg";
import img4 from "../../../assets/Home/Featureimg/img4.jpg";
import img5 from "../../../assets/Home/Featureimg/img5.jpg";
import img6 from "../../../assets/Home/Featureimg/img6.jpg";
import img7 from "../../../assets/Home/Featureimg/img7.jpg";

const deals = [
    {
        image: img2,
        badge: "All-Inclusive",
        tag: "Special discounted rates",
        title: "Bahia Principe Grand Coba - All Inclusive",
        stars: "4 star hotel",
        reviews: "18006 reviews",
        rating:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-MCID-5.svg",
        location: "Cancun - Riviera Maya",
        date: "Jan 20, 2026",
        price: "$932",
    },
    {
        image: img3,
        badge: "All-Inclusive",
        tag: "Includes savings up to 40%",
        title: "Dreams Puerto Morelos Resort & Spa",
        stars: "4 star hotel",
        reviews: "12540 reviews",
        rating:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-MCID-5.svg",
        location: "Cancun - Riviera Maya",
        date: "Feb 3, 2026",
        price: "$1,025",
    },
    {
        image: img4,
        badge: "All-Inclusive",
        tag: "Limited Time Offer",
        title: "El Dorado Royale, a Spa Resort",
        stars: "4.5 star hotel",
        reviews: "17823 reviews",
        rating:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-MCID-5.svg",
        location: "Cancun - Riviera Maya",
        date: "Feb 3, 2026",
        price: "$1,621",
    },
    {
        image: img5,
        badge: "All-Inclusive",
        tag: "Limited Time Offer",
        title: "El Dorado Royale, a Spa Resort",
        stars: "4.5 star hotel",
        reviews: "17823 reviews",
        rating:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-MCID-5.svg",
        location: "Cancun - Riviera Maya",
        date: "Feb 3, 2026",
        price: "$1,621",
    },
    {
        image: img6,
        badge: "All-Inclusive",
        tag: "Limited Time Offer",
        title: "El Dorado Royale, a Spa Resort",
        stars: "4.5 star hotel",
        reviews: "17823 reviews",
        rating:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-MCID-5.svg",
        location: "Cancun - Riviera Maya",
        date: "Feb 3, 2026",
        price: "$1,621",
    },
    {
        image: img7,
        badge: "All-Inclusive",
        tag: "Limited Time Offer",
        title: "El Dorado Royale, a Spa Resort",
        stars: "4.5 star hotel",
        reviews: "17823 reviews",
        rating:
            "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-MCID-5.svg",
        location: "Cancun - Riviera Maya",
        date: "Feb 3, 2026",
        price: "$1,621",
    },
];

const FeaturedDeals = () => {
    return (
        <section className="w-full bg-white py-8">

            {/* HEADER */}
            <div className="text-center mb-8">
                <h2 className="relative inline-block pb-3 text-[24px] font-semibold text-[#444]">
                    Featured Vacation Deals
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-[50px] -translate-x-1/2 bg-[#c9252c]" />
                </h2>
            </div>

            {/* FILTER BAR */}
            <div className="max-w-[1250px] mx-auto mb-5 border-y border-[#ddd] py-[10px] px-[10px] md:px-0 flex items-center gap-5">

                <div className="flex items-center gap-[5px] text-[13px] font-bold uppercase text-[#0b3a6f] underline cursor-pointer">
                    <SlidersHorizontal size={16} />
                    Filter Your Search
                </div>

                <div className="relative inline-block">
                    <select className="appearance-none cursor-pointer rounded-[20px] border border-[#ccc] bg-white py-[6px] pl-[15px] pr-[35px] text-[14px] text-[#333] outline-none">
                        <option>Sort by</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Rating</option>
                    </select>

                    <ChevronDown
                        size={14}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#666]"
                    />
                </div>
            </div>

            {/* HOTEL COUNT */}
            <div className="max-w-[1250px] mx-auto mb-[15px] px-[20px] md:px-0 text-[14px] font-bold text-[#333]">
                10 Hotels
            </div>

            {/* GRID */}
            <div className="grid max-w-[1250px] grid-cols-1 gap-[25px] px-[20px] md:grid-cols-2 lg:grid-cols-3 md:px-0 mx-auto">

                {deals.map((deal, index) => (
                    <div
                        key={index}
                        className="flex flex-col border border-[#ddd] bg-white transition duration-300 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                    >

                        {/* IMAGE */}
                        <div className="relative h-[200px]">
                            <img
                                src={deal.image}
                                alt={deal.title}
                                className="h-full w-full object-cover"
                            />

                            <span className="absolute left-3 top-3 rounded-[20px] bg-[#c9252c] px-3 py-[5px] text-[14px] font-bold text-white">
                                {deal.badge}
                            </span>
                        </div>

                        {/* BODY */}
                        <div className="flex-grow p-[15px]">

                            <div className="mb-[5px] text-[15px] font-medium text-[#e7444c]">
                                {deal.tag}
                            </div>

                            <div className="mb-[10px] min-h-[50px] text-[20px] font-bold leading-[30px] text-[#333]">
                                {deal.title}
                            </div>

                            {/* RATING ROW */}
                            <div className="mb-[10px] flex items-center justify-between">

                                <div className="flex items-center text-[16px] font-semibold text-[#333]">
                                    <Circle
                                        size={14}
                                        fill="currentColor"
                                        className="mr-2 text-[#444]"
                                    />
                                    <span>{deal.stars}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <img
                                        src={deal.rating}
                                        alt="rating"
                                        className="w-[70px]"
                                    />

                                    <span className="text-[11px] text-[#0b3a6f] underline">
                                        {deal.reviews}
                                    </span>
                                </div>
                            </div>

                            {/* LOCATION */}
                            <div className="mb-2 flex items-center text-[16px] font-semibold text-[#333]">
                                <MapPin size={18} className="mr-2 text-[#444]" />
                                <span>{deal.location}</span>
                            </div>

                            {/* DATE */}
                            <div className="mb-2 flex items-center text-[16px] text-[#333]">
                                <CalendarDays
                                    size={18}
                                    className="mr-2 text-[#c9252c]"
                                />

                                <strong>Best Priced Dates</strong>
                            </div>

                            <div className="mb-[10px] pl-[26px] text-[16px] font-light text-[#333]">
                                {deal.date}
                            </div>
                        </div>

                        {/* FOOTER */}
                        <div className="flex items-end justify-between border-t border-[#eee] p-[15px]">

                            <div>
                                <div className="mb-[3px] flex items-center gap-1 text-[14px] font-normal text-[rgba(5,13,41,0.9)]">
                                    <span>3 Nights</span>

                                    <Hotel size={15} />
                                    <span>+</span>
                                    <Plane size={15} />
                                </div>

                                <div className="text-[12px] text-[#666]">
                                    Includes Taxes + Fees
                                </div>
                            </div>

                            <div className="text-right">
                                <span className="block text-[22px] font-semibold leading-none text-[#0b3a6f]">
                                    {deal.price}
                                </span>

                                <span className="text-[11px] text-[#666]">
                                    per person
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedDeals;