import React from "react";
import { Box, Typography, Grid2, Container } from "@mui/material";
import { motion } from "framer-motion";
import GradientText from "../../components/Text/GradientText";
import { useTranslation } from "react-i18next";

const Step = ({ number, title, description, align, enterprise, startDate, endDate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <Grid2 container spacing={2} alignItems="center" justifyContent={align === "left" ? "flex-start" : "flex-end"}>
                {align === "right" && <Grid2 item xs={5} ></Grid2>}
                <Grid2 size={5}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Box
                            sx={{
                                height: 32,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            <GradientText>
                                {number + 1}
                            </GradientText>
                        </Box>
                        <Box >
                            <Typography variant="h5" fontWeight="bold">
                                {title}
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {enterprise}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight="bold" fontSize={14}>
                                {`${startDate} - ${endDate}`} 
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" mt={1}>{description}</Typography>
                </Grid2>
                {align === "left" && <Grid2 item xs={5} />}
            </Grid2>
        </motion.div>
    );
};

const MyExperience = () => {
    const { t } = useTranslation('experience')
    const experience = t('experience', { returnObjects: true })
    return (
        <Container>
            <Typography variant="h4" color="white" gutterBottom textAlign="center">
                {t('myExperience')}
            </Typography>

            <Grid2 container spacing={4}>
                <Grid2 size={12}>
                    {
                        experience?.map((exp, index) =>
                            <Step
                                number={index}
                                title={exp.title}
                                description={exp.description}
                                align={index % 2 === 0 ? 'left' : 'right'}
                                enterprise={exp?.enterprise}
                                startDate={exp?.startDate}
                                endDate={exp?.endDate}
                            />
                        )
                    }
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default MyExperience;
