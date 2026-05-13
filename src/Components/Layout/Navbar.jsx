import React, { useState, useEffect } from 'react';
import logo from '../../assets/Home/websitLogo.png';

import {
    MapPin,
    Building2,
    Landmark,
    Users,
    Briefcase,
    CircleHelp,
    ChevronDown,
    Menu,
    X,
    ChevronRight
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

    // Reusable Dropdown Item Component
    const DropdownItem = ({ href, title, description }) => (
        <a
            href={href}
            className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
        >
            <div className="text-sm font-semibold text-[#003b75] group-hover/item:text-[#003b75]">
                {title}
            </div>
            {description && (
                <div className="text-xs text-slate-500 mt-0.5">
                    {description}
                </div>
            )}
        </a>
    );

    // Reusable Mobile Accordion Item
    const MobileMenuItem = ({ icon: Icon, title, items }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="border-b border-gray-100 last:border-0">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between py-4 text-[#003b75]"
                >
                    <div className="flex items-center gap-3 font-medium">
                        <Icon className="w-5 h-5" />
                        <span>{title}</span>
                    </div>
                    {items && (
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                    )}
                </button>
                {items && (
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-8 flex flex-col gap-3">
                            {items.map((item, idx) => (
                                <a key={idx} href={item.href} className="text-sm text-slate-600 hover:text-[#003b75]">
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <nav className="w-full bg-white shadow-sm border-b border-gray-100 ">
                {/* RESPONSIVE UPDATE: Fluid padding based on screen size */}
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-28">
                    <div className="flex justify-between items-center h-[88px]">

                        {/* Left Section: Logo + Main Nav */}
                        {/* RESPONSIVE UPDATE: Gap scales down on smaller laptops */}
                        <div className="flex items-center gap-6 xl:gap-12">
                            {/* Logo */}
                            <a href="/" className="flex-shrink-0 cursor-pointer">
                                <img
                                    src={logo}
                                    alt="MPR Travel"
                                    className="h-24 w-auto object-contain"
                                />
                            </a>

                            {/* Desktop Main Navigation */}
                            {/* RESPONSIVE UPDATE: space-x scales fluidly */}
                            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">

                                {/* Destinations Dropdown */}
                                <div className="relative group h-[88px] flex items-center">
                                    <div className="flex items-center gap-1.5 text-[#003b75] hover:text-[#003b75] cursor-pointer transition-colors text-[16px]">
                                        <MapPin className="w-[18px] h-[18px]" strokeWidth={2.5} />
                                        <span className="font-medium">Destinations</span>
                                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                                    </div>
                                    {/* Modern Floating Dropdown */}
                                    <div className="absolute top-[75px] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
                                        <DropdownItem href="#dubai" title="Dubai" />
                                        <DropdownItem href="#saudi" title="Saudi" />
                                        <DropdownItem href="#hawali" title="Hawali" />
                                    </div>
                                </div>

                                {/* Deals Dropdown */}
                                <div className="relative group h-[88px] flex items-center">
                                    <div className="flex items-center gap-1.5 text-[#003b75] hover:text-[#003b75] cursor-pointer transition-colors text-[16px]">
                                        <Building2 className="w-[18px] h-[18px]" strokeWidth={2.5} />
                                        <span className="font-medium">Deals</span>
                                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                                    </div>
                                    <div className="absolute top-[75px] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
                                        <DropdownItem href="#all-inclusive" title="All-Inclusive Packages" />
                                        <DropdownItem href="#early-booking" title="Early Booking" />

                                    </div>
                                </div>

                                {/* Resorts Dropdown */}
                                <div className="relative group h-[88px] flex items-center">
                                    <div className="flex items-center gap-1.5 text-[#003b75] hover:text-[#003b75] cursor-pointer transition-colors text-[16px]">
                                        <Landmark className="w-[18px] h-[18px]" strokeWidth={2.5} />
                                        <span className="font-medium">Resorts</span>
                                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                                    </div>
                                    <div className="absolute top-[75px] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
                                        <DropdownItem href="#hotels-resorts" title="Hotels Resorts" />
                                        <DropdownItem href="#adults-only" title="Adults Only" />
                                    </div>
                                </div>

                                {/* Groups */}
                                <div className="flex items-center gap-1.5 text-[#003b75] hover:text-[#003b75] cursor-pointer transition-colors text-[16px]">
                                    <Users className="w-[18px] h-[18px]" strokeWidth={2.5} />
                                    <span className="font-medium">Groups</span>
                                </div>

                            </div>
                        </div>

                        {/* Right Section: Utilities */}
                        {/* RESPONSIVE UPDATE: space-x scales fluidly */}
                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                            <div className="flex items-center gap-1.5 text-[#003b75] hover:text-[#003b75] cursor-pointer transition-colors text-[16px]">
                                <Briefcase className="w-[18px] h-[18px]" strokeWidth={2.5} />
                                <span className="font-medium">Find My Trip</span>
                            </div>

                            {/* Help Dropdown */}
                            <div className="relative group h-[88px] flex items-center">
                                <div className="flex items-center gap-1.5 text-[#003b75] hover:text-[#003b75] cursor-pointer transition-colors text-[16px]">
                                    <CircleHelp className="w-[18px] h-[18px]" strokeWidth={2.5} />
                                    <span className="font-medium">Help</span>
                                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                                </div>
                                <div className="absolute top-[75px] right-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
                                    <DropdownItem href="#faq" title="FAQs" />
                                    <DropdownItem href="#call-us" title="Call Us" />
                                    <DropdownItem href="#contact-us" title="Contact Us" />
                                </div>
                            </div>
                        </div>

                        {/* Mobile Toggle Button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="text-[#003b75] p-2 hover:bg-slate-50 rounded-lg transition-colors"
                            >
                                <Menu className="w-7 h-7" />
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Modern Mobile Slide-Over Drawer */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Drawer Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-4">
                    <MobileMenuItem
                        icon={MapPin}
                        title="Destinations"
                        items={[{ title: "Dubai", href: "#" }, { title: "Saudi Arabia", href: "#" }, { title: "Hawali", href: "#" }]}
                    />
                    <MobileMenuItem
                        icon={Building2}
                        title="Deals"
                        items={[{ title: "All-Inclusive Packages", href: "#" }, { title: "Early Booking", href: "#" }]}
                    />
                    <MobileMenuItem
                        icon={Landmark}
                        title="Resorts"
                        items={[{ title: "Hotels Resorts", href: "#" }, { title: "Adults Only", href: "#" }]}
                    />
                    <MobileMenuItem icon={Users} title="Groups" />

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <MobileMenuItem icon={Briefcase} title="Find My Trip" />
                        <MobileMenuItem
                            icon={CircleHelp}
                            title="Help"
                            items={[{ title: "FAQs", href: "#" }, { title: "Call Us", href: "#" }, { title: "Contact Us", href: "#" }]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;