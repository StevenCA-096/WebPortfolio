// MyProjectImagesModal.jsx
import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, Box, Typography, Skeleton } from '@mui/material'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

// AF-Website images
import afHomeDesktopBw from '../../../assets/Images/Projects/AF-Website/desktop/home-bw.png'
import afHomeDesktopColored from '../../../assets/Images/Projects/AF-Website/desktop/home-colored.png'
import afHomeMobileColored from '../../../assets/Images/Projects/AF-Website/mobile/home-colored.png'
import afClaimsDesktop from '../../../assets/Images/Projects/AF-Website/desktop/claims.png'

// CTPHojancha images  
import ctpDashboardDesktop from '../../../assets/Images/Projects/CTPHojancha/desktop/dashboard.png'
import ctpDashboardMobile from '../../../assets/Images/Projects/CTPHojancha/mobile/dashboard.png'
import ctpFormDesktop from '../../../assets/Images/Projects/CTPHojancha/desktop/form.png'
import ctpFormMobile from '../../../assets/Images/Projects/CTPHojancha/mobile/form.png'

// AF-Platform images  
import afPlatformDesktopDashboard from '../../../assets/Images/Projects/AF-Platform/desktop/dashboard.png'
import afPlatformDesktopModule from '../../../assets/Images/Projects/AF-Platform/desktop/module.png'
import afPlatformMobileDashboard from '../../../assets/Images/Projects/AF-Platform/mobile/dashboard.png'
import afPlatformMobileModule from '../../../assets/Images/Projects/AF-Platform/mobile/module.png'

const imageMap = {
  'AF-Website': {
    'desktop/home-colored': afHomeDesktopColored,
    'desktop/home-bw': afHomeDesktopBw,
    'desktop/claims': afClaimsDesktop,
    'mobile/home-colored': afHomeMobileColored,
    'mobile/claims': afClaimsDesktop,
  },
  'CTPHojancha': {
    'desktop/dashboard': ctpDashboardDesktop,
    'mobile/dashboard': ctpDashboardMobile,
    'desktop/form': ctpFormDesktop,
    'mobile/form': ctpFormMobile,
  },
  'AF-Platform': {
    'desktop/dashboard': afPlatformDesktopDashboard,
    'mobile/dashboard': afPlatformMobileDashboard,
    'desktop/module': afPlatformDesktopModule,
    'mobile/module': afPlatformMobileModule,
  }
}

const ImageWithSkeleton = ({ src, alt, onClick, sx }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <Box sx={{ position: 'relative', ...sx }}>
      {!loaded && !error && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={300}
          sx={{
            borderRadius: 2,
            bgcolor: '#333',
            position: loaded ? 'absolute' : 'static',
            top: 0,
            left: 0,
            zIndex: loaded ? -1 : 1,
          }}
        />
      )}
      
      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true)
          setLoaded(true)
        }}
        onClick={onClick}
        sx={{
          width: '100%',
          objectFit: 'contain',
          borderRadius: 2,
          height: 300,
          cursor: 'zoom-in',
          transition: 'transform 0.3s',
          opacity: loaded ? 1 : 0,
          '&:hover': {
            transform: 'scale(1.01)',
          },
          ...(error && {
            display: 'none'
          })
        }}
      />
      
      {error && (
        <Box
          sx={{
            width: '100%',
            height: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#333',
            borderRadius: 2,
            color: '#666'
          }}
        >
          <Typography variant="body2">Failed to load image</Typography>
        </Box>
      )}
    </Box>
  )
}

const MyProjectImagesModal = ({ open, images = [], onClose, projectFolder = '' }) => {
  const [zoomedImage, setZoomedImage] = useState(null)
  const [zoomedImageLoaded, setZoomedImageLoaded] = useState(false)
  const { t } = useTranslation('projects')

  const resolvedImages = images
    .map(imgName => {
      const projectImages = imageMap[projectFolder]
      if (projectImages && projectImages[imgName]) {
        return projectImages[imgName]
      }
      return null
    })
    .filter(Boolean)

  const sliderSettings = {
    dots: true,
    infinite: resolvedImages.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: resolvedImages.length > 1
  }

  const handleZoomImage = (src) => {
    setZoomedImage(src)
    setZoomedImageLoaded(false)
  }

  const handleCloseZoom = () => {
    setZoomedImage(null)
    setZoomedImageLoaded(false)
  }

  return (
    <>
      <Dialog open={open} onClose={onClose} PaperProps={{ sx: { background: "#202020" } }}>
        <DialogTitle sx={{ color: 'white' }}>
          {t('projectImages')}
        </DialogTitle>
        <DialogContent sx={{ overflow: "hidden", mx: 1, minHeight: 200 }}>
          {resolvedImages.length === 0 ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
              <Typography color="gray">{t('noAddedImages')}</Typography>
            </Box>
          ) : (
            <Slider {...sliderSettings}>
              {resolvedImages.map((src, i) => (
                <Box key={i} sx={{ outline: 'none', textAlign: 'center' }}>
                  <ImageWithSkeleton
                    src={src}
                    alt={`Project image ${i + 1}`}
                    onClick={() => handleZoomImage(src)}
                  />
                </Box>
              ))}
            </Slider>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!zoomedImage}
        onClose={handleCloseZoom}
        fullWidth
        maxWidth="lg"
        PaperProps={{ sx: { backgroundColor: '#121212' } }}
      >
        <DialogContent sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
          {zoomedImage && (
            <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              {!zoomedImageLoaded && (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="70vh"
                  sx={{
                    borderRadius: 2,
                    bgcolor: '#333',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
              )}
              
              <Box
                component="img"
                src={zoomedImage}
                alt="Zoomed project image"
                onLoad={() => setZoomedImageLoaded(true)}
                sx={{
                  width: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  borderRadius: 2,
                  cursor: 'zoom-out',
                  opacity: zoomedImageLoaded ? 1 : 0,
                  transition: 'opacity 0.3s',
                }}
                onClick={handleCloseZoom}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MyProjectImagesModal