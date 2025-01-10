import { useTheme } from "@emotion/react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const SkillCard = ({ title = '', icon = <></> }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow:0 
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 2,
          zIndex: 1,
          mt:1
        }}
      >
        <Box 
            component={'img'}
            src={icon}
            sx={{
                objectFit:"contain",
                width:40
            }}
        />
        <Typography color={theme?.palette?.text?.main} sx={{ marginLeft: 1 }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard