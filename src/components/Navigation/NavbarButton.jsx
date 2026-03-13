import { Typography, useTheme } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useMemo } from "react"

const createActiveStyles = (isActive, textGradient) => ({
    display: 'inline-block',
    position: 'relative',
    color: isActive ? 'transparent' : 'inherit',
    fontWeight: isActive ? 600 : 400,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ...(isActive && {
        backgroundImage: textGradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    }),
    
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        width: isActive ? '100%' : '0%',
        height: '2px',
        background: textGradient,
        borderRadius: '1px',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: 'none'
    },
    
    '&:hover': {
        color: 'transparent',
        backgroundImage: textGradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        transform: 'translateY(-1px)',
        
        '&::after': {
            width: '100%',
            boxShadow: 'none'
        }
    }
})

export const NavBarButton = ({ text, route }) => {
    const theme = useTheme()
    const location = useLocation()
    const isActive = location.pathname === route
    const textGradient = theme.palette.gradients?.text ?? theme.palette.text.gradient
    
    const buttonStyles = useMemo(() => 
        createActiveStyles(isActive, textGradient), 
        [isActive, textGradient]
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
