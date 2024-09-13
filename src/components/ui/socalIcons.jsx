import React from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedin, FaPinterestP, FaYoutube, FaInstagram } from "react-icons/fa6";
import { cn } from '@/lib/utils';

const icons = [
    {
        id: 1,
        link: "https://youtube.com/@otomatiks5317?si=-PY58fVw70xM65D0",
        icon: <FaYoutube />
    },
    {
        id: 2,
        link: "https://www.facebook.com/otomatiks/",
        icon: <FaFacebookF />
    },
    {
        id: 3,
        link: "https://www.instagram.com/otomatiks_robotics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        icon: <FaInstagram />
    },
    {
        id: 4,
        link: "https://www.linkedin.com/company/otomatiksho/",
        icon: <FaLinkedin />
    }
];

const SocalIcons = ({ className, prentClass }) => {
    return (
        <ul className={cn("flex items-center gap-[14px]", prentClass)}>
            {
                icons.map(({ icon, id, link }) => (
                    <li key={id}>
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={cn('rounded-md w-6 h-6 flex items-center justify-center border border-white border-opacity-20 text-cream-foreground hover:bg-primary transition-all duration-500', className)}
                        >
                            {icon}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}

export default SocalIcons;
