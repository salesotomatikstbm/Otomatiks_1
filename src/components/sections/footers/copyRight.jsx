import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'

const CopyRight = ({ color }) => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <div className="pt-[75px] overflow-x-hidden">
            <div className="flex lg:flex-row flex-col justify-between lg:items-center pt-7.5 pb-8 border-t border-t-white border-opacity-20">
                <p className={cn('wow fadeInLeft', color)} data-wow-delay=".3s">
                    © <Link to="#">Otomatiks</Link> {currentYear} | All Rights Reserved. Designed by Otomatiks
                </p>
                <ul className="flex items-center gap-7.5 wow fadeInRight" data-wow-delay=".3s">
                    {/* <li><Link to="#" className={cn(``, color)}>Terms & Condition</Link></li>
                    <li><Link to="#" className={cn(``, color)}>Privacy Policy</Link></li>
                    <li><Link to="#" className={cn(``, color)}>Contact Us</Link></li> */}
                </ul>
            </div>
        </div>
    );
};

export default CopyRight;
