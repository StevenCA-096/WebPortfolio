import { useTheme } from "@emotion/react";
import { Box, Card, CardContent, Typography, Skeleton } from "@mui/material";

const SkillCard = ({ title = '', icon = <></>, loading = false }) => {
  const theme = useTheme();
  
  if (  loading) {
    return (
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'transparent',
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 0
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 2,
            zIndex: 1,
            mt: 1
          }}
        >
          {/* Skeleton para el icono */}
          <Skeleton 
            variant="rectangular" 
            width={40} 
            height={40} 
            sx={{ 
              borderRadius: 1,
              marginRight: 1 
            }} 
          />
          
          {/* Skeleton para el título */}
          <Skeleton 
            variant="text" 
            width={120} 
            height={24}
            sx={{ 
              fontSize: '1rem' 
            }} 
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 0
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 2,
          zIndex: 1,
          mt: 1
        }}
      >
        <Box 
          component={'img'}
          src={icon}
          sx={{
            objectFit: "contain",
            width: 40
          }}
        />
        <Typography color={theme?.palette?.text?.main} sx={{ marginLeft: 1 }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;