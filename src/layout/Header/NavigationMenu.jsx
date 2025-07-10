import React, { useState } from 'react'
import useIsMobile from '../../hooks/isMobile/useIsMobile'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { NavBarButton } from '../../components/Navigation/NavbarButton'

const NavigationMenu = () => {
    const isMobile = useIsMobile()
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {
                !isMobile ? (
                    <Box sx={{ display: { xs: "none", md: 'flex' }, flexDirection: "row", ml: -30 }}>
                        <NavItems />
                    </Box>
                ) : (
                    <Box>
                        <IconButton onClick={handleClick}>
                            <MenuIcon sx={{ color: "white", fontSize: 30 }} />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            PaperProps={{ sx: { background: "#3D3C3C", zIndex: 10 } }}
                        >
                            <NavItems handleClose={handleClose} />
                        </Menu>
                    </Box>
                )
            }

        </>
    )
}

const NavItems = ({ handleClose }) => {
    const navigate = useNavigate()
    const { t } = useTranslation('layout')

    const handleNavigation = (path) => {
        navigate(path)
        if (handleClose) handleClose()
    }

    const pages = [
        {
            label: t('aboutMe'),
            route: '/'
        },
        {
            label: t('myProjects'),
            route: '/my-projects'
        },
        {
            label: t('experience'),
            route: '/my-experience'
        }
    ]

    return (
        <>
            {
                pages.map((page) =>
                    <MenuItem onClick={() => handleNavigation(page.route)}>
                        <NavBarButton
                            route={page.route}
                            text={page.label}
                        />
                    </MenuItem>
                )
            }
        </>
    )
}

export default NavigationMenu