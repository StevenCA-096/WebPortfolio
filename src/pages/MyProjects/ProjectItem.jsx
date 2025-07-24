import {
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    Typography,
    useTheme,
    alpha
} from '@mui/material'
import { useState } from 'react'
import GradientText from '../../components/Text/GradientText'
import { Image } from '@mui/icons-material'
import { GetIconFromIconMap } from '../../utils/iconMap'
import MyProjectImagesModal from '../../components/Modals/Projects/MyProjectImagesModal'
import { MySkillsList } from '../../data/MySkillsList'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'

const ProjectItem = ({ project, index }) => {
    const theme = useTheme()
    const [openModal, setOpenModal] = useState(false)
    const { t } = useTranslation('projects')

    return (
         <motion.div
                    initial={{ opacity: 0, x: index % 2 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
        <Grid
            container
            item
            lg={12}
            sx={{
                display: "flex",
                justifyContent: "center",
                my: 4
            }}
        >
            <Card
                elevation={0}
                sx={{
                    width: '100%',
                    background: `linear-gradient(135deg, 
    ${alpha('#1a1a1a', 0.8)} 0%, 
    ${alpha('#2d2d2d', 0.6)} 100%)`,
                    border: `1px solid ${alpha('#FFD700', 0.2)}`,
                    border: `1px solid rgba(255, 255, 255, 0.08)`,
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'visible',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #FFD700 0%, #FFF4BB 60%, #FFD700 80%)',
                        borderRadius: '12px 12px 0 0',
                    },
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 30px rgba(255, 215, 0, 0.15)`,
                    }
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={3} alignItems="flex-start">
                        {/* Título del proyecto */}
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: { xs: 'center', md: 'flex-start' },
                                mb: { xs: 2, md: 0 }
                            }}>
                                <GradientText
                                    fontSize={{ xs: 24, md: 32, lg: 36 }}
                                    textAlign={{ xs: 'center', md: 'left' }}
                                    sx={{
                                        fontWeight: 700,
                                        lineHeight: 1.2,
                                        mb: 2
                                    }}
                                >
                                    {project?.title}
                                </GradientText>

                                {/* Botón de imágenes mejorado */}
                                <IconButton
                                    onClick={() => setOpenModal(true)}
                                    sx={{
                                        bgcolor: alpha(theme.palette.text.secondary, 0.1),
                                        color: alpha(theme.palette.text.secondary, 0.9),
                                        '&:hover': {
                                            bgcolor: alpha(theme.palette.text.secondary, 0.2),
                                            transform: 'scale(1.05)',
                                        },
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <Image sx={{ fontSize: 28 }} />
                                </IconButton>
                            </Box>
                        </Grid>

                        {/* Contenido principal */}
                        <Grid item xs={12} md={8}>
                            <Stack spacing={3}>
                                {/* Descripción */}
                                <Typography
                                    variant='body1'
                                    sx={{
                                        fontSize: '1.1rem',
                                        lineHeight: 1.7,
                                        color: theme.palette.text.primary
                                    }}
                                >
                                    {project?.description}
                                </Typography>

                                {/* Skills/Características */}
                                {project?.skills && project.skills.length > 0 && (
                                    <Box>
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                mb: 2,
                                                fontWeight: 600,
                                                color: theme.palette.text.primary
                                            }}
                                        >
                                            {t('developedFeatures')}
                                        </Typography>
                                        <List sx={{ p: 0 }}>
                                            {project.skills.map((skill, index) => (
                                                <ListItem
                                                    key={index}
                                                    sx={{
                                                        px: 0,
                                                        py: 1,
                                                        '&:hover': {
                                                            bgcolor: alpha(theme.palette.action.hover, 0.5),
                                                            borderRadius: 2,
                                                            transform: 'translateX(8px)'
                                                        },
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                >
                                                    <ListItemAvatar sx={{ minWidth: 40 }}>
                                                        <Box sx={{
                                                            color: alpha(theme.palette.text.secondary, 0.9),
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}>
                                                            {GetIconFromIconMap(skill?.icon)}
                                                        </Box>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={skill?.details}
                                                        sx={{
                                                            '& .MuiListItemText-primary': {
                                                                fontSize: '1rem',
                                                                fontWeight: 500
                                                            }
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                )}

                                {/* Tecnologías */}
                                <Box>
                                    <Typography
                                        variant='h6'
                                        sx={{
                                            mb: 2,
                                            fontWeight: 600,
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        {t('techStack')}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        flexWrap="wrap"
                                        useFlexGap
                                    >
                                        {MySkillsList.map((skill, index) => (project?.techStack?.includes(skill?.title) &&
                                            <Chip
                                                key={index}
                                                avatar={
                                                    <Box
                                                        component="img"
                                                        src={skill?.imgUrl}
                                                        sx={{
                                                            width: 24,
                                                            height: 24,
                                                            objectFit: 'contain'
                                                        }}
                                                    />
                                                }
                                                label={skill?.title || `Tech ${index + 1}`}
                                                variant="outlined"
                                                sx={{
                                                    borderColor: alpha(theme.palette.text.primary, 0.3),
                                                    '&:hover': {
                                                        borderColor: alpha(theme.palette.text.secondary, 0.9),
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: `0 4px 12px ${alpha(theme.palette.text.secondary, 0.1)}`,
                                                    },
                                                    transition: 'all 0.2s ease',
                                                    fontSize: '0.875rem',
                                                    height: 36
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <MyProjectImagesModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                images={project?.images}
                projectFolder={project?.imageFolder}
            />
        </Grid>
        </motion.div>
    )
}

export default ProjectItem