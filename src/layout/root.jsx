import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderOne from '@/components/sections/headers/headerOne'
import FooterOne from '@/components/sections/footers/footerOne'

const RootLayout = () => {

    return (
        <>
            <HeaderOne />
            <Outlet />
            <FooterOne />
        </>
    )
}

export default RootLayout