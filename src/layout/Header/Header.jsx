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
        <AppBar color='red' sx={{ boxShadow: 0, zIndex: 20, position: 'relative   ' }}>
            <Container maxWidth="xxl" disableGutters sx={{px:{xs:0,sm:2}}}>
                <Toolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: 'relative'
                    }}
                >
                    <Box display={{ xs: "flex", sm: "none" }}>
                        <NavigationMenu />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: 'row', alignItems: "center" }}>
                        <Code sx={{
                            color: theme?.palette?.text?.secondary,
                            fontSize: 25,
                            display: { xs: 'none', md: "flex" }
                        }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                display: 'flex',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                fontSize: { xs: 16 },
                                left: "50%",
                                transform: "translateX(-50%)",
                                position:{xs:'absolute',sm:'relative'}
                            }}
                        >
                            Steven Cordero
                        </Typography>
                    </Box>
                    {/* Centrar absolutamente el menú */}
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}>
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
