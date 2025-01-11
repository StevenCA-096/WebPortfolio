import React from 'react';
import { Typography } from '@mui/material';

const GradientText = ({ children, textAlign = '', fontSize = {xs: 25, md: 30}}) => {
    return (
        <Typography
            sx={{
                fontFamily: 'Gilroy, sans-serif',
                fontWeight: 700,
                fontSize: fontSize,
                background: 'linear-gradient(90deg, #FFD700 0%, #FFF4BB 60%, #FFD700 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: textAlign
            }}
        >
            {children}
        </Typography>
    );
};

export default GradientText;
