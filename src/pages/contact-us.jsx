import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import ContactAddress from '@/components/sections/contactAddress'
import ContactForm from '@/components/sections/contactForm'
import GoogleMap from '@/components/sections/googleMap'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template  || Contact-Us</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Contact Us"} breadcrumbCurrent={"Contact Us"} />
        <ContactAddress />
        <GoogleMap />
        <ContactForm />
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default ContactUs