/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ok from "../../../assets/images/services/ok.svg";
import aboutTwo from "../../../assets/images/services/about2.png";
import Title from '@/components/ui/title'
import SectionName from '@/components/ui/sectionName'
import SectionDescription from '@/components/ui/sectionDescription'

const Platform = () => {
  return (
    <div className="bg-warm bg-cover bg-no-repeat bg-center section-padding py-16">
      <div className="container">
        <div className="lg:grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
          <SectionName>Online Classes</SectionName>
          <Title size={"3.5xl"} className={"pb-5"}>Lorem ipsum dolor sit amet consectetur adipiscing</Title>
          <SectionDescription>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                            massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. </SectionDescription>
            <ul className=" space-y-2 pt-8">
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    9/10 Average Satisfaction Rate
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    96% Completitation Rate
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    Friendly Environment & Expert Teacher
                  </h4>
                </div>
              </li>
            </ul>
          
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:pt-0 md:pt-10 pt-6">
            <img src={aboutTwo} alt="" className=" mx-auto block w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
