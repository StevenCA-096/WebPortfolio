import { useMemo, useState } from 'react'
import { Box, Grow, Typography, alpha, useTheme } from '@mui/material'
import GradientText from '../Text/GradientText'
import { GetIconFromIconMap } from '../../utils/iconMap'
import useIsDarkMode from '../../hooks/isDarkMode/useIsDarkMode'

const WhatIDoCard = ({ icon, title, text, index = 0, isActive = true }) => {
    const isDarkMode = useIsDarkMode()
    const theme = useTheme()
    const [isHovered, setIsHovered] = useState(false)

    const cardStyles = useMemo(() => {
        const baseBorderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
        const hoverBorderColor = alpha(theme.palette.text.secondary, isDarkMode ? 0.35 : 0.28)

        return {
            width: '100%',
            minHeight: { xs: 250, md: 300 },
            padding: { xs: 3, md: 4 },
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTapHighlightColor: 'transparent',
            tapHighlightColor: 'transparent',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            backgroundColor: alpha(theme.palette.background.default, isDarkMode ? 0.06 : 0.42),
            border: `1px solid ${isHovered ? hoverBorderColor : baseBorderColor}`,
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
    }, [isDarkMode, isHovered, theme])

    const iconStyles = useMemo(() => ({
        fontSize: { xs: 48, md: 56 },
        color: theme.palette.text.secondary,
        filter: isHovered ? 'brightness(1.2) saturate(1.15)' : 'brightness(1)',
        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
        transition: 'all 0.3s ease',
        textShadow: isHovered ? `0 0 18px ${alpha(theme.palette.text.secondary, 0.35)}` : 'none',
        zIndex: 2,
        position: 'relative',
    }), [isHovered, theme])

    const textStyles = useMemo(() => ({
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '0.9rem', md: '1rem' },
        lineHeight: 1.6,
        maxWidth: '280px',
        color: isHovered ? theme.palette.text.secondary : theme.palette.text.primary,
        transition: 'color 0.3s ease',
        zIndex: 2,
        position: 'relative',
    }), [isHovered, theme])

    return (
        <Grow
            in={isActive}
            timeout={600}
            style={{
                transitionDelay: `${index * 150}ms`,
                transformOrigin: 'center bottom',
            }}
        >
            <Box
                sx={cardStyles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box sx={{ position: 'relative', zIndex: 2, mb: 1 }}>
                    <Box sx={iconStyles}>
                        {GetIconFromIconMap(icon)}
                    </Box>
                </Box>

                <Box sx={{ zIndex: 2, position: 'relative' }}>
                    <GradientText
                        sx={{
                            fontSize: { xs: '1.3rem', md: '1.5rem' },
                            fontWeight: 700,
                            lineHeight: 1.3,
                            mb: 1,
                            transition: 'all 0.3s ease',
                            ...(isHovered && {
                                transform: 'scale(1.04)',
                            }),
                        }}
                    >
                        {title}
                    </GradientText>
                </Box>

                <Typography variant="body2" sx={textStyles}>
                    {text}
                </Typography>
            </Box>
        </Grow>
    )
}

export default WhatIDoCard
