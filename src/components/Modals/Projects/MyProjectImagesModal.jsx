// MyProjectImagesModal.jsx
import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, Box, Typography } from '@mui/material'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

// AF-Website images
import afHomeDesktopColored from '@project-images/AF-Website/desktop/home-colored.png'
import afHomeMobileColored from '@project-images/AF-Website/mobile/home-colored.png'
import afClaimsDesktop from '@project-images/AF-Website/desktop/claims.png'

// CTPHojancha images  
import ctpDashboardDesktop from '@project-images/CTPHojancha/desktop/dashboard.png'
import ctpDashboardMobile from '@project-images/CTPHojancha/mobile/dashboard.png'
import ctpFormDesktop from '@project-images/CTPHojancha/desktop/form.png'
import ctpFormMobile from '@project-images/CTPHojancha/mobile/form.png'

// AF-Platform images  
import afPlatformDesktopDashboard from '@project-images/AF-Platform/desktop/dashboard.png'
import afPlatformDesktopModule from '@project-images/AF-Platform/desktop/module.png'
import afPlatformMobileDashboard from '@project-images/AF-Platform/mobile/dashboard.png'
import afPlatformMobileModule from '@project-images/AF-Platform/mobile/module.png'

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

const MyProjectImagesModal = ({ open, images = [], onClose, projectFolder = '' }) => {
  const [zoomedImage, setZoomedImage] = useState(null)
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
                  <Box
                    component="img"
                    src={src}
                    alt={`Project image ${i + 1}`}
                    onClick={() => setZoomedImage(src)}
                    sx={{
                      width: '100%',
                      objectFit: 'contain',
                      borderRadius: 2,
                      height: 300,
                      cursor: 'zoom-in',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.01)',
                      },
                    }}
                  />
                </Box>
              ))}
            </Slider>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!zoomedImage}
        onClose={() => setZoomedImage(null)}
        fullWidth
        maxWidth="lg"
        PaperProps={{ sx: { backgroundColor: '#121212' } }}
      >
        <DialogContent sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
          {zoomedImage && (
            <Box
              component="img"
              src={zoomedImage}
              alt="Zoomed project image"
              sx={{
                width: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 2,
                cursor: 'zoom-out',
              }}
              onClick={() => setZoomedImage(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MyProjectImagesModal