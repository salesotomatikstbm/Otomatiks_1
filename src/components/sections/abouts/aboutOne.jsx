import React from 'react';
import Title from '@/components/ui/title';
import about_img_1 from "@/assets/images/about/about-1.png";
import icreement from "@/assets/images/about/icreement.png";
import shap_1 from "@/assets/images/about/shap-1.png";
import customer from "@/assets/images/about/customer.png";
import { cn } from '@/lib/utils';
import SlideUp from '@/lib/animations/slideUp';
import SectionName from '@/components/ui/sectionName';
import SectionDescription from '@/components/ui/sectionDescription';

const AboutOne = ({ gridClass, isAboutpage }) => {
  return (
    <section
      aria-labelledby="about-us-title"
      className="lg:pt-0 pt-0 lg:pb-15 pb-10"
    >
      <div className="container">
        <div
          className={cn(
            "grid lg:grid-cols-[50%_50%] grid-cols-1 items-center lg:ml-4 md:gap-6",
            gridClass
          )}
        >
          {/* Left side image and statistics */}
          <div className="relative sm:block hidden">
            <div className="flex sm:flex-row flex-col sm:items-end gap-6">
              <SlideUp>
                <figure className="relative">
                  <img src={shap_1} alt="Decorative shape element" />
                  <div className="ml-9">
                    <img
                      src={about_img_1}
                      alt="Students building a robotics project"
                      className="w-full"
                    />
                  </div>
                  <figcaption className="absolute -bottom-12.5 left-0 bg-[#066aab] rounded-[10px] py-4 px-[22px] flex items-center gap-3">
                    <div className="bg-background w-11 h-11 rounded-full flex justify-center items-center">
                      <img src={customer} alt="Icon representing students trained" />
                    </div>
                    <div>
                      <h6 className="text-cream-foreground font-bold text-2xl">
                        1,00,000+
                      </h6>
                      <p className="text-cream-foreground">Students Trained</p>
                    </div>
                  </figcaption>
                </figure>
              </SlideUp>

              <div className="flex sm:flex-col gap-8">
                <div className="bg-[#066aab] max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col items-center justify-center text-center hidden sm:flex">
                  <img src={icreement} alt="Otomatiks Robotics Academy logo" />
                  <h6 className="text-cream-foreground text-xl font-bold">
                    Otomatiks
                  </h6>
                  <p className="text-cream-foreground">Robotics Academy</p>
                </div>
                <div className="bg-[#066aab] max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center hidden sm:flex drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                  <h6 className="text-cream-foreground text-[32px] font-bold">
                    14+
                  </h6>
                  <p className="text-cream-foreground">Years Of Experience</p>
                </div>
                <div className="bg-[#066aab] max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center hidden sm:flex drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                  <h6 className="text-cream-foreground text-[32px] font-bold">
                    20
                  </h6>
                  <p className="text-cream-foreground">Our Hubs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className={`${isAboutpage ? "" : "lg:max-w-[839px]"} pt-7.5`}>
            <SectionName id="about-us-title">Our Story</SectionName>
            <Title size={"3.5xl"}>
              Empowering Young Innovators Through Creativity and Technology
            </Title>
            <SectionDescription>
              <p className="mt-4 mb-4 text-justify">
                At Otomatiks, we believe in the power of curiosity and innovation to
                shape the future. Our journey began with a passion for robotics and a
                vision to make cutting-edge technology accessible to young minds.
                Founded by a team of educators and tech enthusiasts, Otomatiks has
                grown into a leading provider of Robotics & AI education, empowering
                students to become tomorrow's innovators.
              </p>
              <p className="mb-4 text-justify">
                We started with a simple idea: to create hands-on learning experiences
                that ignite a love for science, technology, engineering, and
                mathematics (STEM). From our first classroom workshop to partnering
                with schools nationwide, we've been committed to nurturing creativity
                and critical thinking in students of all ages.
              </p>
            </SectionDescription>

            {/* Vision and Mission */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 mt-10">
              <div className="flex-1 border-2 border-[#066aab] rounded-lg p-6 bg-background drop-shadow-lg transition duration-300">
                <SectionName className="text-center">Our Vision</SectionName>
                <SectionDescription className="text-center mt-4">
                  To make students globally recognized by changing the way they think.
                </SectionDescription>
              </div>

              <div className="flex-1 border-2 border-[#066aab] rounded-lg p-6 bg-background drop-shadow-lg transition duration-300">
                <SectionName className="text-center">Our Mission</SectionName>
                <SectionDescription className="text-center mt-4">
                  To bridge the gap between academics and real-time environments.
                </SectionDescription>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOne;
