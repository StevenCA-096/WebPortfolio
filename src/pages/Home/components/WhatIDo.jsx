import { useState, useRef, useCallback, useEffect } from 'react'
import { Grid, Box, IconButton, Fade } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useTheme } from '@emotion/react'
import { useTranslation } from 'react-i18next'
import useIsMobile from '@hooks/isMobile/useIsMobile'
import GradientText from '@components/Text/GradientText'
import WhatIDoCard from '@components/Cards/WhatIDoCard'

const WhatIDo = () => {
    const theme = useTheme()
    const { t: title } = useTranslation('home')
    const { t: whatIDo } = useTranslation('whatIDo')
    const whatIDoList = whatIDo('whatIDo', { returnObjects: true })
    const isMobile = useIsMobile()
    
    const [currentSlide, setCurrentSlide] = useState(0)
    const [inView, setInView] = useState(false)
    const sectionRef = useRef(null)
    const sliderRef = useRef(null)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const totalSlides = whatIDoList?.length || 0

    // Intersection Observer para animaciones
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Navegación del slider
    const goToSlide = useCallback((index) => {
        setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)))
    }, [totalSlides])

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides)
    }, [totalSlides])

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)
    }, [totalSlides])

    // Touch handlers para swipe
    const handleTouchStart = useCallback((e) => {
        touchStartX.current = e.targetTouches[0].clientX
    }, [])

    const handleTouchMove = useCallback((e) => {
        touchEndX.current = e.targetTouches[0].clientX
    }, [])

    const handleTouchEnd = useCallback(() => {
        if (!touchStartX.current || !touchEndX.current) return
        
        const distance = touchStartX.current - touchEndX.current
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe) {
            nextSlide()
        } else if (isRightSwipe) {
            prevSlide()
        }
    }, [nextSlide, prevSlide])

    // Estilos para el contenedor de la sección
    const sectionStyles = {
        position: 'relative',
        py: { xs: 6, md: 10 },
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            pointerEvents: 'none'
        }
    }

    if (!whatIDoList || whatIDoList.length === 0) {
        return null
    }

    return (
        <Box ref={sectionRef} sx={sectionStyles}>
            <Grid container spacing={4}>
                {/* Header */}
                <Grid item xs={12}>
                    <Fade in={inView} timeout={800}>
                        <Box sx={{ textAlign: 'center', mb: 4, position: 'relative', zIndex: 1 }}>
                            <GradientText 
                                color={theme?.palette?.text?.secondary} 
                                textAlign='center'
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 700,
                                    mb: 2
                                }}
                            >
                                {title('sections.whatIDo')}
                            </GradientText>
                            <Box
                                sx={{
                                    width: '80px',
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #FFD700, #FFF4BB, #FFD700)',
                                    borderRadius: '2px',
                                    margin: '0 auto',
                                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
                                }}
                            />
                        </Box>
                    </Fade>
                </Grid>

                {/* Content */}
                <Grid item xs={12}>
                    {isMobile ? (
                        // Mobile Slider Version
                        <Box sx={{ position: 'relative', px: 2 }}>
                            <Box
                                ref={sliderRef}
                                sx={{
                                    overflow: 'hidden',
                                    borderRadius: 3,
                                    position: 'relative'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        transform: `translateX(-${currentSlide * 100}%)`,
                                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        width: '100%'
                                    }}
                                >
                                    {whatIDoList.map((item, index) => (
                                        <Box 
                                            key={index} 
                                            sx={{ 
                                                minWidth: '100%',
                                                width: '100%',
                                                px: 1,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}
                                            onTouchEnd={handleTouchEnd}
                                            onTouchMove={handleTouchMove}
                                            onTouchStart={handleTouchStart}
                                        >
                                            <WhatIDoCard 
                                                icon={item.icon} 
                                                text={item.text} 
                                                title={item.title}
                                                index={index}
                                                isActive={true}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Navigation Arrows */}
                            <IconButton
                                onClick={prevSlide}
                                sx={{
                                    position: 'absolute',
                                    left: -10,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                                    color: '#FFD700',
                                    backdropFilter: 'blur(10px)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 215, 0, 0.2)',
                                        transform: 'translateY(-50%) scale(1)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <ChevronLeft />
                            </IconButton>

                            <IconButton
                                onClick={nextSlide}
                                sx={{
                                    position: 'absolute',
                                    right: -10,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                                    color: '#FFD700',
                                    backdropFilter: 'blur(10px)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 215, 0, 0.2)',
                                        transform: 'translateY(-50%) scale(1.1)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <ChevronRight />
                            </IconButton>

                            {/* Dots Indicator */}
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    gap: 1, 
                                    mt: 3 
                                }}
                            >
                                {whatIDoList.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        sx={{
                                            width: currentSlide === index ? 24 : 8,
                                            height: 8,
                                            borderRadius: 4,
                                            backgroundColor: currentSlide === index ? '#FFD700' : 'rgba(255, 255, 255, 0.3)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            boxShadow: currentSlide === index ? '0 0 10px rgba(255, 215, 0, 0.5)' : 'none',
                                            '&:hover': {
                                                backgroundColor: currentSlide === index ? '#FFE55C' : 'rgba(255, 255, 255, 0.5)'
                                            }
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ) : (
                        // Desktop Grid Version
                        <Fade in={inView} timeout={1000} style={{ transitionDelay: '300ms' }}>
                            <Grid 
                                container 
                                spacing={4} 
                                sx={{ 
                                    justifyContent: 'center',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                {whatIDoList.map((item, index) => (
                                    <Grid 
                                        item 
                                        xs={12} 
                                        md={6} 
                                        lg={4} 
                                        key={index}
                                        sx={{ 
                                            display: 'flex', 
                                            justifyContent: 'center' 
                                        }}
                                    >
                                        <WhatIDoCard 
                                            icon={item.icon} 
                                            text={item.text} 
                                            title={item.title}
                                            index={index}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Fade>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default WhatIDo