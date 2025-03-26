import React, { useMemo } from "react";
import { MoreHoriz } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  IconButton,
  Avatar,
  lighten,
} from "@mui/material";

interface InfoCardProps {
  title: string;
  logo: string;
  mainTech: string;
  name: string;
  addedOn: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  logo,
  mainTech,
  name,
  addedOn,
}) => {
  const rainbowColors = [
    "#FF0000", // Red
    
   
    "#008000", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
   
  ];

  
  const titleBgColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    const baseColor = rainbowColors[randomIndex];
    return lighten(baseColor, 0.3); 
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 350,
        m: 2,
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box position="relative" height={110}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          height={40}
          sx={{ bgcolor: "#f0f4f4" }}
        >
          <Box display="flex" alignItems="center" gap={2} flex={1} />
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              color: "white",
              bgcolor: titleBgColor,
              borderRadius: "50px",
              px: 1.7,
              py: 0.2,
              mr: 2,
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                textAlign: "center",
                width: "100%",
              }}
            >
              {title}
            </span>
          </Typography>
          <IconButton size="small" sx={{ p: 0 }}>
            <MoreHoriz fontSize="small" />
          </IconButton>
        </Box>

        <Divider sx={{ position: "absolute", width: "100%", top: "50%" }} />

        <Avatar
          src={logo}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translate(0, -50%)",
            width: 60,
            height: 60,
            border: "5px solid #fff",
            boxShadow: 2,
            bgcolor: "background.paper",
          }}
        />
      </Box>
      <CardContent sx={{ pt: 1, mt: -2 }}>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body2" color="text.secondary">
            {mainTech}
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            {name}
          </Typography>
          <Typography variant="caption" mt={1} >
            <Box component="span" color="text.secondary">
              Added on
            </Box>
            <br />
            {addedOn}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
