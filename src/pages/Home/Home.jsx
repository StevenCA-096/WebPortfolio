import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import GradientText from '../../components/Text/GradientText'
import MySkills from './MySkills'
import WhatIDo from './WhatIDo'
import { useTranslation } from 'react-i18next'
import me from '../../assets/Images/Me/steven.png'

const Home = () => {

  const { t } = useTranslation('home'); // Specify the namespace

  return (
    <Container maxWidth='md'>
      <Grid container>
        {/* Presentation and image */}
        <Grid container item lg={12} mt={5}>
          <Grid item xs={12} display={{ xs: 'flex', sm: 'none' }} justifyContent={{ xs: 'center' }}>
            <Box
              component={'img'}
              src={me}
              sx={{ maskImage: 'linear-gradient(black 75%, transparent)', aspectRatio: "16:9", width: { xs: 200, md: 250 } }}
            />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Typography fontSize={{ xs: 20, md: 30 }} textAlign={{ xs: 'center', md: "justify" }}>
              {t('greeting')} 
              <GradientText>Steven Cordero</GradientText>
              {t('description')} 
            </Typography>
          </Grid>
          <Grid item lg={4} display={{ xs: 'none', sm: 'flex' }}>
            <Box
              component={'img'}
              src={me}
              sx={{ 
                maskImage: 'linear-gradient(black 75%, transparent)', 
                aspectRatio: "16:9", 
                width: { xs: 200, md: 250 },
              }}
            />
          </Grid>
        </Grid>

        {/* Skills */}
        <MySkills />

        {/* What I Do */}
        <WhatIDo />

      </Grid>
    </Container>
  )
}

export default Home