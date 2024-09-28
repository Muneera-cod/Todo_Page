import React from 'react'
import {router} from '../config/Routes/Routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
