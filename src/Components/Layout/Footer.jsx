import React from "react";
import { ArrowUpRight } from "lucide-react";

const footerData = [
    {
        title: "About Us",
        links: [
            "Exclusive Perks",
            "Blog",
            "Flights",
            "Hotel Brands",
            "Excursions & Transfers",
            "In the News",
            "Careers",
            "Awards",
        ],
    },
    {
        title: "My Account",
        links: [
            "Sign In",
            "Sign Up",
            "Find My Trip",
            "Check Travel Credits",
            "Find a Travel Advisor",
        ],
    },
    {
        title: "Policies",
        links: [
            "Health & Safety Measures",
            "Travel Protection Plus",
            "Baggage Policies",
            "Affiliate Program",
            "Gen/Cancel Terms & Conditions",
            "Accessibility Statement",
            "Privacy Policy",
            "DMCA Policy",
            "Cookie Center",
            "Cookie Policy",
        ],
    },
    {
        title: "Support",
        links: [
            "Contact Us",
            "Frequently Asked Questions",
            "Site Search",
            "Payment Options",
            "Group Travel",
            "Promo Codes",
            "Gift Cards",
            "Parking Specials",
            "Destination Weddings & Honeymoons",
        ],
    },
];

const socialIcons = [
    {
        name: "Facebook",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[18px] w-[18px]"
            >
                <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.57v1.89h2.8l-.45 2.9h-2.35V22c4.78-.75 8.44-4.91 8.44-9.93z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[18px] w-[18px]"
            >
                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5C20 18.33 18.33 20 16.25 20h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
        ),
    },
    {
        name: "Youtube",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[18px] w-[18px]"
            >
                <path d="M21.58 7.19a2.76 2.76 0 00-1.94-1.95C17.88 4.75 12 4.75 12 4.75s-5.88 0-7.64.49A2.76 2.76 0 002.42 7.2C1.93 8.96 1.93 12 1.93 12s0 3.04.49 4.81a2.76 2.76 0 001.94 1.95c1.76.49 7.64.49 7.64.49s5.88 0 7.64-.49a2.76 2.76 0 001.94-1.95c.49-1.77.49-4.81.49-4.81s0-3.04-.49-4.81zM10 15.5v-7l6 3.5-6 3.5z" />
            </svg>
        ),
    },
    {
        name: "Pinterest",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-current"
            >
                <path d="M12.017 0C5.396 0 0 5.383 0 12.004c0 4.991 3.064 9.268 7.438 11.063-.104-.938-.198-2.381.042-3.406.218-.927 1.406-5.896 1.406-5.896s-.359-.719-.359-1.781c0-1.668.968-2.914 2.172-2.914 1.023 0 1.518.768 1.518 1.689 0 1.029-.656 2.568-.994 3.994-.282 1.193.598 2.168 1.773 2.168 2.128 0 3.764-2.244 3.764-5.484 0-2.867-2.061-4.873-5.008-4.873-3.41 0-5.414 2.557-5.414 5.198 0 1.03.396 2.137.891 2.737a.36.36 0 01.083.344c-.09.379-.293 1.193-.332 1.361-.052.219-.173.266-.402.161-1.495-.695-2.43-2.877-2.43-4.629 0-3.771 2.739-7.234 7.897-7.234 4.145 0 7.368 2.955 7.368 6.904 0 4.121-2.6 7.438-6.211 7.438-1.213 0-2.355-.631-2.744-1.378l-.746 2.84c-.27 1.04-1.003 2.342-1.493 3.136A12.01 12.01 0 0012.017 24C18.641 24 24 18.617 24 11.996 24 5.383 18.641 0 12.017 0z" />
            </svg>
        ),
    },
    {
        name: "Spotify",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[18px] w-[18px]"
            >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.59 14.44a.63.63 0 01-.87.2c-2.39-1.46-5.4-1.79-8.96-.98a.63.63 0 11-.28-1.22c3.88-.89 7.2-.51 9.9 1.13.3.18.39.57.21.87zm1.24-2.76a.79.79 0 01-1.08.26c-2.74-1.68-6.91-2.17-10.15-1.18a.79.79 0 11-.46-1.5c3.7-1.12 8.3-.58 11.43 1.34.37.23.49.71.26 1.08zm.1-2.88C14.6 8.81 9.03 8.63 6 9.55a.95.95 0 11-.56-1.81c3.48-1.06 9.63-.85 13.47 1.43a.95.95 0 11-.98 1.63z" />
            </svg>
        ),
    },
    {
        name: "TikTok",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[18px] w-[18px]"
            >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-1.92V15.3a5.3 5.3 0 11-5.3-5.3c.2 0 .39.02.58.05v2.61a2.7 2.7 0 10 2.12 2.64V2h2.37a4.82 4.82 0 004.42 4.42v2.27z" />
            </svg>
        ),
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#f8f9fa] px-[20px] py-[60px] lg:px-[70px]">

            <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-[40px] md:grid-cols-3 lg:grid-cols-[1fr_1fr_1.2fr_1.2fr_1.5fr]">

                {footerData.map((section, index) => (
                    <div key={index}>
                        <h3 className="mb-[25px] text-[16px] font-bold leading-[23px] text-[rgb(17,59,99)]">
                            {section.title}
                        </h3>

                        <ul className="m-0 list-none p-0">
                            {section.links.map((link, idx) => (
                                <li key={idx} className="mb-[12px]">
                                    <a
                                        href="#"
                                        className="flex w-fit items-center gap-1 text-[14px] leading-[28px] text-[rgb(68,68,68)] no-underline hover:underline"
                                    >
                                        {link}

                                        {(link === "Careers" ||
                                            link === "Find a Travel Advisor" ||
                                            link === "DMCA Policy") && (
                                                <ArrowUpRight size={11} />
                                            )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* SOCIAL + SUBSCRIBE */}
                <div className="lg:pl-[20px]">

                    <h3 className="mb-[15px] text-center text-[16px] font-bold leading-[23px] text-[rgb(17,59,99)]">
                        Connect with us
                    </h3>

                    <div className="mb-[36px] flex justify-center gap-[20px]">
                        {socialIcons.map((icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex h-[28px] w-[28px] items-center justify-center text-[#86868b]"
                            >
                                {icon.svg}
                            </a>
                        ))}
                    </div>

                    <span className="mb-[20px] block text-center text-[14px] font-black text-[#003a70]">
                        Be the First to Know
                    </span>

                    <span className="mb-[8px] block text-[14px] font-semibold text-[#383838]">
                        SUBSCRIBE TO RECEIVE EXCLUSIVE DEALS.
                    </span>

                    <div className="mb-[15px] flex h-[45px]">

                        <input
                            type="email"
                            placeholder="Email*"
                            className="flex-1 rounded-l-[4px] border border-[#ccc] border-r-0 px-[15px] text-[14px] outline-none"
                        />

                        <button className="whitespace-nowrap rounded-r-[4px] bg-[#003a70] px-[15px] text-[14px] font-bold text-white">
                            JOIN US
                        </button>
                    </div>

                    <p className="text-[13px] leading-[1.4] text-[#333]">
                        Unlock secret deals on top destinations and receive $100 off your
                        first vacation.
                    </p>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-[10px] flex flex-col items-center justify-between gap-[10px] border-t border-[#e0e0e0] pt-[25px] text-center text-[12px] text-[#444] lg:flex-row">

                <div>@ Copyright 2025 MPR Travel</div>


            </div>
        </footer>
    );
};

export default Footer;