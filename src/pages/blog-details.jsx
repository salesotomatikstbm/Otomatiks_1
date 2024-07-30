import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import BlogArticle from '@/components/sections/blogs/blogArticle'
import PageTitle from '@/components/sections/pageTitle'
import Sidebar from '@/components/sections/sidebar/sidebar'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'

const BlogDetails = () => {
  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template  || Blog Details</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Blog Details"} breadcrumbCurrent={"Blog Details"} />
        <div className='pt-15'>
          <div className='container'>
            <div className='grid xl:grid-cols-[850px_auto] lg:grid-cols-[670px_auto] grid-cols-1 gap-7.5'>
              <BlogArticle />
              <Sidebar />
            </div>
          </div>
        </div>
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default BlogDetails