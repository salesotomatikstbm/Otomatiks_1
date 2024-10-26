/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ok from "../../../assets/images/services/ok.svg";
import aboutTwo from "../../../assets/images/services/about2.png";
import Title from '@/components/ui/title'
import SectionName from '@/components/ui/sectionName'
import SectionDescription from '@/components/ui/sectionDescription'

const Platform = () => {
  return (
    <div className=" bg-cover bg-no-repeat bg-center section-padding py-16">
      <div className="container">
        <div className="lg:grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <SectionName>Robotics Online Classes</SectionName>
            <Title size={"3.5xl"} className={"pb-5 "}>Explore the World of Robotics from Home</Title>
            <SectionDescription className={""}>
              Dive into robotics education with our comprehensive online classes. Designed for students of all ages, our courses make learning about robotics engaging and accessible.
            </SectionDescription>
            <SectionDescription>
              Join a community of learners, connect with instructors in real-time, and gain practical skills that prepare you for a future in STEM.
            </SectionDescription>
            <ul className="space-y-2 pt-8 ">
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="Check mark" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg mb-1 font-semibold">
                  Expert Instructors
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="Check mark" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg mb-1 font-semibold">
                  Hands-On Projects
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="Check mark" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg mb-1 font-semibold">
                  Live Virtual Classes
                  </h4>
                </div>
              </li>
              
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="Check mark" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg mb-1 font-semibold">
                  Personalized Feedback
                  </h4>
                </div>
              </li>
            </ul>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:pt-10 md:pt-10 ">
            <img src={aboutTwo} alt="Robotics class illustration" className="mx-auto block w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
