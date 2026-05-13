import React from 'react';
import { Star, Globe, CheckCircle2 } from 'lucide-react';

const TourCard = ({
    image,
    rating,
    reviews,
    title,
    location,
    price,
    badge
}) => {
    return (
        <div className="flex flex-col sm:flex-row p-2.5 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow gap-3 w-full">

            {/* Image Section */}
            <div className="relative w-full sm:w-[215px] h-[180px] sm:h-[174px] flex-shrink-0 rounded-md overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {badge && (
                    <span className="absolute top-1.5 left-1.5 bg-white/95 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm">
                        {badge}
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow justify-between py-0.5 min-w-0">
                <div>
                    {/* Rating */}
                    <div className="flex items-center text-[11px] mb-1.5">
                        <Star className="w-3 h-3 text-[#00a698] fill-[#00a698] mr-0.5 flex-shrink-0" />
                        <span className="tex-xl font-bold mr-0.5">{rating}</span>
                        <span className="text-gray-400">({reviews})</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-medium text-[18px] leading-[1.3] text-gray-900 mb-2 line-clamp-2">
                        {title}
                    </h3>

                    {/* Location & Cancellation */}
                    <div className="flex  flex-wrap items-center text-[12px] text-gray-500 gap-x-3 gap-y-1">
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            <Globe className="w-3.5 h-3.5 flex-shrink-0" />
                            {location}
                        </span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00a698] flex-shrink-0" />
                            Free Cancellation
                        </span>
                    </div>
                </div>

                {/* Pricing & Button */}
                <div className="flex flex-col justify-between items-start mt-auto pt-3">
                    <span className="text-[18px] text-gray-900">
                        from <span className="font-bold text-[16px] text-gray-900">{price}</span>
                    </span>
                    <button className="bg-[#1a1a1a] text-white text-[15px]  px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors flex-shrink-0">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourCard;