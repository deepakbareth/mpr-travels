import React from "react";
import img1 from "../../../assets/Home/img2.jpg";
import img2 from "../../../assets/Home/img7.jpg";
import img3 from "../../../assets/Home/img3.jpg";
import img4 from "../../../assets/Home/img10.jpg";

const resorts = [
    {
        image: img1,
    },
    {
        image: img2,
    },
    {
        image: img3,
    },
    {
        image: img4,
    },
];

const ResortsSection = () => {
    return (
        <section className="max-w-[1360px] mx-auto px-[25px] py-[40px]">

            {/* TOP LINK */}
            <a
                href="#"
                className="inline-block mb-5 text-[14px] font-semibold text-[#004f9e] no-underline"
            >
                Shop All Cyber Specials
            </a>

            {/* HEADING */}
            <h2 className="mb-[35px] text-center text-[24px] font-bold leading-[30px] text-[rgba(5,13,41,0.65)] font-sans">
                Top Resorts in{" "}
                <span className="pb-[3px]">
                    Mexico
                </span>{" "}
                and the Caribbean
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-[25px] sm:grid-cols-2 lg:grid-cols-4">

                {resorts.map((resort, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between border border-[#cfcfcf] bg-white p-[15px]"
                    >

                        <img
                            src={resort.image}
                            alt="resort"
                            className="h-[170px] w-full object-cover"
                        />

                        <a
                            href="#"
                            className="mt-[15px] w-max rounded-[3px] bg-[#0b3a6f] px-[18px] py-[10px] text-[14px] font-bold leading-[16.8px] text-white no-underline"
                        >
                            LEARN MORE
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResortsSection;