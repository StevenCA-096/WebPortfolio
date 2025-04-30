import { Box, Grid2, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GradientText from "../../components/Text/GradientText";

const ExperienceItem = ({ number, title, description, align, enterprise, startDate, endDate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <Grid2
                container
                spacing={2}
                mt={{ xs: 2, md: 0 }}
                alignItems="center"
                justifyContent={align === "left" ? "flex-start" : "flex-end"}
            >
                {align === "right" && <Grid2 item xs={5} />}
                <Grid2 size={{ xs: 12, md: 5 }}>
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
                        <Box width={{ xs: '60%', md: '70%' }}>
                            <Typography variant="h5" fontWeight="bold">
                                {title}
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {enterprise}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight="bold" fontSize={12}>
                                {`${startDate}`}
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" fontSize={12}>
                                {`${endDate}`}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" mt={1}>{description}</Typography>
                </Grid2>
                {align === "left" && <Grid2 xs={5} />}
            </Grid2>
        </motion.div>
    );
};

export default ExperienceItem