import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import Why_otomatiks from '@/components/sections/schoolprogram/Why_otomatiks'
import Our_Uniqueness from '@/components/sections/schoolprogram/Our_Uniqueness'
import Our_Patrons from '@/components/sections/schoolprogram/Our_Patrons'
import Contact_School_Management from '@/components/sections/schoolprogram/Contact_School_Management'
import TopUp from '@/components/sections/footers/TopUp'
import HomeTestimonial from '@/components/sections/Home/HomeTestimonial'

const SchoolProgram = () => {

  return (
    <>
      <Helmet>
        <title>School Curriculum</title>
        <meta
          name="description"
          content="Enhance your school's educational offerings by incorporating our structured robotics modules, fostering a futuristic learning environment."
        />
        <meta
          name="keywords"
          content="AI Curriculum for Schools, Robotics Integration in Schools, STEM-Based School Curriculum, Hands-On AI Projects for Students, Future-Ready School Programs, school curriculum, Otomatiks school program, educational program, innovative learning, school education, kids learning, modern education, Otomatiks school, student development, educational approach, curriculum design, learning strategies, student growth, personalized learning, teaching methods, education innovation, academic development, holistic education, student-centered learning, Otomatiks education, 21st-century skills, future-ready education, learning resources, educational excellence, skill development, creativity in education, critical thinking, problem-solving skills, learning outcomes, experiential learning, academic success, interactive learning, technology in education, STEM education, hands-on learning, project-based learning, collaborative learning, learning environment, educational programs for kids, school programs for students, career readiness, leadership development, lifelong learning, school learning resources, student engagement, personalized teaching, development of soft skills, educational workshops, school success stories, education for the future, modern classroom techniques, Otomatiks curriculum, global education standards, youth empowerment through education, positive learning experiences, inclusive education"
        />

        <meta name="author" content="Otomatiks Education" />

        <meta property="og:title" content="School Curriculum - Otomatiks Educational Program" />
        <meta
          property="og:description"
          content="Discover the unique school curriculum at Otomatiks that combines traditional learning with modern educational techniques. Learn more about our teaching approach and success stories."
        />
        <meta
          property="og:image"
          content="https://www.otomatiks.com/images/otomatiks-school-curriculum.jpg"
        />
        <meta property="og:url" content="https://www.otomatiks.com/school-program" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="School Curriculum - Otomatiks Educational Program"
        />
        <meta
          name="twitter:description"
          content="Explore the school curriculum at Otomatiks, where innovative teaching methods foster student growth and development in modern education."
        />
        <meta
          name="twitter:image"
          content="https://www.otomatiks.com/images/otomatiks-school-curriculum.jpg"
        />

        <link rel="canonical" href="https://www.otomatiks.com/school-program" />

      </Helmet>

      <main>
        <PageTitle pageName={"School Curriculum"} breadcrumbCurrent={"School Curriculum"} />
        <Why_otomatiks />
        <Our_Uniqueness />
        <HomeTestimonial />
        <Our_Patrons />
        <Contact_School_Management />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  )
}

export default SchoolProgram;
