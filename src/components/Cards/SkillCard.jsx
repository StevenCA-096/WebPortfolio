import { useState } from 'react'
import { Box, Skeleton, Typography, Zoom, alpha, useTheme } from '@mui/material'
import useIsDarkMode from '../../hooks/isDarkMode/useIsDarkMode'

const SkillCard = ({
    title = '',
    icon = '',
    index = 0,
    loading = false,
}) => {
    const theme = useTheme()
    const isDarkMode = useIsDarkMode()
    const [isHovered, setIsHovered] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    const cardStyles = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 140,
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        tapHighlightColor: 'transparent',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: alpha(theme.palette.background.default, isDarkMode ? 0.06 : 0.42),
        border: `1px solid ${isHovered
            ? alpha(theme.palette.text.secondary, isDarkMode ? 0.35 : 0.28)
            : isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
            }`,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered
            ? `0 12px 30px ${alpha('#000000', isDarkMode ? 0.28 : 0.12)}`
            : `0 2px 10px ${alpha('#000000', isDarkMode ? 0.12 : 0.06)}`,
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg,
                rgba(255, 255, 255, 0.05) 0%,
                transparent 50%,
                ${alpha(theme.palette.text.secondary, isDarkMode ? 0.08 : 0.05)} 100%
            )`,
            opacity: isHovered ? 1 : 0.4,
            transition: 'opacity 0.3s ease',
            zIndex: 0,
            pointerEvents: 'none',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: -2,
            left: '50%',
            width: isHovered ? '80%' : '0%',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${theme.palette.text.secondary}, transparent)`,
            transform: 'translateX(-50%)',
            transition: 'width 0.4s ease',
            zIndex: 1,
            borderRadius: '1px',
            boxShadow: isHovered ? `0 0 12px ${alpha(theme.palette.text.secondary, isDarkMode ? 0.45 : 0.22)}` : 'none',
        },
    }

    if (loading) {
        return (
            <Box sx={cardStyles}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, zIndex: 2 }}>
                    <Skeleton variant="circular" width={50} height={50} sx={{ mb: 2 }} />
                    <Skeleton variant="text" width={100} height={20} sx={{ mb: 1 }} />
                    <Skeleton variant="rectangular" width={80} height={16} sx={{ borderRadius: 1 }} />
                </Box>
            </Box>
        )
    }

    return (
        <Zoom in timeout={600} style={{ transitionDelay: `${index * 100}ms` }}>
            <Box
                sx={cardStyles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 2,
                        zIndex: 2,
                        height: '100%',
                    }}
                >
                    <Box sx={{ position: 'relative', mb: 2 }}>
                        {!imageError && icon ? (
                            <Box
                                component="img"
                                src={icon}
                                alt={title}
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageError(true)}
                                sx={{
                                    width: 50,
                                    height: 50,
                                    objectFit: 'contain',
                                    filter: isHovered ? 'brightness(1.15) saturate(1.15)' : 'brightness(1)',
                                    transition: 'all 0.3s ease',
                                    opacity: imageLoaded ? 1 : 0,
                                }}
                            />
                        ) : (
                            <Box
                                sx={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${alpha(theme.palette.text.secondary, 0.25)}, ${alpha(theme.palette.text.secondary, 0.12)})`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                }}
                            >
                                *
                            </Box>
                        )}
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            color: isHovered ? theme.palette.text.secondary : theme.palette.text.primary,
                            mb: 1,
                            lineHeight: 1.2,
                            transition: 'color 0.3s ease',
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </Zoom>
    )
}

export default SkillCard
