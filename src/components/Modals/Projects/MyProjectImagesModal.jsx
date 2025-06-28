// MyProjectImagesModal.jsx
import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, Box, Typography } from '@mui/material'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

// Dynamically import all images in your project folder
const imagesMap = import.meta.glob('../../../assets/images/Projects/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

const MyProjectImagesModal = ({ open, images = [], onClose, projectFolder = '' }) => {
  const [zoomedImage, setZoomedImage] = useState(null)
  const { t } = useTranslation('projects')

  // Resolve image paths
  const resolvedImages = images.map((imgName) => {
    const match = Object.keys(imagesMap).find((key) => key.includes(`/${projectFolder}/${imgName}`))
    return imagesMap[match]
  })

  console.log(imagesMap)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      {/* Main Modal */}
      <Dialog open={open} onClose={onClose} PaperProps={{ sx: { background: "#202020" } }}>
        <DialogTitle sx={{ color: 'white' }}>{t('projectsImages')}</DialogTitle>
        <DialogContent sx={{ overflow: "hidden", mx:1 }}>
          {resolvedImages.length === 0 ? (
            <Typography color="gray">{t('noAddedImages')}</Typography>
          ) : (
            <Slider {...sliderSettings}>
              {resolvedImages.map((src, i) => (
                <Box
                  key={i}
                  component="img"
                  src={src}
                  onClick={() => setZoomedImage(src)}
                  sx={{
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
              ))}
            </Slider>
          )}
        </DialogContent>
      </Dialog>

      {/* Zoom Modal */}
      <Dialog
        open={!!zoomedImage}
        onClose={() => setZoomedImage(null)}
        fullWidth
        maxWidth="lg"
        PaperProps={{ sx: { backgroundColor: '#121212' } }}
      >
        <DialogContent sx={{ display: 'flex', justifyContent: 'center' }}>
          {zoomedImage && (
            <Box
              component="img"
              src={zoomedImage}
              sx={{
                width: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 2,
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MyProjectImagesModal
