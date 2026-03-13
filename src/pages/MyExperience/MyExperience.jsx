import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import ExperienceItem from "./ExperienceItem";
import GradientText from "../../components/Text/GradientText";

const MyExperience = () => {
  const { t } = useTranslation("experience");
  const experience = t("experience", { returnObjects: true });

  return (
    <Container sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        <GradientText variant="h5">
          {t("myExperience")}
        </GradientText>
      </Box>

      <Box
        sx={{
          position: "relative",
          px: { xs: 0, md: 2 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            left: { xs: 18, md: "50%" },
            transform: { xs: "none", md: "translateX(-50%)" },
            width: "3px",
            borderRadius: "999px",
            background: "linear-gradient(180deg, rgba(255,215,0,0.08) 0%, rgba(255,215,0,0.85) 18%, rgba(255,244,187,0.95) 50%, rgba(255,215,0,0.85) 82%, rgba(255,215,0,0.08) 100%)",
          },
        }}
      >
        {experience?.map((exp, index) => (
          <ExperienceItem
            key={`${exp.title}-${exp.startDate}-${index}`}
            number={index}
            title={exp.title}
            description={exp.description}
            align={index % 2 === 0 ? "left" : "right"}
            enterprise={exp?.enterprise}
            startDate={exp?.startDate}
            endDate={exp?.endDate}
          />
        ))}
      </Box>
    </Container>
  );
};

export default MyExperience;
