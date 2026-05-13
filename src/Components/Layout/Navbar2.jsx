import React, { useState, useEffect } from 'react';
import logo from '../../assets/Home/websitLogo.png';

import {
    MapPin,
    Building2,
    Landmark,
    Users,
    Briefcase,
    CircleHelp,
    ChevronDown
} from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Reusable Desktop Dropdown Item
    const DropdownItem = ({ href, title }) => (
        <a
            href={href}
            className="text-[#113b63] !px-[16px] !py-[12px] block text-[14px] border-b border-[#f1f1f1] leading-normal hover:bg-slate-50 transition-colors"
        >
            {title}
        </a>
    );

    // Reusable Mobile Accordion Item
    const MobileMenuItem = ({ icon: Icon, title, items, href }) => {
        const [isOpen, setIsOpen] = useState(false);

        if (!items) {
            return (
                <a href={href} onClick={() => setIsMobileMenuOpen(false)} className="flex justify-start items-center gap-[10px] px-[20px] py-[15px] border-b border-[#e5e5e5] w-full text-[16px] tracking-[0.5px] font-[300] text-[#113b63] leading-[24px]">
                    <Icon className="w-[18px] h-[18px] text-[#002d5b]" />
                    {title}
                </a>
            );
        }

        return (
            <div className="w-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-start items-center gap-[10px] px-[20px] py-[15px] border-b border-[#e5e5e5] w-full text-[16px] tracking-[0.5px] font-[300] text-[#113b63] leading-[24px]"
                >
                    <Icon className="w-[18px] h-[18px] text-[#002d5b]" />
                    {title}
                    <ChevronDown
                        className={`w-[11px] h-[11px] text-[#004a87] ml-auto transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        strokeWidth={3}
                    />
                </button>
                <div className={`w-full bg-[#f9f9f9] overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <div className="flex flex-col">
                        {items.map((item, idx) => (
                            <a key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[#113b63] px-[16px] py-[12px] text-[14px] border-b border-[#f1f1f1] leading-normal pl-[48px]">
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Header matches .apple-header */}
            <nav className="w-full bg-white border-b border-[#e5e5e5] p-0 sticky top-0 z-50">
                {/* Inner Container matches .header-inner */}
                <div className="max-w-[1300px] mx-auto px-[15px] flex items-center justify-between relative">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 cursor-pointer">
                        <a href="#">
                            <img
                                src={logo}
                                alt="MPR Travel"
                                className="h-[88px] w-auto object-contain"
                            />
                        </a>
                    </div>

                    {/* Desktop Main Navigation matches .nav-menu */}
                    <div className="hidden lg:flex items-center gap-[30px] lg:ml-[-320px]">

                        {/* Destinations Dropdown */}
                        <div className="relative group">
                            <div className="cursor-pointer text-[18px] tracking-[0.5px] font-[300] text-[#113b63] flex leading-[24px] items-center gap-[10px] transition-all duration-300 py-[10px]">
                                <MapPin className="w-[18px] h-[18px] text-[#002d5b]" />
                                Destinations
                                <ChevronDown className="w-[11px] h-[11px] text-[#004a87] -ml-[4px]" strokeWidth={3} />
                            </div>
                            <div className="hidden group-hover:block absolute bg-white min-w-[190px] shadow-[0_8px_16px_0_rgba(0,0,0,0.1)] z-[1001] border border-[#e5e5e5] top-full left-[-40%]">
                                <DropdownItem href="#dubai" title="Dubai" />
                                <DropdownItem href="#saudi" title="Saudi" />
                                <DropdownItem href="#hawaii" title="Hawaii" />
                            </div>
                        </div>

                        {/* Deals Dropdown */}
                        <div className="relative group">
                            <div className="cursor-pointer text-[16px] tracking-[0.5px] font-[300] text-[#113b63] flex leading-[24px] items-center gap-[10px] transition-all duration-300 py-[10px]">
                                <Building2 className="w-[18px] h-[18px] text-[#002d5b]" />
                                Deals
                                <ChevronDown className="w-[11px] h-[11px] text-[#004a87] -ml-[4px]" strokeWidth={3} />
                            </div>
                            <div className="hidden group-hover:block absolute bg-white min-w-[190px] shadow-[0_8px_16px_0_rgba(0,0,0,0.1)] z-[1001] border border-[#e5e5e5] top-full left-[-40%]">
                                <DropdownItem href="#deals" title="All-Inclusive Packages" />
                                <DropdownItem href="#early-booking" title="Early Booking" />
                            </div>
                        </div>

                        {/* Resorts Dropdown */}
                        <div className="relative group">
                            <div className="cursor-pointer text-[16px] tracking-[0.5px] font-[300] text-[#113b63] flex leading-[24px] items-center gap-[10px] transition-all duration-300 py-[10px]">
                                <Landmark className="w-[18px] h-[18px] text-[#002d5b]" />
                                Resorts
                                <ChevronDown className="w-[11px] h-[11px] text-[#004a87] -ml-[4px]" strokeWidth={3} />
                            </div>
                            <div className="hidden group-hover:block absolute bg-white min-w-[190px] shadow-[0_8px_16px_0_rgba(0,0,0,0.1)] z-[1001] border border-[#e5e5e5] top-full left-[-40%]">
                                <DropdownItem href="#resorts" title="Hotels & Resorts" />
                                <DropdownItem href="#adults-only" title="Adults Only" />
                            </div>
                        </div>

                        {/* Groups */}
                        <a href="#groups" className="cursor-pointer text-[16px] tracking-[0.5px] font-[300] text-[#113b63] flex leading-[24px] items-center gap-[10px] transition-all duration-300 py-[10px]">
                            <Users className="w-[18px] h-[18px] text-[#002d5b]" />
                            Groups
                        </a>

                    </div>

                    {/* Right Section: Utilities matches .right-menu */}
                    <div className="hidden lg:flex items-center gap-[25px]">
                        <a href="#find-trip" className="cursor-pointer text-[16px] tracking-[0.5px] font-[300] text-[#113b63] flex leading-[24px] items-center gap-[10px] transition-all duration-300 py-[10px]">
                            <Briefcase className="w-[18px] h-[18px] text-[#002d5b]" />
                            Find My Trip
                        </a>

                        {/* Help Dropdown */}
                        <div className="relative group">
                            <div className="cursor-pointer text-[16px] tracking-[0.5px] font-[300] text-[#113b63] flex leading-[24px] items-center gap-[10px] transition-all duration-300 py-[10px]">
                                <CircleHelp className="w-[18px] h-[18px] text-[#002d5b]" />
                                Help
                                <ChevronDown className="w-[11px] h-[11px] text-[#004a87] -ml-[4px]" strokeWidth={3} />
                            </div>
                            <div className="hidden group-hover:block absolute bg-white min-w-[190px] shadow-[0_8px_16px_0_rgba(0,0,0,0.1)] z-[1001] border border-[#e5e5e5] top-full left-[-40%]">
                                <DropdownItem href="#faq" title="FAQ" />
                                <DropdownItem href="tel:800-517-2000" title="Call Us" />
                                <DropdownItem href="#contact" title="Contact Us" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <div
                        className="lg:hidden flex flex-col gap-[5px] cursor-pointer z-[1002]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`w-[26px] h-[2px] bg-[#003b71] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`w-[26px] h-[2px] bg-[#003b71] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-[26px] h-[2px] bg-[#003b71] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </div>

                </div>
            </nav>

            {/* Mobile Slide-Over Sidebar (Matches old left-slide sidebar) */}

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/20 z-[999] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <div
                className={`fixed top-[89px] w-[310px] h-[calc(100vh-89px)] bg-white flex flex-col transition-all duration-300 z-[1000] shadow-[2px_0_10px_rgba(0,0,0,0.1)] pt-[60px] lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'left-0' : 'left-[-100%]'}`}
            >
                <MobileMenuItem
                    icon={MapPin}
                    title="Destinations"
                    items={[{ title: "Dubai", href: "#dubai" }, { title: "Saudi", href: "#saudi" }, { title: "Hawaii", href: "#hawaii" }]}
                />
                <MobileMenuItem
                    icon={Building2}
                    title="Deals"
                    items={[{ title: "All-Inclusive Packages", href: "#deals" }, { title: "Early Booking", href: "#early-booking" }]}
                />
                <MobileMenuItem
                    icon={Landmark}
                    title="Resorts"
                    items={[{ title: "Hotels & Resorts", href: "#resorts" }, { title: "Adults Only", href: "#adults-only" }]}
                />
                <MobileMenuItem
                    icon={Users}
                    title="Groups"
                    href="#groups"
                />

                {/* Mobile-Only Links injected into Sidebar */}
                <MobileMenuItem
                    icon={Briefcase}
                    title="Find My Trip"
                    href="#find-trip"
                />
                <MobileMenuItem
                    icon={CircleHelp}
                    title="Help"
                    items={[{ title: "FAQ", href: "#faq" }, { title: "Contact Us", href: "#contact" }]}
                />
            </div>
        </>
    );
};

export default Navbar;