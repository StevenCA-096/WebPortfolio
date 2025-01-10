import { Box } from '@mui/material'
import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Layout = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight:'100vh'
            }}>
            <Box sx={{ height: "10vh" }}>
                <Header />
            </Box>
            <Box sx={{ flexGrow:1 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}

export default Layout