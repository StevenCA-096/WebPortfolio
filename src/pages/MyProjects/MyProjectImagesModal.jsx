import { Dialog, DialogContent, DialogTitle, Grid2, Modal, Typography } from '@mui/material'
import React from 'react'

const MyProjectImagesModal = ({ open, images, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} PaperProps={{sx:{background:"#202020"}}}>
            <DialogTitle >
                Imagenes del proyecto
            </DialogTitle>
            <DialogContent >
                <Grid2>
                    <Typography color='red'>
                        No added images
                    </Typography>
                </Grid2>
            </DialogContent>
        </Dialog>
    )
}

export default MyProjectImagesModal