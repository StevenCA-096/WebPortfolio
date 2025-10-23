import { Box, Card, CardContent, Chip, Grid2, Stack, Typography, alpha, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import GradientText from "@components/Text/GradientText";
import { WorkOutline, CalendarToday } from "@mui/icons-material";
import useIsDarkMode from "../../hooks/isDarkMode/useIsDarkMode";

const ExperienceItem = ({ number, title, description, align, enterprise, startDate, endDate }) => {
    const theme = useTheme();
    const isDarkMode = useIsDarkMode()
    
    return (
        <motion.div
            initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: number * 0.1 }}
            viewport={{ once: true }}
        >
            <Grid2
                container
                spacing={{ xs: 2, md: 4 }}
                mt={{ xs: 2, md: 0 }}
                alignItems="center"
                justifyContent={align === "left" ? "flex-start" : "flex-end"}
            >
                {/* Spacer para desktop cuando align es right */}
                {align === "right" && <Grid2 size={{ xs: 0, md: 1 }} />}
                
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Card
                        elevation={0}
                        sx={{
                            background: isDarkMode ? `linear-gradient(135deg, 
                                rgba(255, 255, 255, 0.03) 0%, 
                                rgba(255, 255, 255, 0.03) 100%)` : '',
                            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                            borderRadius: 3,
                            position: 'relative',
                            overflow: 'visible',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: `0 12px 40px rgba(255, 215, 0, 0.1)`,
                                border: `1px solid ${alpha('#FFD700', 0.2)}`,
                            },
                            // Línea conectora vertical (solo visible en desktop)
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                [align === "left" ? 'right' : 'left']: -20,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '3px',
                                height: '60%',
                                background: 'linear-gradient(180deg, transparent 0%, #FFD700 50%, transparent 100%)',
                                display: { xs: 'none', md: 'block' },
                                borderRadius: '2px',
                            }
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Stack spacing={2.5}>
                                {/* Header con número y fechas */}
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box display="flex" alignItems="center" gap={2}>
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #FFD700 0%, #FFF4BB 100%)',
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: "bold",
                                                fontSize: '1.2rem',
                                                color: '#000',
                                                boxShadow: `0 4px 12px ${alpha('#FFD700', 0.3)}`,
                                            }}
                                        >
                                            {number + 1}
                                        </Box>
                                        <Chip
                                            icon={<CalendarToday sx={{ fontSize: 16 }} />}
                                            label={`${startDate} - ${endDate}`}
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                borderColor: alpha('#FFD700', 0.3),
                                                color: theme.palette.text.secondary,
                                                '& .MuiChip-icon': {
                                                    color: '#FFD700'
                                                }
                                            }}
                                        />
                                    </Box>
                                </Box>

                                {/* Título y empresa */}
                                <Box>
                                    <GradientText 
                                        fontSize={{ xs: 18, md: 20 }} 
                                        sx={{ 
                                            fontWeight: 700,
                                            lineHeight: 1.3,
                                            mb: 1
                                        }}
                                    >
                                        {title}
                                    </GradientText>
                                    
                                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                                        <WorkOutline sx={{ fontSize: 18, color: '#FFD700' }} />
                                        <Typography 
                                            variant="subtitle1" 
                                            sx={{ 
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                fontSize: '1rem'
                                            }}
                                        >
                                            {enterprise}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Descripción */}
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        lineHeight: 1.7,
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    {description}
                                </Typography>

                                {/* Decoración inferior */}
                                <Box
                                    sx={{
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #FFD700 0%, transparent 100%)',
                                        borderRadius: '1px',
                                        width: '60%',
                                        alignSelf: align === "left" ? 'flex-start' : 'flex-end'
                                    }}
                                />
                            </Stack>
                        </CardContent>

                        {/* Badge flotante para el número de experiencia */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -8,
                                [align === "left" ? 'right' : 'left']: -8,
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${alpha('#FFD700', 0.1)} 100%)`,
                                border: `2px solid #FFD700`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: '#FFD700',
                                }}
                            />
                        </Box>
                    </Card>
                </Grid2>
                
                {/* Spacer para desktop cuando align es left */}
                {align === "left" && <Grid2 size={{ xs: 0, md: 5 }} />}
            </Grid2>
        </motion.div>
    );
};

export default ExperienceItem