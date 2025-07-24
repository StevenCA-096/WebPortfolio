import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useMemo } from "react"

const createActiveStyles = (isActive) => ({
    display: 'inline-block',
    position: 'relative',
    color: isActive ? '#FFD700' : 'inherit',
    fontWeight: isActive ? 600 : 400,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        width: isActive ? '100%' : '0%',
        height: '2px',
        background: 'linear-gradient(90deg, #FFD700 0%, #FFF4BB 50%, #FFD700 100%)',
        borderRadius: '1px',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isActive ? '0 0 8px rgba(255, 215, 0, 0.5)' : 'none'
    },
    
    '&:hover': {
        color: '#FFD700',
        transform: 'translateY(-1px)',
        
        '&::after': {
            width: '100%',
            boxShadow: '0 0 12px rgba(255, 215, 0, 0.6)'
        }
    }
})

export const NavBarButton = ({ text, route }) => {
    const location = useLocation()
    const isActive = location.pathname === route
    
    const buttonStyles = useMemo(() => 
        createActiveStyles(isActive), 
        [isActive]
    )
    
    return (
        <Typography
            component="span"
            sx={buttonStyles}
            role="button"
            tabIndex={0}
            aria-current={isActive ? 'page' : undefined}
        >
            {text}
        </Typography>
    )
}