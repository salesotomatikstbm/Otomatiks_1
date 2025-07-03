import React from 'react';
import bread_cat from "@/assets/images/shapes/bread-cat.png";
import bread_thumb from "@/assets/images/shapes/bread-thumb.png";
import bread_child from "@/assets/images/shapes/bread-child.png";
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';

const PageTitle = ({ pageName, breadcrumbLink = "/", breadcrumbCurrent, className = "" }) => {
  return (
    <section
      className={`lg:pb-15 pb-10 ${className}`}
      aria-labelledby="page-title-heading"
    >
      <div className="bg-[#066aab] lg:py-15 py-10">
        <div className="container">
          <div className="flex md:flex-row flex-col justify-between items-center gap-10">
            <div>
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb">
                <ol className="lg:pt-5 pt-3 flex items-center lg:gap-5 gap-2 text-white">
                  <li>
                    <Link
                      to={breadcrumbLink}
                      className="lg:text-[28px] text-xl font-bold hover:underline"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <FaAngleRight />
                  </li>
                  <li aria-current="page">
                    <span className="lg:text-[28px] text-xl font-bold text-white">
                      {breadcrumbCurrent}
                    </span>
                  </li>
                </ol>
              </nav>

              {/* Page Heading */}
              <h1
                id="page-title-heading"
                className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%] text-white mt-2"
              >
                {pageName}
              </h1>
            </div>

            {/* Optional Decorative Images */}
            {/* 
            <div className="relative hidden md:block">
              <img
                src={bread_cat}
                alt="Decorative cat shape"
                className="absolute bottom-5 -left-[30px] animate-up-down"
                loading="lazy"
              />
              <img
                src={bread_thumb}
                alt="Decorative thumb shape"
                className="sm:max-h-full max-h-60"
                loading="lazy"
              />
              <img
                src={bread_child}
                alt="Decorative child shape"
                className="absolute bottom-0 right-0 animate-left-right"
                loading="lazy"
              />
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
