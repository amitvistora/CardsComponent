import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  styled,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface CardItem {
  name: string;
  logo?: string;
}

const dataSources: CardItem[] = [
  { name: "Databricks Data Intelligence Platform", logo: "Databricks.svg" },
  { name: "Snowflake Cortex AI", logo: "snowflake-logo.svg" },
  { name: "Oracle", logo: "Oracle.png" },
  { name: "Rest API", logo: "rest-api-icon.png" },
  { name: "Salesforce", logo: "Salesforce-Logo.jpeg" },
];

const aiMlCloud: CardItem[] = [
  { name: "Databricks AI Cloud", logo: "Databricks.svg" },
  { name: "Snowflake AI Data Cloud", logo: "snowflake-logo.svg" },
];

const pipelines: CardItem[] = [
  { name: "Airflow", logo: "airflow-logo.svg" },
  { name: "Orchestra", logo: "orchestrate.png" },
  { name: "DBT", logo: "Dbt-Icon.png" },
];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#FBFCFF",
  boxShadow: "none",
  margin: 0,
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
}));

const CompactAccordionSummary = styled(AccordionSummary)(() => ({
  minHeight: "32px !important",
  padding: "0 8px",
  "& .MuiAccordionSummary-content": {
    margin: "0 !important",
    alignItems: "center",
  },
}));

function SourceCard({ name, logo }: { name: string; logo?: string }) {
  return (
    <Paper  //Cards for each source
      elevation={0}
      sx={{
        width: "169.023px",
        height: "95.333px",
        padding: "20px 8px 12px 8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: "1px solid #ccc",
        
      }}
    >
      {logo && (
        <Box
          component="img"
          src={`/images/${logo}`}
          alt={`${name} logo`}
          sx={{ width: "40px", height: "40px", mb: 1 }}
        />
      )}
      <Typography
        variant="body2"
        fontWeight={500}
        sx={{ fontSize: "0.875rem", textAlign: "center" }}
      >
        {name}
      </Typography>
    </Paper>
  );
}

export default function SelectSource({ onClose }: { onClose?: () => void }) {
  const [expandedPanels, setExpandedPanels] = useState({
    datasource: true,
    aimlcloud: false,
    pipelines: false,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanels((prev) => ({ ...prev, [panel]: isExpanded }));
    };

  return (
    <Box  //Main Box container
      sx={{
        width: 980,
        mx: "auto",
        mt: 4,
        backgroundColor: "#FBFCFF",
        position: "relative",
        ml: "auto",
        mr: 2,
        p: 2,
        overflow: "visible",
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: "15px",
          left: "-15px",
          zIndex: 10,
          backgroundColor: "#f5f5fd",
          border: "0.8px solid #ddd",
          width: 30,
          height: 30,
          
        }}
      >
        <CloseIcon sx={{ fontSize: "1.2rem" }}/>
      </IconButton>

      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 ,pl: "9px"}}>
        <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 530 }}>
          Select a Source
        </Typography>
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          variant="outlined"
          size="small"
          sx={{
            width: 300,
            height: "32px",
            borderRadius: "8px",
            boxShadow: 1,
          }}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1, color: "gray" }} />,
            sx: { height: "32px", padding: "0 8px" },
          }}
        />
      </Box>

      {/* Data Sources Accordion */}
      <StyledAccordion
        expanded={expandedPanels.datasource}
        onChange={handleAccordionChange("datasource")}
        sx={{ mt: 1 }}
      >
        <CompactAccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.4rem" }} />}
        >
          <Typography variant="subtitle2" fontWeight={450} sx={{ mr: 1 }}>
            DATA SOURCES
          </Typography>
          <Box sx={{ flex: 1, borderBottom: "1px solid #ccc", mr: 1 }} />
        </CompactAccordionSummary>
        <AccordionDetails sx={{ p: 1 }}>
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 1.8 }}>
            {dataSources
              .filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, idx) => (
                <SourceCard key={idx} name={item.name} logo={item.logo} />
              ))}
          </Box>
        </AccordionDetails>
      </StyledAccordion>

      {/* AI/ML Cloud Accordion */}
      <StyledAccordion
        expanded={expandedPanels.aimlcloud}
        onChange={handleAccordionChange("aimlcloud")}
        sx={{ mt: 1 }}
      >
        <CompactAccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.4rem" }} />}
        >
          <Typography variant="subtitle2" fontWeight={450} sx={{ mr: 1 }}>
            AI/ML CLOUD
          </Typography>
          <Box sx={{ flex: 1, borderBottom: "1px solid #ccc", mr: 1 }} />
        </CompactAccordionSummary>
        <AccordionDetails sx={{ p: 1 }}>
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 1.8 }}>
            {aiMlCloud
              .filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, idx) => (
                <SourceCard key={idx} name={item.name} logo={item.logo} />
              ))}
          </Box>
        </AccordionDetails>
      </StyledAccordion>

      {/* Pipelines Accordion */}
      <StyledAccordion
        expanded={expandedPanels.pipelines}
        onChange={handleAccordionChange("pipelines")}
        sx={{ mt: 1 }}
      >
        <CompactAccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.4rem" }} />}
        >
          <Typography variant="subtitle2" fontWeight={450} sx={{ mr: 1 }}>
            PIPELINES
          </Typography>
          <Box sx={{ flex: 1, borderBottom: "1px solid #ccc", mr: 1 }} />
        </CompactAccordionSummary>
        <AccordionDetails sx={{ p: 1 }}>
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 1.8 }}>
            {pipelines
              .filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, idx) => (
                <SourceCard key={idx} name={item.name} logo={item.logo} />
              ))}
          </Box>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  );
}
