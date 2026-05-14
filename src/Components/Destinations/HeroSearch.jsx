import React, { useEffect, useState } from "react";
import heroImg from "../../assets/Home/img3.jpg";

// Inline SVG components for cleaner code
const Icons = {
    ChevronRight: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
    ),
    Hotel: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 22v-6.57" /><path d="M12 11h.01" /><path d="M12 7h.01" /><path d="M14 15.43V22" /><path d="M15 16a5 5 0 0 0-6 0" /><path d="M16 11h.01" /><path d="M16 7h.01" /><path d="M18 22V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" /><path d="M20 22H4" /><path d="M8 11h.01" /><path d="M8 7h.01" /></svg>
    ),
    Building: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
    ),
    Plane: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>
    ),
    MapPin: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
    Calendar: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
    ),
    Users: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    Search: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
    ),
    Info: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
    )
};

// Added destinationName prop (defaults to "Dubai" if not passed)
const HeroSearch = ({ destinationName = "Dubai" }) => {
    const [activeTab, setActiveTab] = useState("hotel-flight");
    const [isSticky, setIsSticky] = useState(false);

    // Added proper React State for search form inputs
    const [leavingFrom, setLeavingFrom] = useState("Seattle, Washington");
    const [goingTo, setGoingTo] = useState("");
    const [dates, setDates] = useState("");
    const [travelers, setTravelers] = useState("1 Room, 2 Adults");

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 768) {
                const triggerPoint = 430;
                setIsSticky(window.scrollY > triggerPoint);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Form Submit Handler
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Triggered:", { type: activeTab, leavingFrom, goingTo, dates, travelers });
        // Add your API call or navigation logic here later
    };

    return (
        <>
            {/* BREADCRUMB */}
            <div className="max-w-[1200px] mx-[10px] px-[20px] py-[12px] text-[13px] font-[500] text-[#004a87]">
                <div className="flex items-center flex-wrap gap-2">
                    <a href="/mprtravels/" className="text-[16px] font-bold text-[#113b63] no-underline">Home</a>
                    <span className="text-[#999]"><Icons.ChevronRight /></span>
                    <a href="#" className="text-[16px] font-bold text-[#113b63] no-underline">Destinations</a>
                    <span className="text-[#999]"><Icons.ChevronRight /></span>
                    {/* Replaced hardcoded "Mexico" with dynamic prop */}
                    <span className="text-[16px] text-[#333]">{destinationName}</span>
                </div>
            </div>

            {/* HERO SECTION */}
            <section
                className="relative flex flex-col items-center justify-center text-center w-full h-[660px] md:h-[480px] bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${heroImg})` }}
            >
                <h1 className="text-white font-[500] mb-[20px] md:mb-[160px] text-[34px] leading-tight md:text-[56px] md:leading-[64px] [text-shadow:2px_2px_0px_#004a87,4px_4px_10px_rgba(0,0,0,0.3)]">
                    All-Inclusive Vacation Deals
                </h1>

                {/* SEARCH WIDGET */}
                <div className={`w-[95%] md:w-[92%] max-w-[1140px] z-[11] md:absolute md:bottom-[85px] md:left-1/2 md:-translate-x-1/2 ${isSticky ? "md:fixed md:top-0 md:left-0 md:translate-x-0 md:w-full md:max-w-full" : ""}`}>

                    {/* TABS - Matches image_da675d.jpg curvature */}
                    <div className={`flex gap-[6px] mb-[-1px] ${isSticky ? "hidden" : ""}`}>
                        {["hotel-flight", "hotel", "flight"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={` cursor-pointer flex items-center justify-center gap-2 md:px-6  md:ml-0 ml-3.5 p-2 rounded-t-[12px] md:text-[14px] text-[11px] md:font-bold font-normal transition-all border-t-4 ${activeTab === tab
                                    ? "bg-white border-[#004a87] text-[#004a87]"
                                    : "md:bg-white/90 bg-white border-transparent text-[#004a87] hover:bg-white"
                                    }`}
                            >
                                {tab === "hotel-flight" && <Icons.Hotel />}
                                {tab === "hotel" && <Icons.Building />}
                                {tab === "flight" && <Icons.Plane />}
                                {tab === "hotel-flight" ? "Hotel + Flight" : tab === "hotel" ? "Hotel Only" : "Flight Only"}
                            </button>
                        ))}
                    </div>

                    {/* SEARCH BOX */}
                    <div className={`bg-white border border-[#ddd] shadow-[0_4px_25px_rgba(0,0,0,0.15)] p-[20px] md:px-[30px] md:pt-[10px] md:pb-[10px] rounded-[15px] md:rounded-[0_15px_15px_15px] ${isSticky ? "md:rounded-none md:px-[40px] md:py-[10px]" : ""}`}>

                        {/* SAVINGS INFO */}
                        {!isSticky && (
                            <div className="flex items-center gap-[8px] text-[15px] mb-[20px]">
                                <span className="flex items-center gap-1 text-[#83a72d]">
                                    <Icons.Building /> <span className="font-bold">+</span> <Icons.Plane />
                                </span>
                                <p className="text-[#333] ml-2">
                                    Users save on average <span className="text-[#83a72d] font-bold">$665</span> by bundling flight + hotel
                                </p>
                                <span className="cursor-help"><Icons.Info /></span>
                            </div>
                        )}

                        {/* INPUT GRID - Form wrapper added for functional submit */}
                        <form onSubmit={handleSearch} className="relative flex flex-col md:flex-row items-stretch border border-[#ccc] rounded-[4px]">

                            {/* Leaving From */}
                            <div className="relative flex-1 border-b md:border-b-0 md:border-r border-[#ccc] px-[15px] py-[10px]">
                                <label className="absolute -top-[10px] left-[10px] bg-white px-[8px] text-[12px] text-[#666] font-medium z-10">
                                    Leaving From
                                </label>
                                <div className="flex items-center gap-[12px] h-[35px]">
                                    <Icons.MapPin />
                                    <input
                                        type="text"
                                        value={leavingFrom}
                                        onChange={(e) => setLeavingFrom(e.target.value)}
                                        className="w-full border-none outline-none text-[16px] text-[#444] placeholder:text-[#999]"
                                    />
                                </div>
                            </div>

                            {/* Going To */}
                            <div className="flex-1 border-b md:border-b-0 md:border-r border-[#ccc] px-[15px] py-[10px]">
                                <div className="flex items-center gap-[12px] h-[35px]">
                                    <Icons.MapPin />
                                    <input
                                        type="text"
                                        placeholder="Going To"
                                        value={goingTo}
                                        onChange={(e) => setGoingTo(e.target.value)}
                                        className="w-full border-none outline-none text-[16px] text-[#444] placeholder:text-[#999]"
                                    />
                                </div>
                            </div>

                            {/* Dates */}
                            <div className="flex-1 border-b md:border-b-0 md:border-r border-[#ccc] px-[15px] py-[10px]">
                                <div className="flex items-center gap-[12px] h-[35px]">
                                    <Icons.Calendar />
                                    <input
                                        type="text"
                                        placeholder="Departure - Return"
                                        value={dates}
                                        onChange={(e) => setDates(e.target.value)}
                                        className="w-full border-none outline-none text-[16px] text-[#444] placeholder:text-[#999]"
                                    />
                                </div>
                            </div>

                            {/* Travelers */}
                            <div className="relative flex-1 px-[15px] py-[10px]">
                                <label className="absolute -top-[10px] left-[10px] bg-white px-[8px] text-[12px] text-[#666] font-medium z-10">
                                    Rooms - Travelers
                                </label>
                                <div className="flex items-center gap-[12px] h-[35px]">
                                    <Icons.Users />
                                    <input
                                        type="text"
                                        value={travelers}
                                        onChange={(e) => setTravelers(e.target.value)}
                                        className="w-full border-none outline-none text-[16px] text-[#444]"
                                    />
                                </div>
                            </div>

                            {/* SEARCH BUTTON */}
                            <button type="submit" className="bg-[#113b63] text-white flex items-center justify-center min-w-[60px] md:min-w-[70px] py-[15px] md:py-0 transition-colors hover:bg-[#0a2845] md:rounded-r-[3px]">
                                <Icons.Search />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSearch;