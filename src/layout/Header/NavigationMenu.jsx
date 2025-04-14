import React, { useState } from 'react'
import useIsMobile from '../../hooks/isMobile/useIsMobile'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

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
                            <MenuIcon sx={{color:"white", fontSize:30}}/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            PaperProps={{sx:{background:"#3D3C3C", zIndex:10}}}
                        >
                            <NavItems />
                        </Menu>
                    </Box>
                )
            }

        </>
    )
}

const NavItems = () => {
    const navigate = useNavigate()
    const {t} = useTranslation('layout')
    return (
        <>
            <MenuItem onClick={() => navigate('/')}>
                <Typography>
                    {t('aboutMe')}
                </Typography>
            </MenuItem>

            <MenuItem onClick={() => navigate('/my-projects')}>
                <Typography>
                    {t('myProjects')}
                </Typography>
            </MenuItem>

            <MenuItem onClick={() => navigate('my-experience')}>
                <Typography>
                    {t('experience')}
                </Typography>
            </MenuItem>
        </>
    )
}

export default NavigationMenu