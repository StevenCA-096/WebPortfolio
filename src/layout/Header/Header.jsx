import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { Code, ContactPage, Email, Phone, Send } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const actions = [
        { icon: <Phone />, name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=50686889718' },
        { icon: <Email />, name: 'Email', href: 'mailto:scordero096@gmail.com' },
    ];

    const theme = useTheme()

    return (
        <AppBar color='red' sx={{ boxShadow: 0, zIndex: 20, position: 'absolute' }}>
            <Container maxWidth="xxl">
                <Toolbar disableGutters sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Box display={{ xs: "flex", sm: "none" }}>
                        <Code sx={{
                            color: theme?.palette?.text?.secondary,
                            fontSize: 25,
                            mr: 1,
                        }} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: 'row', alignItems: "center" }}>
                        <Code sx={{
                            color: theme?.palette?.text?.secondary,
                            fontSize: 25,
                            mr: 1,
                            display: { xs: 'none', md: "flex" }
                        }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                fontSize: { xs: 15 }
                            }}
                        >
                            Steven Cordero
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: 'flex' }, flexDirection: "row", ml: -30 }}>
                        <NavLink to={'/'} style={{ textDecoration: "none", color: "white" }}>
                            <MenuItem>
                                <Typography>
                                    About Me
                                </Typography>
                            </MenuItem>
                        </NavLink>
                        <NavLink to={'/my-projects'} style={{ textDecoration: "none", color: "white" }}>
                            <MenuItem>
                                <Typography>
                                    My Projects
                                </Typography>
                            </MenuItem>
                        </NavLink>

                        <MenuItem>
                            <Typography>
                                Experience
                            </Typography>
                        </MenuItem>
                    </Box>

                    <Box>
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: 'absolute', right: { xs: -10, sm: 10 }, top: 10 }}
                            icon={<Send />}
                            direction='down'
                            FabProps={{
                                size: 'small', // Reduce the size of the button
                                sx: {
                                    width: { xs: 30, sm: 40 },
                                    height: { xs: 30, sm: 40 },
                                    backgroundColor: "transparent",
                                    '&:focus': {
                                        outline: 'none',
                                        boxShadow: 'none',
                                        backgroundColor: 'transparent'
                                    },
                                },
                                disableRipple: true
                            }}
                        >
                            {actions.map((action) => (
                                <SpeedDialAction
                                    onClick={() => {
                                        if (action.href.startsWith('mailto:')) {
                                            window.location.href = action.href;
                                        } else {
                                            window.open(action.href, '_blank');
                                        }
                                    }}
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                />
                            ))}
                        </SpeedDial>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
