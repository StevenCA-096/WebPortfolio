import { Box, Container, Divider, Stack, Typography, alpha, useTheme } from '@mui/material'
import React from 'react'
import Networks from './Networks'
import { useTranslation } from 'react-i18next'
import { Code, Favorite } from '@mui/icons-material'
import GradientText from '../../components/Text/GradientText'

const Footer = () => {
  const theme = useTheme()
  const { t } = useTranslation('layout');
  
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 8, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '80%', md: '60%' },
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)',
        }
      }}
    >
      <Container
        maxWidth='lg'
        sx={{
          pt: 6,
          pb: 4,
        }}
      >
        {/* Contenido principal del footer */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Logo/Marca */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Code sx={{ color: '#FFD700', fontSize: 28 }} />
              <GradientText fontSize={20} sx={{ fontWeight: 700 }}>
                Steven Cordero
              </GradientText>
            </Stack>
          </Box>

          {/* Contenido central */}
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
            {/* Información del desarrollador */}
            <Stack spacing={1.5} alignItems="center">
              <Typography 
                variant="body2" 
                sx={{ 
                  color: theme.palette.text.secondary,
                  fontSize: '0.9rem'
                }}
              >
                {t('footer.designedBy')}
              </Typography>
              
              <GradientText 
                fontSize={{ xs: 18, md: 20 }} 
                sx={{ fontWeight: 600 }}
              >
                Steven Cordero Alvarez
              </GradientText>

              <Box display="flex" alignItems="center" gap={1}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: theme.palette.text.secondary,
                    fontSize: '0.85rem'
                  }}
                >
                  {t('footer.message')}
                </Typography>
                <Favorite sx={{ color: '#ff6b6b', fontSize: 16 }} />
              </Box>
            </Stack>

            {/* Redes sociales */}
            <Networks />

            {/* Copyright */}
            <Typography 
              variant="caption" 
              sx={{ 
                color: alpha(theme.palette.text.secondary, 0.7),
                fontSize: '0.75rem',
                mt: 2
              }}
            >
              © {new Date().getFullYear()} Steven Cordero. All rights reserved.
            </Typography>
          </Stack>

          {/* Enlaces adicionales (opcional) */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack spacing={1} alignItems="flex-end">
              <Typography 
                variant="caption" 
                sx={{ 
                  color: alpha(theme.palette.text.secondary, 0.8),
                  fontSize: '0.8rem'
                }}
              >
                Made in Costa Rica 🇨🇷
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: alpha(theme.palette.text.secondary, 0.6),
                  fontSize: '0.75rem'
                }}
              >
                Pura Vida
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Línea decorativa inferior */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            textAlign: 'center'
          }}
        >
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            alignItems="center" 
            justifyContent="center"
          >
            <Typography 
              variant="caption" 
              sx={{ 
                color: alpha(theme.palette.text.secondary, 0.6),
                fontSize: '0.7rem'
              }}
            >
              Built with React.js, MUI & lots of ☕
            </Typography>
            
            <Box
              sx={{
                width: { xs: '100%', sm: 'auto' },
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)',
                minWidth: { sm: 100 }
              }}
            />
            
            <Typography 
              variant="caption" 
              sx={{ 
                color: alpha(theme.palette.text.secondary, 0.6),
                fontSize: '0.7rem'
              }}
            >
              Thanks for visiting! 🚀
            </Typography>
          </Stack>
        </Box>
      </Container>

      {/* Glow effect de fondo */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '100px',
          background: `radial-gradient(ellipse, ${alpha('#FFD700', 0.05)} 0%, transparent 70%)`,
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
    </Box>
  )
}

export default Footer