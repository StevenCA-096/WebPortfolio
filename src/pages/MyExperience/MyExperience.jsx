import React from "react";
import { Box, Typography, Grid2, Container } from "@mui/material";
import { motion } from "framer-motion";
import GradientText from "../../components/Text/GradientText";
import { useTranslation } from "react-i18next";
import ExperienceItem from "./ExperienceItem";

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
                            <ExperienceItem
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
