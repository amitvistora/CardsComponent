import React from "react";
import { MoreHoriz } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  IconButton,
  Avatar,
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
  const titleBgColor =
    title === "Data Source" ? "rgb(68,156,157)" : "rgb(65,121,170)";

  return (
    <Card
     data-testid="info-card"
      variant="outlined"
      sx={{
        minWidth: 383,
        height: 196,
        m: 2,
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)",
        },
      }}
    >   <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    
    height={40}
    sx={{ bgcolor: "#f0f4f4" }}
  >
    <Box display="flex" alignItems="center" gap={2} flex={1} />
    <Typography
      data-testid="info-card-title"
      variant="subtitle1"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 82,
        height: 20,
        fontWeight: 700,
        color: "white",
        bgcolor: titleBgColor,
        borderRadius: "50px",
        cursor: "pointer",
        mr: 2,
      }}
    >
      <span
        style={{
          fontSize: "0.65rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        {title}
      </span>
    </Typography>
    <IconButton data-testid="info-card-menu-button" size="small" sx={{ p: 0, mr: 2 }}>
      <MoreHoriz fontSize="small" />
    </IconButton>
  </Box>

      <Box position="relative">
       

        <Divider sx={{ position: "absolute", width: "100%", top: "50%" }} />

        <Avatar
        data-testid="info-card-logo"
          src={logo}
          alt="logo"
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translate(0, -50%)",
            width: 54,
            height: 54,
            border: "5px solid #a09f9f",
            boxShadow: 2,
            bgcolor: "background.paper",
            "& img": {
              width: 42,
              height: 42,
            },
          }}
        />
      </Box>
      <CardContent sx={{ p: 2, mt: "24px" }}>
        <Box display="flex" flexDirection="column">
          <Typography variant="body2" color="text.secondary">
            {mainTech}
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            {name}
          </Typography>
          <Typography variant="caption" mt={2}>
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
