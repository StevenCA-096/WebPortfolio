import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { Grid, Box, Fade, Grow } from '@mui/material'
import { useTranslation } from 'react-i18next'
import GradientText from '@components/Text/GradientText'
import SkillCard from '@components/Cards/SkillCard'
import { MySkillsList } from '../../../data/MySkillsList'

const MySkills = () => {
    const { t } = useTranslation('home')
    const [visibleSkills, setVisibleSkills] = useState(new Set())
    const [inView, setInView] = useState(false)
    const sectionRef = useRef(null)

    // Intersection Observer nativo
    const handleIntersection = useCallback((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !inView) {
            setInView(true)
            // Agregar animación escalonada cuando la sección entra en vista
            MySkillsList.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleSkills(prev => new Set([...prev, index]))
                }, index * 100) // 100ms delay entre cada skill
            })
        }
    }, [inView])

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.2,
            rootMargin: '50px'
        })

        const currentRef = sectionRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [handleIntersection])

    // Organizar skills por categorías si tienen esa propiedad
    const categorizedSkills = useMemo(() => {
        const categories = {}
        MySkillsList.forEach((skill, index) => {
            const category = skill.category || 'general'
            if (!categories[category]) {
                categories[category] = []
            }
            categories[category].push({ ...skill, originalIndex: index })
        })
        return categories
    }, [])

    const containerStyles = {
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '2px',
            height: '100%',
            transform: 'translateX(-50%)',
            zIndex: 0
        }
    }

    return (
        <Box ref={sectionRef} sx={containerStyles}>
            <Grid container item xs={12} spacing={4} sx={{ my: { xs: 8, md: 12 } }}>
                {/* Header Section */}
                <Grid item xs={12}>
                    <Fade in={inView} timeout={800}>
                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                            <GradientText 
                                textAlign='center'
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 700,
                                    mb: 2
                                }}
                            >
                                {t('sections.skills')}
                            </GradientText>
                            <Box
                                sx={{
                                    width: '60px',
                                    height: '4px',
                                    borderRadius: '2px',
                                    margin: '0 auto',
                                }}
                            />
                        </Box>
                    </Fade>
                </Grid>

                {/* Skills Grid */}
                <Grid container item xs={12} spacing={3} sx={{ justifyContent: 'center' }}>
                    {MySkillsList.slice(0,6).map((skill, index) => (
                        <Grid 
                            item 
                            xs={6} 
                            sm={4} 
                            md={3} 
                            lg={2} 
                            key={skill.id || index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Grow
                                in={visibleSkills.has(index)}
                                timeout={600}
                                style={{ 
                                    transformOrigin: 'center',
                                    transitionDelay: visibleSkills.has(index) ? '0ms' : '0ms'
                                }}
                            >
                                <Box sx={{ width: '100%' }}>
                                    <SkillCard 
                                        icon={skill?.imgUrl} 
                                        title={skill?.title}
                                        level={skill?.level}
                                        category={skill?.category}
                                        index={index}
                                    />
                                </Box>
                            </Grow>
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </Box>
    )
}

export default MySkills