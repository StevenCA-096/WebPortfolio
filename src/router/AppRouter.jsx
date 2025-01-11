import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../layout/Layout'
import MyProjects from '../pages/MyProjects/MyProjects'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />}/>
                <Route path='my-projects' element={<MyProjects />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter