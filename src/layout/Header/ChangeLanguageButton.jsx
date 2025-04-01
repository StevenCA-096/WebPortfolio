import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import en from '../../assets/Images/AppBar/languages/en.webp'
import es from '../../assets/Images/AppBar/languages/es.webp'

const ChangeLanguageButton = () => {
    const { i18n } = useTranslation('layout') // Specify the namespace
    const [isFlipped, setIsFlipped] = useState(false)

    const handleLanguageChange = () => {
        setIsFlipped(true)
        setTimeout(() => {
            i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
            setIsFlipped(false)
        }, 300) // Sync with animation duration
    }

    return (
        <Box
            component={motion.img}
            src={i18n.language === 'en' ? es : en}
            onClick={handleLanguageChange}
            sx={{
                objectFit: 'contain',
                width: 30,
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent'
            }}
            animate={{ rotateY: isFlipped ? 90 : 0 }}
            transition={{ duration: 0.3 }}
        />
    )
}

export default ChangeLanguageButton
