import { Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import GradientText from '../../components/Text/GradientText'
import { Image } from '@mui/icons-material'
import { GetIconFromIconMap } from '../../utils/iconMap'
import MyProjectImagesModal from '../../components/Modals/Projects/MyProjectImagesModal'

const ProjectItem = ({ project }) => {
    const theme = useTheme()
    const [openModal, setOpenModal] = useState(false)
    console.log(project)
    return (
        <Grid
            container
            item
            lg={12}
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                my: 4
            }}
        >
            <Grid item lg={4}>
                <GradientText fontSize={{ xs: 20, md: 30 }} textAlign='center' sx={{ mr: 2 }}>
                    {project?.title}
                </GradientText>
            </Grid>
            <Grid item lg={7}
                sx={{
                    borderLeft: `2px solid ${theme?.palette?.text?.secondary}`, // White border bottom
                    borderRight: { xs: `2px solid ${theme?.palette?.text?.secondary}`, md: "none" }, // White border bottom
                    borderRadius: 12,
                    padding: 3,
                }}
            >
                <Typography variant='body1'>
                    {project?.description}
                    <List>
                        {
                            project?.skills?.map((skill, index) =>
                                <ListItem key={index}>
                                    <ListItemAvatar>
                                        {GetIconFromIconMap(skill?.icon)}
                                    </ListItemAvatar>
                                    <ListItemText>
                                        {skill?.details}
                                    </ListItemText>

                                </ListItem>
                            )
                        }

                    </List>
                </Typography>
            </Grid>
            <Grid item lg={1}>
                <IconButton onClick={() => setOpenModal(true)}>
                    <Image sx={{ color: "white", fontSize: 30 }} />
                </IconButton>
            </Grid>
            <MyProjectImagesModal open={openModal} onClose={() => setOpenModal(false)} images={project?.images} projectFolder={project?.imageFolder}/>
        </Grid>
    )
}

export default ProjectItem