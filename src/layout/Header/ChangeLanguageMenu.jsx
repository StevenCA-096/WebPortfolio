import { Language } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import en from '../../assets/Images/AppBar/languages/en.webp'
import es from '../../assets/Images/AppBar/languages/es.webp'
const ChangeLanguageMenu = () => {
    const { i18n } = useTranslation('layout'); // Specify the namespace

    return (
        <>
            <Box 
                component={'img'}
                src={i18n.language == 'en' ? es : en}
                onClick={() => i18n.changeLanguage(i18n.language == 'en' ? 'es' : 'en')}
                sx={{
                    objectFit:"contain",
                    width: 40,
                    cursor:"pointer"
                }}

            />
        </>
    )
}

export default ChangeLanguageMenu