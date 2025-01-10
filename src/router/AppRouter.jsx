import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../layout/Layout'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter