import React from 'react';
// Make sure to import your images or update these paths to your project structure

import img1 from '../../../assets/Home/Promotionimg/img1.png';
import img2 from '../../../assets/Home/Promotionimg/img2.png';
import img3 from '../../../assets/Home/Promotionimg/img3.png';


const TopPromotions = () => {
    return (
        <section className="max-w-[1400px] mx-auto mb-[60px] px-[16px] sm:px-[40px] mt-[-20px] sm:mt-[30px]">

            <h2 className="text-center text-[24px] font-bold text-[rgba(5,13,41,0.65)] relative leading-[30px] font-[serif] mb-[50px] after:content-[''] after:w-[60px] after:h-[3px] after:bg-[#c62828] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[12px]">
                This Week's Top Promotions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[28px]">

                {/* Card 1 */}
                <div className="border border-[#7a7a7a] p-3">
                    <img
                        src={img1}
                        alt="Puerto Vallarta"
                        className="w-full h-[200px] sm:h-[230px] object-cover block"
                    />
                    <div className="pt-[16px] px-[14px] pb-[22px] sm:pt-[18px] sm:px-0 sm:pb-[24px]">
                        <h3 className="font-bold text-[#113b63] mb-[18px] text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px]">
                            Escape To Puerto Vallarta
                        </h3>
                        <a href="#" className="inline-block bg-[#0a2f5a] text-white text-[13px] font-bold px-[18px] py-[10px] tracking-[1px] no-underline rounded-[3px]">
                            SEE DEALS
                        </a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="border border-[#7a7a7a] p-3">
                    <img
                        src={img2}
                        alt="Beach"
                        className="w-full h-[200px] sm:h-[230px] object-cover block"
                    />
                    <div className="pt-[16px] px-[14px] pb-[22px] sm:pt-[18px] sm:px-0 sm:pb-[24px]">
                        <h3 className="font-bold text-[#113b63] mb-[18px] text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px]">
                            Hand-Picked, Last Minute Deals Up To 70%.
                        </h3>
                        <a href="#" className="inline-block bg-[#0a2f5a] text-white text-[13px] font-bold px-[18px] py-[10px] tracking-[1px] no-underline rounded-[3px]">
                            SEE DEALS
                        </a>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="border border-[#7a7a7a] p-3">
                    <img
                        src={img3}
                        alt="Dominican Republic"
                        className="w-full h-[200px] sm:h-[230px] object-cover block"
                    />
                    <div className="pt-[16px] px-[14px] pb-[22px] sm:pt-[18px] sm:px-0 sm:pb-[24px]">
                        <h3 className="font-bold text-[#113b63] mb-[18px] text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px]">
                            Adventure Awaits In The Dominican Republic
                        </h3>
                        <a href="#" className="inline-block bg-[#0a2f5a] text-white text-[13px] font-bold px-[18px] py-[10px] tracking-[1px] no-underline rounded-[3px]">
                            SEE DEALS
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TopPromotions;