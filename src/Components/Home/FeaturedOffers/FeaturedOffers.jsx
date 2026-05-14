import React from "react";
import img4 from "../../../assets/Home/img4.jpg";
import img5 from "../../../assets/Home/img5.jpg";

const offers = [
    {
        image: img4,
        title: "Sunscape Coco Punta Cana",
        description:
            "For a limited time, receive $100 instant savings when you book a trip to Sunscape Coco Punta Cana!",
    },
    {
        image: img5,
        title: "Last Minute Deals",
        description:
            "Pack your bags tonight and head to the beach with deals up to 65% off.",
    },
];

const FeaturedOffers = () => {
    return (
        <section className="max-w-[1350px] mx-auto my-[60px] px-[25px]">

            {/* TITLE */}
            <h2 className="mb-[30px]  text-center text-[24px]  font-bold leading-[30px] text-[rgba(5,13,41,0.65)] font-[ serif ] after:mx-auto after:mt-[8px] after:block after:h-[3px] after:w-[40px] after:bg-[#c9252c] after:content-['']">
                Featured Offers
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">

                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className="border border-[#8f8f8f] bg-white p-[18px]"
                    >

                        {/* IMAGE */}
                        <img
                            src={offer.image}
                            alt={offer.title}
                            className="h-[220px] w-full object-cover lg:h-[260px]"
                        />

                        {/* CONTENT */}
                        <div className="pt-[15px]">

                            <h3 className="mb-[8px] text-[20px] font-bold text-[rgb(17,59,99)]">
                                {offer.title}
                            </h3>

                            <p className="text-[14px] leading-[20px] text-[rgb(68,68,68)]">
                                {offer.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedOffers;