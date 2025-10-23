import { GitHub, LinkedIn } from '@mui/icons-material'
import { Box, useTheme } from '@mui/material'

const Networks = () => {
    const theme = useTheme()
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", mt: 1, gap:1}}>
            <a href="https://github.com/StevenCA-096" target='_blank'>
                <GitHub sx={{color:theme.palette.text.primary}}/>
            </a>
            <a href="https://www.linkedin.com/in/steven-cordero-682214227/" target='_blank'>
                <LinkedIn sx={{color: theme.palette.text.primary}}/>
            </a>
        </Box>
    )
}

export default Networks