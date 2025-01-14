import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import BlogDetails1 from '@/components/sections/blogs/BlogDetails1'
import TopUp from '@/components/sections/footers/TopUp'

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
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  )
}

export default BlogDetails