import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import GradientText from '../../components/Text/GradientText'

const MyProjects = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid container item>
          <Typography fontSize={{ xs: 25, md: 30 }}>
            Projects i have participated in
          </Typography>
        </Grid>
        <Grid container item>
          
          <GradientText fontSize={{ xs: 20, md: 30 }}>
            Online Sales System For Coopepilangosta
          </GradientText>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MyProjects