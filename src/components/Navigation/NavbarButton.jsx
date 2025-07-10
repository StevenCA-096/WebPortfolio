import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

const activeStyles = {
    display: 'inline',
    backgroundImage: 'linear-gradient(90deg, #FFD700 0%, #FFF4BB 60%, #FFD700 80%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 2px',
    backgroundPosition: '0 100%',
    paddingBottom: '2px' // para que no se corte el subrayado
}

export const NavBarButton = ({ text, route }) => {
    const location = useLocation()

    return (
        <Typography
            sx={location.pathname == route && activeStyles}
        >
            {text}
        </Typography>
    )
}
