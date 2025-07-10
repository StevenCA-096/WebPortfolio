import { Container, Grid, Typography } from '@mui/material'
import ProjectItem from './ProjectItem'
import { useTranslation } from 'react-i18next'

const MyProjects = () => {
  const { t } = useTranslation('projects')
  const projects = t('myProjects', { returnObjects: true }) // Obtiene el array de proyectos

  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid container item sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <Typography variant='h5'>
            {t('title')} {/* Obtiene el título traducido */}
          </Typography>
        </Grid>
        <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", my: 4 }}>
          {
            projects?.map((project, index) => 
              <ProjectItem project={project} index={index} key={index} />
            )
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default MyProjects
