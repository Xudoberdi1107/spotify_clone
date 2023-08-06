import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout/MineLayout'
import { router } from './routes'
import {RouterProvider} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
    
  </React.StrictMode>,
)
