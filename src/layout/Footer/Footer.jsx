import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Networks from './Networks'
import { useTheme } from '@emotion/react'

const Footer = () => {
  const theme = useTheme()
  return (
    <Container
      maxWidth='xxl'
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        boxShadow: 0,
        mt: { xs: 5, md: 10 },
        borderTop: `3px solid ${theme?.palette?.text?.secondary}`, // White border bottom
        borderRadius:12,
        padding:2  
      }}
    >
      <Box />
      <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <Box>
          <Typography>Designed By</Typography>
        </Box>
        <Box>
          <Typography>Steven Cordero Alvarez</Typography>
        </Box>
        <Box>
          <Typography >With patient and a cup of coffe</Typography>
        </Box>
        <Networks />
      </Box>
      <Box />
    </Container>
  )
}

export default Footer