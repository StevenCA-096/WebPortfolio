import { Button, Grid, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, useTheme } from '@mui/material'
import React from 'react'
import GradientText from '../../components/Text/GradientText'
import { Image, Visibility } from '@mui/icons-material'
import { GetIconFromIconMap } from '../../utils/iconMap'

const ProjectItem = ({ project }) => {
    const theme = useTheme()
    return (
        <Grid container item lg={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", my: 4 }}>
            <Grid item lg={4}>
                <GradientText fontSize={{ xs: 20, md: 30 }} textAlign='center' sx={{ mr: 2 }}>
                    {project?.title}
                </GradientText>
            </Grid>
            <Grid item lg={7}
                sx={{
                    borderLeft: `2px solid ${theme?.palette?.text?.secondary}`, // White border bottom
                    borderRadius: 12,
                    padding: 3
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
                <IconButton>
                    <Image sx={{color:"white"}}/>
                </IconButton>
             </Grid>
        </Grid>
    )
}

export default ProjectItem