import { Typography, useTheme } from '@mui/material';

const GradientText = ({ children, textAlign = '', fontSize = {xs: 25, md: 30}, sx = {}}) => {
    const theme = useTheme()
    return (
        <Typography
            sx={{
                fontFamily: 'Gilroy, sans-serif',
                fontWeight: 700,
                fontSize: fontSize,
                background: theme.palette.text.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: textAlign,
                ...sx
            }}
        >
            {children}
        </Typography>
    );
};

export default GradientText;
