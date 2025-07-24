import { useState, useMemo } from 'react'
import { 
    Box, 
    Card, 
    CardContent, 
    Typography, 
    Skeleton, 
    Zoom
} from '@mui/material'
import { useTheme } from '@emotion/react'

const SkillCard = ({ 
    title = '', 
    icon = '', 
    level = 'intermediate',
    category = 'general',
    index = 0,
    loading = false,
    yearsExperience = 0
}) => {
    const theme = useTheme()
    const [isHovered, setIsHovered] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    // Colores dorados consistentes con el tema
    const goldColors = {
        primary: '#FFD700',
        secondary: '#FFF4BB',
        tertiary: '#B8860B'
    }

    // Estilos dinámicos de la tarjeta con tema dorado
    const cardStyles = useMemo(() => ({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 140,
        backgroundColor: 'transparent',
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        WebkitTapHighlightColor: 'transparent',
        tapHighlightColor: 'transparent',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        border: `1px solid ${isHovered ? goldColors.primary : 'rgba(255, 255, 255, 0.1)'}`,
        
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.05) 0%, 
                rgba(255, 215, 0, 0.05) 50%,
                transparent 100%
            )`,
            opacity: isHovered ? 1 : 0.3,
            transition: 'opacity 0.3s ease',
            zIndex: 0
        },
        
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${goldColors.primary}, transparent)`,
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.4s ease',
            zIndex: 1
        },

        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
            ? `0 12px 40px rgba(255, 215, 0, 0.3)`
            : '0 2px 10px rgba(0, 0, 0, 0.1)'
    }), [isHovered, goldColors.primary])

    if (loading) {
        return (
            <Card sx={cardStyles}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, zIndex: 2 }}>
                    <Skeleton variant="circular" width={50} height={50} sx={{ mb: 2 }} />
                    <Skeleton variant="text" width={100} height={20} sx={{ mb: 1 }} />
                    <Skeleton variant="rectangular" width={80} height={16} sx={{ borderRadius: 1 }} />
                </CardContent>
            </Card>
        )
    }

    return (
        <Zoom in timeout={600} style={{ transitionDelay: `${index * 100}ms` }}>
            <Card
                sx={cardStyles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <CardContent 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 2,
                        zIndex: 2,
                        height: '100%',
                        justifyContent: 'space-between'
                    }}
                >
                    {/* Icon Section */}
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
                                    filter: isHovered ? 'brightness(1.2) saturate(1.3)' : 'brightness(1)',
                                    transition: 'all 0.3s ease',
                                    opacity: imageLoaded ? 1 : 0
                                }}
                            />
                        ) : (
                            <Box
                                sx={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${goldColors.primary}40, ${goldColors.secondary}20)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem'
                                }}
                            >
                                🛠️
                            </Box>
                        )}
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            color: theme?.palette?.text?.primary,
                            mb: 1,
                            lineHeight: 1.2,
                            transition: 'color 0.3s ease',
                            ...(isHovered && {
                                color: goldColors.primary
                            })
                        }}
                    >
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Zoom>
    )
}

export default SkillCard