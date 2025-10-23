// src/components/ThemeToggle.tsx
import { IconButton } from '@mui/material';
import { useThemeContext } from '../../context/ThemeContext';
import { DarkMode, LightMode } from '@mui/icons-material';
import { motion } from 'framer-motion';

function ThemeToggle() {
    const { setTheme, theme } = useThemeContext();

    const handleToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <IconButton 
            onClick={handleToggle} 
            color="inherit"
            sx={{ position: 'relative' }}
        >
            <motion.div
                initial={{ scale: 1, rotate: 0 }}
                animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: theme === 'dark' ? 0 : 180 
                }}
                transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                {theme === 'dark' ? <DarkMode /> : <LightMode />}
            </motion.div>
        </IconButton>
    );
}

export default ThemeToggle;