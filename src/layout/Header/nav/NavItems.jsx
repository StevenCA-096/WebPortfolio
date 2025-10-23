import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { NavBarButton } from "../../../components/Navigation/NavbarButton"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useCallback, useMemo } from "react"

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
        // Versión mobile con Drawer
        return (
            <List sx={{ pt: 2, px: 2 }}>
                {navigationPages.map((page, index) => (
                    <>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => handleNavigation(page.route)}
                                sx={{
                                    borderRadius: "12px",
                                    mb: 1,
                                    py: 1.5,
                                    transition: "all 0.3s ease",
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                                        transform: 'translateX(8px)',
                                        '& .MuiListItemIcon-root': {
                                            transform: 'scale(1.2)'
                                        }
                                    }
                                }}
                            >
                                <ListItemIcon
                                    sx={{ 
                                        minWidth: 45,
                                        fontSize: '24px',
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    {page.icon}
                                </ListItemIcon>
                                <ListItemText 
                                    primary={page.label}
                                    primaryTypographyProps={{
                                        sx: {
                                            fontWeight: 500,
                                            fontSize: '16px'
                                        }
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                        {index < navigationPages.length - 1 && (
                            <Divider 
                                sx={{ 
                                    borderColor: 'rgba(255, 215, 0, 0.1)',
                                    my: 1
                                }} 
                            />
                        )}
                    </>
                ))}
            </List>
        )
    }
    
    // Versión desktop sin cambios
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

export default NavItems