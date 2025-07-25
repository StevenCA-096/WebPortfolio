import { Download } from "@mui/icons-material"
import { Button, Box, alpha, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

// Importa los CVs por idioma desde assets
import cvEN from '../../../assets/documents/Steven_Andres_Cordero_Alvarez_Resume.pdf'
import cvES from '../../../assets/documents/Steven_Andres_Cordero_Alvarez_Resume.pdf'

const DownloadCv = () => {
    const { t, i18n } = useTranslation('home')

    // Función para descargar el CV según idioma
    const handleDownload = () => {
        // Seleccionar CV según idioma actual
        const cvFile = i18n.language === 'en' ? cvEN : cvES
        const fileName = i18n.language === 'en' ? 'Steven_Cordero_CV_EN.pdf' : 'Steven_Cordero_CV_ES.pdf'
        
        // Crear enlace temporal y descargar
        const link = document.createElement('a')
        link.href = cvFile
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Button
                onClick={handleDownload}
                startIcon={<Download />}
                sx={{
                    background: `linear-gradient(135deg, ${alpha('#FFD700', 0.9)} 0%, ${alpha('#FFA500', 0.8)} 100%)`,
                    color: '#000',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    textTransform: 'none',
                    border: `2px solid ${alpha('#FFD700', 0.3)}`,
                    boxShadow: `0 4px 15px ${alpha('#FFD700', 0.3)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: `linear-gradient(135deg, ${alpha('#FFD700', 1)} 0%, ${alpha('#FFA500', 0.9)} 100%)`,
                        boxShadow: `0 6px 20px ${alpha('#FFD700', 0.4)}`,
                        transform: 'translateY(-2px)'
                    },
                    '&:active': {
                        transform: 'translateY(0)'
                    }
                }}
            >
                {t('downloadCv')}
            </Button>
        </motion.div>
    )
}

export default DownloadCv