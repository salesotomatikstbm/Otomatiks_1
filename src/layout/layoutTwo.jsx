import FooterTwo from '@/components/sections/footers/footerTwo'
import HeaderTwo from '@/components/sections/headers/headerTwo'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutTwo = () => {
  return (
    <>
      <HeaderTwo />
      <Outlet/>
      <FooterTwo/>
    </>
  )
}

export default LayoutTwo