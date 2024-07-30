import { cn } from "@/lib/utils";
import React from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const Rating = ({ star, className }) => {
    const starRating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <li key={index}>
                {star >= index + 1 ? (
                    <FaStar className={cn(`text-primary-foreground text-xl cursor-pointer ${className}`)} />
                ) : star >= number ? (
                    <FaRegStarHalfStroke className={cn(`text-primary-foreground text-xl cursor-pointer ${className}`)} />
                ) : (
                    <FaRegStar className={cn(`text-primary-foreground text-xl cursor-pointer ${className}`)} />
                )}
            </li>
        );
    });
    return <ul className={cn(`flex gap-1 lg:pt-10 pt-5 ${className}`)}>{starRating}</ul>;
};

export default Rating;