import { Box, Typography, alpha, useTheme } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import en from '../../assets/Images/AppBar/languages/en.webp'
import es from '../../assets/Images/AppBar/languages/es.webp'

const ChangeLanguageButton = () => {
    const { i18n } = useTranslation('layout')
    const theme = useTheme()
    const [isChanging, setIsChanging] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const currentLang = i18n.language

    const languages = [
        { code: 'en', flag: en, label: 'English' },
        { code: 'es', flag: es, label: 'Español' }
    ]

    const handleLanguageChange = (newLang) => {
        if (newLang === currentLang) return
        
        setIsChanging(true)
        setShowDropdown(false)
        
        setTimeout(() => {
            i18n.changeLanguage(newLang)
            setIsChanging(false)
        }, 300)
    }

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <Box sx={{ position: 'relative' }}>
            {/* Main Button */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDropdown}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        padding: '6px 10px',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${alpha('#FFD700', 0.2)}`,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        WebkitTapHighlightColor: 'transparent',
                        '&:hover': {
                            border: `1px solid ${alpha('#FFD700', 0.4)}`,
                            boxShadow: `0 4px 20px ${alpha('#FFD700', 0.1)}`
                        }
                    }}
                >
                    {/* Flag with loading animation */}
                    <motion.div
                        animate={{ 
                            rotateY: isChanging ? 180 : 0,
                            scale: isChanging ? 0.8 : 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <Box
                            component="img"
                            src={currentLang === 'en' ? en : es}
                            sx={{
                                width: {xs: 20, md:24},
                                height: {xs: 20, md:24},
                                objectFit: 'contain',
                                filter: isChanging ? 'brightness(0.7)' : 'none',
                                transition: 'filter 0.3s ease'
                            }}
                        />
                    </motion.div>

                    {/* Language Code */}
                    <Typography
                        variant="caption"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            opacity: isChanging ? 0.6 : 1,
                            transition: 'opacity 0.3s ease'
                        }}
                    >
                        {currentLang}
                    </Typography>

                    {/* Dropdown Arrow */}
                    <motion.div
                        animate={{ rotate: showDropdown ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Box
                            sx={{
                                width: 0,
                                height: 0,
                                borderLeft: '4px solid transparent',
                                borderRight: '4px solid transparent',
                                borderTop: `4px solid ${alpha('#FFD700', 0.8)}`,
                                ml: 0.5
                            }}
                        />
                    </motion.div>
                </Box>
            </motion.div>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {showDropdown && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            marginTop: '8px',
                            zIndex: 1000
                        }}
                    >
                        <Box
                            sx={{
                                backdropFilter: 'blur(20px)',
                                borderRadius: '12px',
                                border: `1px solid ${alpha('#FFD700', 0.2)}`,
                                boxShadow: `0 8px 32px ${alpha('#000', 0.2)}`,
                                overflow: 'hidden',
                                minWidth: '120px'
                            }}
                        >
                            {languages.map((lang, index) => (
                                <motion.div
                                    key={lang.code}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ backgroundColor: alpha('#FFD700', 0.1) }}
                                    onClick={() => handleLanguageChange(lang.code)}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                            padding: '12px 16px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            borderLeft: currentLang === lang.code ? `3px solid #FFD700` : '3px solid transparent',
                                            '&:hover': {
                                                transform: 'translateX(2px)'
                                            }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={lang.flag}
                                            sx={{
                                                width: 20,
                                                height: 20,
                                                objectFit: 'contain'
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: theme.palette.text.primary,
                                                fontWeight: currentLang === lang.code ? 600 : 400,
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            {lang.label}
                                        </Typography>
                                        {currentLang === lang.code && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: '50%',
                                                        background: '#FFD700',
                                                        ml: 'auto'
                                                    }}
                                                />
                                            </motion.div>
                                        )}
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading indicator */}
            {isChanging && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none'
                    }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    >
                        <Box
                            sx={{
                                width: 16,
                                height: 16,
                                border: `2px solid ${alpha('#FFD700', 0.3)}`,
                                borderTop: `2px solid #FFD700`,
                                borderRadius: '50%'
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </Box>
    )
}

export default ChangeLanguageButton