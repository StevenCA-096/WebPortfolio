import React, { useState, useCallback, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, IconButton, Menu, MenuItem, Typography, Fade } from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import useIsMobile from '../../hooks/isMobile/useIsMobile'
import { NavBarButton } from '../../components/Navigation/NavbarButton'

const NavigationMenu = () => {
    const isMobile = useIsMobile()
    const [anchorEl, setAnchorEl] = useState(null)
    
    const isMenuOpen = Boolean(anchorEl)
    
    const handleMenuOpen = useCallback((event) => {
        setAnchorEl(event.currentTarget)
    }, [])
    
    const handleMenuClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    const menuStyles = useMemo(() => ({
        background: "linear-gradient(145deg, #3D3C3C 0%, #2A2929 100%)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        zIndex: 1300
    }), [])

    if (!isMobile) {
        return (
            <Box 
                sx={{ 
                    display: { xs: "none", md: 'flex' }, 
                    flexDirection: "row", 
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <NavItems />
            </Box>
        )
    }

    return (
        <Box>
            <IconButton 
                onClick={handleMenuOpen}
                sx={{
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        transform: "scale(1.05)"
                    }
                }}
                aria-label="Abrir menú de navegación"
            >
                {isMenuOpen ? (
                    <CloseIcon sx={{ color: "white", fontSize: 30 }} />
                ) : (
                    <MenuIcon sx={{ color: "white", fontSize: 30 }} />
                )}
            </IconButton>
            
            <Menu
                id="navigation-menu"
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 300 }}
                MenuListProps={{
                    'aria-labelledby': 'navigation-menu-button',
                    sx: { padding: 1 }
                }}
                PaperProps={{ sx: menuStyles }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <NavItems onClose={handleMenuClose} />
            </Menu>
        </Box>
    )
}

const NavItems = ({ onClose }) => {
    const navigate = useNavigate()
    const { t } = useTranslation('layout')
    
    const handleNavigation = useCallback((path) => {
        navigate(path)
        onClose?.()
    }, [navigate, onClose])
    
    const navigationPages = useMemo(() => [
        {
            id: 'about',
            label: t('aboutMe'),
            route: '/',
            icon: '👨‍💻'
        },
        {
            id: 'projects',
            label: t('myProjects'),
            route: '/my-projects',
            icon: '🚀'
        },
        {
            id: 'experience',
            label: t('experience'),
            route: '/my-experience',
            icon: '💼'
        }
    ], [t])
    
    if (onClose) {
        // Versión mobile con MenuItem
        return (
            <>
                {navigationPages.map((page) => (
                    <MenuItem 
                        key={page.id}
                        onClick={() => handleNavigation(page.route)}
                        sx={{
                            borderRadius: "8px",
                            margin: "4px 0",
                            transition: "all 0.2s ease-in-out",
                            "&:hover": {
                                backgroundColor: "rgba(255, 215, 0, 0.1)",
                                transform: "translateX(4px)"
                            }
                        }}
                    >
                        <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                            <span style={{ fontSize: "18px" }}>{page.icon}</span>
                            <NavBarButton
                                route={page.route}
                                text={page.label}
                            />
                        </Box>
                    </MenuItem>
                ))}
            </>
        )
    }
    
    // Versión desktop sin MenuItem
    return (
        <>
            {navigationPages.map((page) => (
                <Box 
                    key={page.id}
                    onClick={() => handleNavigation(page.route)}
                    sx={{ 
                        cursor: "pointer",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                            transform: "translateY(-2px)"
                        }
                    }}
                >
                    <NavBarButton
                        route={page.route}
                        text={page.label}
                    />
                </Box>
            ))}
        </>
    )
}

export default NavigationMenu