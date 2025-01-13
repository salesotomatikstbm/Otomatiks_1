import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import BlogArticle from '@/components/sections/blogs/blogArticle'
import PageTitle from '@/components/sections/pageTitle'
import Sidebar from '@/components/sections/sidebar/sidebar'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import Blog from './blog'
import Blog1 from '@/components/sections/blogs/Blog1'
import BlogDetails1 from '@/components/sections/blogs/BlogDetails1'

const BlogDetails = () => {
  return (
    <>
      <Helmet>
        <title>Blog Details</title>
        <meta name="description" content="Ptomatiks" />
      </Helmet>
      <main>
        <PageTitle pageName={"Blog Details"} breadcrumbCurrent={"Blog Details"} />
      
      
                <BlogDetails1 />
           
     
       
       
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default BlogDetails