import React from "react";
import { Icon } from '@iconify/react';
import Title from '@/components/ui/title'
import SectionName from '@/components/ui/sectionName'
import SectionDescription from '@/components/ui/sectionDescription'
const Feature = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding pb-10">
      <div className="container">
        <div className="">

        <SectionName>Why Robotics for kids</SectionName>
                        <Title size={"3.5xl"} className={"pb-5"}>Lorem ipsum dolor sit amet consectetur adipiscing</Title>
                       


         



        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          <div className="bg-warm shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <Icon icon="codicon:globe" />
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Learn More Anywhere
            </h4>
            <SectionDescription>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                            massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. Amet
                            lectus mi ultricies dictum</SectionDescription>
          </div>

          <div className="bg-warm shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <Icon icon="healthicons:i-training-class-outline" />
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Expert Instructor
            </h4>
            <SectionDescription>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                            massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. Amet
                            lectus mi ultricies dictum</SectionDescription>
          </div>

          <div className="bg-warm shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <Icon icon="fluent:handshake-32-regular" />
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              24/7 Strong Support
            </h4>
            <SectionDescription>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                            massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. Amet
                            lectus mi ultricies dictum</SectionDescription>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
