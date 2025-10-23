import { Box } from '@mui/material'
import useIsMobile from '../../../hooks/isMobile/useIsMobile'
import NavItems from './NavItems'
import MobileDrawer from './MobileDrawer'

const NavigationMenu = () => {
    const isMobile = useIsMobile()

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
        <MobileDrawer />
    )
}

export default NavigationMenu