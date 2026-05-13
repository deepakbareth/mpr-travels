import React from "react";
import img5 from "../../../assets/Home/img5.jpg";
import img7 from "../../../assets/Home/img7.jpg";
import img11 from "../../../assets/Home/img11.jpg";

const benefits = [
    {
        image: img5,
        icon: "🚌",
        title: "FREE Transfers",
        description:
            "Enjoy complimentary round-trip transportation to your hotel in Mexico and the Caribbean from Amstar.",
    },
    {
        image: img11,
        icon: "★",
        title: "Exclusive Perks",
        description:
            "Elevate your escape with Exclusive Perks such as private transfers, spa discounts, and more.",
    },
    {
        image: img7,
        icon: "✔",
        title: "Vacation on Easy Mode",
        description:
            "Enjoy the ease of having flights, hotel, food, drinks, and activities included in your all-inclusive vacation package!",
    },
];

const BenefitsSection = () => {
    return (
        <section className="max-w-[1340px] mx-auto my-[40px] px-[20px]">

            {/* GRID */}
            <div className="grid grid-cols-1 gap-[25px] lg:grid-cols-3">

                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="relative flex h-[220px] items-end overflow-hidden text-white lg:h-[220px]"
                    >

                        {/* IMAGE */}
                        <img
                            src={benefit.image}
                            alt={benefit.title}
                            className="absolute left-0 top-0 z-[1] h-full w-full object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 z-[2] bg-black/45" />

                        {/* CONTENT */}
                        <div className="relative z-[3] p-[25px]">

                            <h3 className="mb-[10px] flex items-center gap-[10px] text-[32px] font-bold leading-[40px]">
                                <span className="text-[22px]">{benefit.icon}</span>
                                {benefit.title}
                            </h3>

                            <p className="max-w-[95%] text-[16px] font-bold leading-[24px]">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BenefitsSection;