import { GitHub, LinkedIn } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

const Networks = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", mt: 1, gap:1}}>
            <a href="https://github.com/StevenCA-096" target='_blank'>
                <GitHub sx={{color:"white"}}/>
            </a>
            <a href="https://www.linkedin.com/in/steven-cordero-682214227/" target='_blank'>
                <LinkedIn sx={{color:'white'}}/>
            </a>
        </Box>
    )
}

export default Networks