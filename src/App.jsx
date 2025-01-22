import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router'
import WhatsAppButton from './WhatsAppButton'
import NeonCursor from './components/sections/NeonCursor'




const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppButton />
  <NeonCursor />
    </>
  )
}

export default App