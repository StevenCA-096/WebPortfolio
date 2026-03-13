import { Typography, useTheme } from '@mui/material';

const GradientText = ({ children, textAlign = '', fontSize = {xs: 25, md: 30}, sx = {}}) => {
    const theme = useTheme()
    const textGradient = theme.palette.gradients?.text ?? theme.palette.text.gradient

    return (
        <Typography
            sx={{
                display: 'inline-block',
                fontFamily: 'Gilroy, sans-serif',
                fontWeight: 700,
                fontSize: fontSize,
                color: theme.palette.text.secondary,
                backgroundImage: textGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textAlign: textAlign,
                ...sx
            }}
        >
            {children}
        </Typography>
    );
};

export default GradientText;
