import React, { useState, useMemo } from 'react'
import { Box, Typography, Grow } from '@mui/material'
import { useTheme } from '@emotion/react'
import GradientText from '../Text/GradientText'
import { GetIconFromIconMap } from '../../utils/iconMap'

const WhatIDoCard = ({ icon, title, text, index = 0, isActive = true }) => {
    const theme = useTheme()
    const [isHovered, setIsHovered] = useState(false)

    // Estilos dinámicos de la tarjeta
    const cardStyles = useMemo(() => ({
        width: { xs: '100%', sm: 320, md: 300 },
        padding: { xs: 3, md: 4 },
        backgroundColor: 'rgba(27, 26, 26, 0.95)',
        borderRadius: 3,
        borderBottom: `4px solid ${theme?.palette?.text?.secondary || '#FFD700'}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        textAlign: 'center',
        color: 'white',
        minHeight: { xs: 250, md: 300 },
        height: 'auto',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        WebkitTapHighlightColor: 'transparent',
        tapHighlightColor: 'transparent',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        
        // Glassmorphism effect
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${isHovered ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
        
        // Gradient overlay
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, 
                rgba(255, 215, 0, 0.03) 0%,
                transparent 50%,
                rgba(255, 244, 187, 0.02) 100%
            )`,
            opacity: isHovered ? 1 : 0.5,
            transition: 'opacity 0.3s ease',
            zIndex: 0,
            pointerEvents: 'none'
        },
        
        // Top glow effect
        '&::after': {
            content: '""',
            position: 'absolute',
            top: -2,
            left: '50%',
            width: isHovered ? '80%' : '0%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
            transform: 'translateX(-50%)',
            transition: 'width 0.4s ease',
            zIndex: 1,
            borderRadius: '1px',
            boxShadow: isHovered ? '0 0 15px rgba(255, 215, 0, 0.8)' : 'none'
        },
        
        // Hover effects
        transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
            ? '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2)' 
            : '0 8px 25px rgba(0, 0, 0, 0.2)'
    }), [isHovered, theme?.palette?.text?.secondary])

    // Estilos del icono
    const iconStyles = useMemo(() => ({
        fontSize: { xs: 48, md: 56 },
        color: theme?.palette?.text?.secondary || '#FFD700',
        filter: isHovered ? 'brightness(1.3) saturate(1.2)' : 'brightness(1)',
        transform: isHovered ? 'scale(1.1) rotateY(10deg)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        textShadow: isHovered ? '0 0 20px rgba(255, 215, 0, 0.6)' : 'none',
        zIndex: 2,
        position: 'relative'
    }), [isHovered, theme?.palette?.text?.secondary])

    // Estilos del texto
    const textStyles = useMemo(() => ({
        color: 'rgba(255, 255, 255, 0.9)',
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '0.9rem', md: '1rem' },
        lineHeight: 1.6,
        maxWidth: '280px',
        zIndex: 2,
        position: 'relative',
        transition: 'color 0.3s ease',
        ...(isHovered && {
            color: 'rgba(255, 255, 255, 1)'
        })
    }), [isHovered])

    return (
        <Grow 
            in={isActive} 
            timeout={600} 
            style={{ 
                transitionDelay: `${index * 150}ms`,
                transformOrigin: 'center bottom'
            }}
        >
            <Box
                sx={cardStyles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Icon Section */}
                <Box 
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        mb: 1
                    }}
                >
                    <Box sx={iconStyles}>
                        {GetIconFromIconMap(icon)}
                    </Box>
                </Box>

                {/* Title */}
                <Box sx={{ zIndex: 2, position: 'relative' }}>
                    <GradientText
                        sx={{
                            fontSize: { xs: '1.3rem', md: '1.5rem' },
                            fontWeight: 700,
                            lineHeight: 1.3,
                            mb: 1,
                            transition: 'all 0.3s ease',
                            ...(isHovered && {
                                transform: 'scale(1.05)',
                                filter: 'brightness(1.2)'
                            })
                        }}
                    >
                        {title}
                    </GradientText>
                </Box>

                {/* Description */}
                <Typography
                    variant="body2"
                    sx={textStyles}
                >
                    {text}
                </Typography>

                {/* Floating particles effect (opcional) */}
                {isHovered && (
                    <>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '20%',
                                right: '15%',
                                width: '4px',
                                height: '4px',
                                backgroundColor: '#FFD700',
                                borderRadius: '50%',
                                animation: 'float 3s ease-in-out infinite',
                                opacity: 0.6,
                                '@keyframes float': {
                                    '0%, 100%': { transform: 'translateY(0px)' },
                                    '50%': { transform: 'translateY(-10px)' }
                                }
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '25%',
                                left: '10%',
                                width: '3px',
                                height: '3px',
                                backgroundColor: '#FFF4BB',
                                borderRadius: '50%',
                                animation: 'float 2.5s ease-in-out infinite 0.5s',
                                opacity: 0.4,
                                '@keyframes float': {
                                    '0%, 100%': { transform: 'translateY(0px)' },
                                    '50%': { transform: 'translateY(-8px)' }
                                }
                            }}
                        />
                    </>
                )}
            </Box>
        </Grow>
    )
}

export default WhatIDoCard