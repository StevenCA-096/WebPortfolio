import { Avatar, Box, Drawer, IconButton, Typography, useTheme } from '@mui/material'
import { useCallback, useState } from 'react'
import NavItems from './NavItems'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import me from '../../../assets/Images/Me/me.png'
import { useThemeContext } from '../../../context/ThemeContext'
import { useTranslation } from 'react-i18next'

const MobileDrawer = () => {
    const theme = useTheme()
    const { theme: currentTheme } = useThemeContext()
    const { t } = useTranslation('layout')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleDrawerToggle = useCallback(() => {
        setIsDrawerOpen(prev => !prev)
    }, [])

    const handleDrawerClose = useCallback(() => {
        setIsDrawerOpen(false)
    }, [])

    return (
        <Box>
            <IconButton
                onClick={handleDrawerToggle}
                sx={{
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        transform: "scale(1.05)"
                    }
                }}
                aria-label="Abrir menú de navegación"
            >
                <MenuIcon sx={{ color: theme.palette.text.primary, fontSize: 30 }} />
            </IconButton>

            <Drawer
                open={isDrawerOpen}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 300,
                        background: currentTheme == 'dark'
                            ? "linear-gradient(145deg, #2A2929 0%, #1a1a1a 100%)"
                            : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                        boxShadow: theme.palette.mode == 'dark'
                            ? "-4px 0 20px rgba(0, 0, 0, 0.5)"
                            : "-4px 0 20px rgba(0, 0, 0, 0.1)"
                    }
                }}
            >
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Avatar Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            pt: 4,
                            pb: 3,
                            px: 2,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: '10%',
                                right: '10%',
                                height: '1px',
                                background: currentTheme == 'dark'
                                    ? 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent)'
                                    : 'linear-gradient(90deg, transparent, rgba(184, 134, 11, 0.3), transparent)'
                            }
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                mb: 2,
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    inset: -4,
                                    borderRadius: '50%',
                                    background: currentTheme == 'dark'
                                        ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                                        : 'linear-gradient(135deg, #B8860B, #DAA520)',
                                    opacity: 0.3,

                                }
                            }}
                        >
                            <Avatar
                                src={me}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    boxShadow: currentTheme == 'dark'
                                        ? '0 4px 20px rgba(255, 215, 0, 0.3)'
                                        : '0 4px 20px rgba(184, 134, 11, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)'
                                    }
                                }}
                            />
                        </Box>
                        <Typography
                            variant="h6"
                            sx={{
                                color: theme.palette.text.primary,
                                fontWeight: 600,
                                mb: 0.5
                            }}
                        >
                            {t('drawer.portfolio')}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: '0.875rem'
                            }}
                        >
                            {t('drawer.navigation')}
                        </Typography>
                    </Box>

                    {/* Items de navegación */}
                    <Box sx={{ flex: 1, overflowY: 'auto', py: 2 }}>
                        <NavItems onClose={handleDrawerClose} />
                    </Box>

                    {/* Footer opcional */}
                    <Box
                        sx={{
                            p: 2,
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: '0.75rem'
                            }}
                        >
                            Steven Cordero Alvarez
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    )
}

export default MobileDrawer