import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import GradientText from '../Text/GradientText';
import { GetIconFromIconMap } from '../../utils/iconMap';
 
const WhatIDoCard = ({ icon, title, text }) => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                width: {xs:290,sm:300},
                padding: 3,
                backgroundColor: 'rgb(19, 19, 19)',
                borderRadius: 2,
                borderBottom: `4px solid ${theme?.palette?.text?.secondary}`, // White border bottom
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                textAlign: 'center',
                color: 'white',
                minHeight:{xs:220, md:280},
                minWidth:{xs:200, md:250},
                height:140
            }}
        >
            <Box sx={{ fontSize: 40, color: theme?.palette?.text?.secondary }}>{GetIconFromIconMap(icon)}</Box>
            <GradientText>
                {title}
            </GradientText>
            <Typography
                variant="body2"
                sx={{
                    color: 'white',
                    fontFamily: 'Gilroy, sans-serif',
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default WhatIDoCard;
