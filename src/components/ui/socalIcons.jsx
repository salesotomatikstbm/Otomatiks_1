import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaXTwitter, FaLinkedin, FaPinterestP } from "react-icons/fa6";
import { cn } from '@/lib/utils';

const icons = [
    {
        id: 1,
        link: "",
        icon: <FaFacebookF />
    },
    {
        id: 2,
        link: "",
        icon: <FaXTwitter />
    },
    {
        id: 3,
        link: "",
        icon: <FaLinkedin />
    },
    {
        id: 4,
        link: "",
        icon: <FaPinterestP />
    },

]
const SocalIcons = ({className, prentClass}) => {
    return (
        <ul className={cn("flex items-center gap-[14px]", prentClass)}>
            {
                icons.map(({ icon, id, link }) => {
                    return (
                        <li key={id}>
                            <Link to={link} className={cn('rounded-md w-6 h-6 flex items-center justify-center border border-white border-opacity-20 text-cream-foreground hover:bg-primary transition-all duration-500', className)}>
                                {icon}
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default SocalIcons