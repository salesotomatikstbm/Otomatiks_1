import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router'
import WhatsAppButton from './WhatsAppButton'

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppButton />
    </>
  )
}

export default App