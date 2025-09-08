import React, { useState } from 'react'
import banner from "@/assets/images/banner/banner-v2-thumb.png"
import kite from "@/assets/images/shapes/kite.png"
import arrow from "@/assets/images/shapes/arrow.png"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'
import SlideLeft from '@/lib/animations/slideLeft'

// HeroTwo – Robotics Academy Hero Section (updated)
// Background image: child with robotic gadgets (replace bgUrl if you have a local asset)
const bgUrl =
  'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2069&auto=format&fit=crop'

const HeroTwo = () => {
  const [role, setRole] = useState('parent')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrate with your booking API
    alert('Booking submitted! We will contact you shortly.')
  }

  return (
    <section className="lg:pb-15 pb-10 relative overflow-hidden">
      {/* Background image (child + robotics) */}
      {/* <img
        src={bgUrl}
        alt="Child with robotic gadgets"
        className="pointer-events-none absolute inset-0 -z-[2] h-full w-full object-cover opacity-25"
      /> */}

      <div className="bg-warm min-[1800px]:pt-[291px] pt-48 min-[1800px]:pb-[179px] lg:pb-32 pb-20 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:left-0 after:bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_#FFF_100%)] after:w-full after:h-full after:max-h-[257px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Content */}
            <div className="max-w-[633px] w-full h-full">
              <p className="text-sm font-semibold tracking-wider text-primary">Imagine! Innovate! Implement!</p>
              <Title size={"7.5xl"}>Future Innovators Start Here!</Title>

              <SectionDescription className={"mt-5 xl:text-inherit text-muted-foreground"}>
                Our robotics classes are designed to help you discover the potential <br></br> of this exciting field with the
                guidance of our experienced instructors.
              </SectionDescription>

              <ul className="mt-6 space-y-2 text-base xl:text-lg">
                <li><span className="font-bold">Best Robotics & STEM Academy in Dubai, UAE</span></li>
                <li><span className="font-bold">Flexible Learning — Online & Offline Classes</span></li>
                <li><span className="font-bold">For Kids Aged 6 – 17 Years</span></li>
                <li><span className="font-bold">Hands-On Learning • Robotics • AI • Coding • IoT</span></li>
              </ul>

              <div className="mt-10 flex items-center gap-6">
                <Button asChild size="lg" variant="pill" className="bg-primary border-primary hover:text-primary-foreground">
                  <Link to="/book">Book a Class</Link>
                </Button>
                <img src={arrow} alt="arrow" className="hidden sm:block" />
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Trusted by <span className="font-semibold">20,000+ parents</span> across the UAE, India & UK
              </p>
            </div>

            {/* Right: Booking form */}
            <div className="w-full lg:max-w-[560px] ml-auto">
              <div className="rounded-3xl bg-white/90 shadow-xl ring-1 ring-black/5 backdrop-blur p-6 sm:p-8">
                <h3 className="text-2xl font-bold">Book Your Trial Class</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                      <input id="fullName" name="fullName" required placeholder="Your full name" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="mobile" className="text-sm font-medium">Mobile Number</label>
                      <input id="mobile" name="mobile" required placeholder="e.g. +971 5x xxx xxxx" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="childName" className="text-sm font-medium">Child’s Name</label>
                      <input id="childName" name="childName" required placeholder="Child's name" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="role" className="text-sm font-medium">Who are you?</label>
                    <select id="role" name="role" value={role} onChange={(e)=>setRole(e.target.value)} className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60">
                      <option value="parent">Parent</option>
                      <option value="student">Student</option>
                      <option value="guardian">Guardian</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full rounded-2xl text-white">Confirm Booking</Button>

                  <p className="pt-2 text-xs text-muted-foreground">
                    Note: Classes are conducted by reputed teachers.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary w-[284px] h-[284px] rounded-full opacity-30 blur-[200px]" />
        <div className="absolute right-0 bottom-0 z-[-1] opacity-50 2xl:opacity-100 max-w-[580px] lg:max-w-[650px] xl:max-w-[750px] min-[1800px]:max-w-full">
          <SlideLeft>
            <img src={banner} alt="banner background" />
          </SlideLeft>
        </div>
        <div className="absolute left-10 bottom-25 z-[-1] xl:block hidden">
          {/* <img src={kite} alt="kite" /> */}
        </div>
      </div>
    </section>
  )
}

export default HeroTwo
