import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import jr from "@/assets/images/shapes/class-j.png"
import { extraCurricularData } from '@/lib/fackdata/Software_CourseData'
import RingBell from '@/assets/icons/ring-bell'
import CapDoll from '@/assets/icons/cap-doll'
import Doll from '@/assets/icons/doll'
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'
import SlideUp from '@/lib/animations/slideUp'
import PopupCourse from './PopupCourse'

const Software_Course = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState(null);

  const openModal = (course) => {
    setCourseData(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCourseData(null);
  };

  return (
    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 relative  bg-[#066aab]">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionName>Kids Software Program</SectionName>
          <Title size={"3.5xl"} className={"mt-2.5 text-center"}>Empowering Young Minds to Create and Innovate Through Coding</Title>
        </div>
        <div className="lg:pt-15 pt-10">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
            {
              extraCurricularData.map(({ desc, id, src, title, icon, level, duration, topics }) => (
                <Card
                  key={id}
                  id={id}
                  desc={desc}
                  title={title}
                  src={src}
                  icon={icon}
                  level={level}
                  duration={duration}
                  topics={topics}
                  openModal={openModal}
                />
              ))
            }
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1] 2xl:w-auto w-96 hidden xl:block">
        <img src={jr} alt="img" />
      </div>

      {/* Modal Popup */}
      {isModalOpen && courseData && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-96">
      <h3 className="text-2xl font-semibold mb-4">{courseData.title}</h3>
      <p><strong>Duration:</strong> {courseData.duration}</p>
      <h4 className="mt-3 font-semibold">Topics Covered:</h4>
      <ul className="list-disc pl-5">
        {courseData.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end">
        <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  </div>
)}


      <div className="lg:pt-15 pt-10">
        <PopupCourse />
      </div>
    </section>
  )
}

export default Software_Course

const Card = ({ title, desc, src, icon, id, level, duration, topics, openModal }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'ring-bell':
        return <i className=" text-[#0A6375] opacity-50"><RingBell /></i>;
      case 'cap-doll':
        return <i className=" text-primary-foreground opacity-50"><CapDoll /></i>;
      case 'doll':
        return <i className=" text-green-foreground opacity-50"><Doll /></i>;
      default:
        return null;
    }
  }

  return (
    <SlideUp delay={id}>
      <div className="border border-[#F2F2F2] bg-background rounded-[10px] p-7.5 group/card layer-card">
        <div className="relative overflow-hidden">
          <img src={src} alt="Tutoring Services" className="w-full" />
          <div className="absolute left-0 top-full w-full h-full flex">
            <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
            <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
            <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
            <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
          </div>
        </div>
        <div className="pt-7.5">
          <h4>
            <Link to="/service-details" className="lg:text-2xl text-xl font-semibold lg:leading-[140%] group-hover/card:text-destructive-foreground transition-all duration-500">
              {title}
            </Link>
          </h4>
          <div className="flex pt-2">
            <button
              onClick={() => openModal({ title, duration, topics })}
              className="bg-primary-foreground text-background px-4 py-2 rounded hover:bg-destructive-foreground transition-colors duration-300"
            >
              <span className="text-sm">Level {level}</span>
            </button>
          </div>
          <p className="pt-2">{desc}</p>
        </div>
      </div>
    </SlideUp>
  )
}
