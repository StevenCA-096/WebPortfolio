import { useTheme } from '@emotion/react'
import { Code, CodeOff, CodeOffOutlined, CodeOffTwoTone, DeveloperBoard, DeveloperMode, Html, Javascript, LockClock } from '@mui/icons-material'
import { Box, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import SkillCard from '../../components/Cards/SkillCard'
import GradientText from '../../components/Text/GradientText'
import WhatIDoCard from '../../components/Cards/WhatIDoCard'
import { MySkills } from '../../data/MySkills'
import { MyWhatIDoList } from '../../data/MyWhatIDoList'

const Home = () => {


  const theme = useTheme()

  return (
    <Container maxWidth='md'>
      <Grid container>
        {/* Presentation and image */}
        <Grid container item lg={12} mt={5}>
          <Grid item xs={12} display={{ xs: 'flex', sm: 'none' }} justifyContent={{ xs: 'center' }}>
            <Box
              component={'img'}
              src='https://static.vecteezy.com/system/resources/thumbnails/024/344/088/small_2x/businessman-isolated-illustration-ai-generative-free-png.png'
              sx={{ maskImage: 'linear-gradient(black 75%, transparent)', aspectRatio: "16:9", width: { xs: 200, md: 250 } }}
            />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Typography fontSize={{ xs: 20, md: 30 }} textAlign={{ xs: 'center', md: "justify" }}>
              Greetings, I'm
              <GradientText>Steven Cordero</GradientText>
              a software developer, dedicated to web development
            </Typography>
          </Grid>
          <Grid item lg={4} display={{ xs: 'none', sm: 'flex' }}>
            <Box
              component={'img'}
              src='https://static.vecteezy.com/system/resources/thumbnails/024/344/088/small_2x/businessman-isolated-illustration-ai-generative-free-png.png'
              sx={{ maskImage: 'linear-gradient(black 75%, transparent)', aspectRatio: "16:9", width: { xs: 200, md: 250 } }}
            />
          </Grid>
        </Grid>
        {/* Skills */}
        <Grid container item xs={12} my={{ xs: 10 }}>
          <Grid item xs={12}>
            <GradientText textAlign='center'>My Skills</GradientText>
          </Grid>
          <Grid container item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            {
              MySkills.map((skill, index) =>
                <Grid item xs={6} lg={2} key={index}>
                  <SkillCard icon={skill?.imgUrl} title={skill?.title} />
                </Grid>
              )
            }
          </Grid>
        </Grid>
        {/* What I Do */}
        <Grid container item>
          <Grid item xs={12}>
            <GradientText color={theme?.palette?.text?.secondary} textAlign={'center'}>What I Do?</GradientText>
          </Grid>
          <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap:{xs:2,md:10}, my:4 }}>
            {
              MyWhatIDoList.map((whatIDo, index) =>
                <Grid item xs={12} lg={3}  key={index} sx={{display:'flex', flexDirection:"row", justifyContent:"center"}}>
                  <WhatIDoCard icon={whatIDo.icon} text={whatIDo.text} title={whatIDo.title} />
                </Grid>
              )
            }
          </Grid>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Home