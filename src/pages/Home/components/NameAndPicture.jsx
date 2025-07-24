import { alpha, Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import me from '../../../assets/Images/Me/steven.png'
import GradientText from '../../../components/Text/GradientText'
import { useTranslation } from 'react-i18next'
import { Code, Download, Person } from '@mui/icons-material'

const NameAndPicture = () => {
    const { t } = useTranslation('home')
    const theme = useTheme()

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* Imagen en mobile (arriba) */}
            <Grid item xs={12} display={{ xs: 'flex', md: 'none' }} justifyContent="center">
                <motion.div variants={imageVariants}>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'inline-block'
                        }}
                    >
                        <Box
                            component="img"
                            src={me}
                            sx={{
                                width: { xs: 240, sm: 280 },
                                height: 'auto',
                                aspectRatio: "16:9",
                                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                                borderRadius: '20px 20px 0 0',
                                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
                            }}
                        />
                        {/* Glow effect detrás de la imagen */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: {xs:-10,md:-20},
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '80%',
                                height: '40px',
                                background: `linear-gradient(90deg, transparent 0%, ${alpha('#FFD700', 0.1)} 50%, transparent 100%)`,
                                borderRadius: '50%',
                                zIndex: -1
                            }}
                        />
                    </Box>
                </motion.div>
            </Grid>

            {/* Contenido principal */}
            <Grid item xs={12} md={7}>
                <motion.div variants={itemVariants}>
                    <Stack spacing={{ xs: 3, md: 4 }}>
                        {/* Saludo inicial */}
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    fontWeight: 500,
                                    mb: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    justifyContent: { xs: 'center', md: 'flex-start' }
                                }}
                            >
                                <Person sx={{ fontSize: 20, color: '#FFD700' }} />
                                {t('greeting')}
                            </Typography>
                        </Box>

                        {/* Nombre principal */}
                        <Box textAlign={{ xs: 'center', md: 'left' }}>
                            <GradientText
                                fontSize={{ xs: 36, sm: 48, md: 56, lg: 64 }}
                                sx={{
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    mb: 2,
                                    display: 'block'
                                }}
                            >
                                Steven Cordero
                            </GradientText>
                        </Box>

                        {/* Descripción */}
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: { xs: 18, sm: 22, md: 26 },
                                lineHeight: 1.4,
                                color: theme.palette.text.primary,
                                textAlign: { xs: 'center', md: 'left' },
                                fontWeight: 400,
                                '& span': {
                                    background: `linear-gradient(135deg, #FFD700 0%, #FFF4BB 100%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontWeight: 600
                                }
                            }}
                        >
                            {t('description')}
                        </Typography>

                        {/* Elementos decorativos */}
                        <Box
                            display="flex"
                            alignItems="center"
                            gap={2}
                            justifyContent={{ xs: 'center', md: 'flex-start' }}
                            sx={{ mt: 3 }}
                        >
                            <Code sx={{ color: '#FFD700', fontSize: 24 }} />
                            <Box
                                sx={{
                                    width: { xs: 100, md: 150 },
                                    height: '2px',
                                    background: 'linear-gradient(90deg, #FFD700 0%, transparent 100%)',
                                    borderRadius: '1px'
                                }}
                            />
                            <Button sx={{
                                color: theme?.palette?.text?.secondary,
                            }}
                            >
                                <Download /> Resume
                            </Button>
                        </Box>
                    </Stack>
                </motion.div>
            </Grid>

            {/* Imagen en desktop (derecha) */}
            <Grid item md={5} display={{ xs: 'none', md: 'flex' }} justifyContent="center">
                <motion.div variants={imageVariants}>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'inline-block'
                        }}
                    >
                        <Box
                            component="img"
                            src={me}
                            sx={{
                                width: { md: 300, lg: 350 },
                                height: 'auto',
                                aspectRatio: "16:9",
                                maskImage: 'linear-gradient(black 75%, transparent)',
                                borderRadius: '20px 20px 0 0',
                                filter: 'drop-shadow(0 15px 40px rgba(0,0,0,0.4))',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-10px) scale(1.02)'
                                }
                            }}
                        />
                        {/* Marco decorativo */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -10,
                                left: -10,
                                right: -10,
                                bottom: 20,
                                border: `2px solid ${alpha('#FFD700', 0.2)}`,
                                borderRadius: '25px 25px 15px 15px',
                                zIndex: -1,
                                background: `linear-gradient(135deg, ${alpha('#FFD700', 0.02)} 0%, transparent 100%)`
                            }}
                        />
                        {/* Glow effect */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: -30,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '90%',
                                height: '60px',
                                background: `radial-gradient(ellipse, ${alpha('#FFD700', 0.1)} 0%, transparent 70%)`,
                                zIndex: -1
                            }}
                        />
                    </Box>
                </motion.div>
            </Grid>
        </Grid>
    )
}

export default NameAndPicture