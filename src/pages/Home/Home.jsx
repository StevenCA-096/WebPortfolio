import { Box, Container, Typography, alpha, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import MySkills from './components/MySkills'
import WhatIDo from './components/WhatIDo'
import { KeyboardArrowDown  } from '@mui/icons-material'
import NameAndPicture from './components/NameAndPicture'
import useIsMobile from '../../hooks/isMobile/useIsMobile'

const Home = () => {
  const theme = useTheme()
  const isMobile = useIsMobile()

  // Animaciones de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  return (
    <Container maxWidth='lg' sx={{ position: 'relative' }}>
      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{
            minHeight: { xs: '80vh', md: '90vh' },
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            mt: isMobile ? -4 : 0
          }}
        >
          {/* Elementos decorativos de fondo */}
          <Box
            sx={{
              position: 'absolute',
              top: '20%',
              right: '10%',
              width: '200px',
              height: '200px',
              background: `radial-gradient(circle, ${alpha('#FFD700', 0.03)} 0%, transparent 70%)`,
              borderRadius: '50%',
              zIndex: -1,
              display: { xs: 'none', md: 'block' }
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: '150px',
              height: '150px',
              background: `radial-gradient(circle, ${alpha('#FFD700', 0.02)} 0%, transparent 70%)`,
              borderRadius: '50%',
              zIndex: -1,
              display: { xs: 'none', md: 'block' }
            }}
          />

          <NameAndPicture />

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: isMobile ? "-20px" : '30px',
              left: isMobile? '35%' : '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              }}
          >
            <Typography
              variant="caption"
              sx={{
                color: alpha(theme.palette.text.secondary, 0.7),
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Scroll Down
            </Typography>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <KeyboardArrowDown
                sx={{
                  color: '#FFD700',
                  fontSize: 28,
                }}
              />
            </motion.div>
          </motion.div>
        </Box>
      </motion.div>

      {/* Secciones existentes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <MySkills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <WhatIDo />
      </motion.div>
    </Container>
  )
}

export default Home