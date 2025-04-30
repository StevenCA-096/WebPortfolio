import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Code } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import ChangeLanguageButton from './ChangeLanguageButton';
import NavigationMenu from './NavigationMenu';

const Header = () => {
    const theme = useTheme()
    return (
        <AppBar color='red' sx={{ boxShadow: 0, zIndex: 20, position: 'absolute' }}>
            <Container maxWidth="xxl">
                <Toolbar disableGutters sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Box display={{ xs: "flex", sm: "none" }}>
                        <NavigationMenu />
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
                                mr: { xs: 0, md: 2 },
                                display: { xs: 'flex', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                fontSize: { xs: 16 }
                            }}
                        >
                            Steven Cordero
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: "row", alignItems: "center" }}>
                        <NavigationMenu />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Box>
                            <ChangeLanguageButton />
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
