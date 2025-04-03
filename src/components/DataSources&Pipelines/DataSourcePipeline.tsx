import React, { useState } from "react";
import { MoreHoriz, FilterList } from "@mui/icons-material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import { AreaChart, Area } from "recharts";

const mockData = [
  {
    title: "Data Source",
    logo: "/images/Databricks.svg",
    mainTech: "Databricks Data Intelligence Platform",
    name: "Newconfiguration1",
    users: 8,
    imports: 13,
    queries: 210,
  },
  {
    title: "Pipeline",
    logo: "/images/airflow-logo.svg",
    mainTech: "Airflow",
    name: "Newconfiguration2",
    users: 5,
    imports: 24,
    queries: 150,
  },
  {
    title: "Pipeline",
    logo: "/images/Dbt-Icon.png",
    mainTech: "DBT",
    name: "Newconfiguration3",
    users: 11,
    imports: 15,
    queries: 155,
  },
  {
    title: "Pipeline",
    logo: "/images/snowflake-logo.svg",
    mainTech: "Snowflake",
    name: "Data Source new 1",
    users: 15,
    imports: 15,
    queries: 210,
  },
  {
    title: "AI/ML cloud",
    logo: "/images/orchestrate.png",
    mainTech: "Orchestra",
    name: "Newconfiguration4",
    users: 2,
    imports: 14,
    queries: 210,
  },
];

const chartData = [
  { name: "Day1", value: 5 },
  { name: "Day2", value: 15 },
  { name: "Day3", value: 12 },
  { name: "Day4", value: 18 },
  { name: "Day5", value: 14 },
];

export const DataSourcePipeline: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(true);

  const filters = [
    { label: "All Data Sources", value: "all" },
    { label: "Data Source", value: "Data Source" },
    { label: "Pipelines", value: "Pipeline" },
    { label: "AI/ML Cloud", value: "AI/ML cloud" },
  ];

  const filteredData = mockData.filter(
    (item) => selectedFilter === "all" || item.title === selectedFilter
  );

  return (
    <Box sx={{ p: 2 }}>
      {/* Outer Container with border */}
      <Box
        sx={{
          position: "relative",
          border: "1px solid #ddd",
          borderRadius: 1,
          p: 3,
          maxWidth: 810,
          backgroundColor: "#FBFCFF",
        }}
      >
        {/* Filter Icon */}
        <IconButton
          onClick={() => setShowFilters(!showFilters)}
          sx={{
            position: "absolute",
            top: "20px",
            left: "-15px",
            zIndex: 10,
            backgroundColor: "#f5f5fd",
            border: "0.8px solid #ddd",
            width: 30,
            height: 30,
          }}
        >
          <FilterList sx={{ fontSize: "1.2rem" }} />
        </IconButton>

        {/* Header with Filters */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 2 }}>
          {showFilters && (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {filters.map((filter) => (
                <Button
                  key={filter.value}
                  variant="outlined"
                  size="small"
                  onClick={() => setSelectedFilter(filter.value)}
                  sx={{
                    textTransform: "none",
                    borderRadius: "20px",
                    minWidth: "80px",
                    height: "25px",
                    fontSize: "0.8rem",
                    lineHeight: 1.2,
                    backgroundColor:
                      selectedFilter === filter.value ? "#ffffff" : "#e6e3e3",
                    color: "#000000",
                    borderColor:
                      selectedFilter === filter.value
                        ? "#1976d2"
                        : "transparent",
                    boxShadow: "none",
                  }}
                >
                  {filter.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>

        {/* Cards Container */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {filteredData.map((item, index) => (
            <Card
              elevation={0}
              key={index}
              sx={{
                minWidth: 806,
                height: 120,
                borderRadius: 2,
                border: "1px solid #ddd",
              }}
            >
              {/* Top Bar */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height={35}
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
                    color: "#626161",
                    bgcolor: "#b7b7b781",
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
                    {item.title}
                  </span>
                </Typography>
                <IconButton size="small" sx={{ p: 0, mr: 2 }}>
                  <MoreHoriz fontSize="small" />
                </IconButton>
              </Box>

              {/* Middle Section: Logo + Tech Info */}
              <Box position="relative">
                <Divider
                  sx={{ position: "absolute", width: "100%", top: "50%" }}
                />
                <Avatar
                  data-testid="info-card-logo"
                  src={item.logo}
                  alt="logo"
                  sx={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translate(0, -50%)",
                    width: 38,
                    height: 38,
                    border: "1px solid #e2dfdf",
                    bgcolor: "background.paper",
                    "& img": {
                      width: 23,
                      height: 23,
                    },
                  }}
                />
              </Box>

              {/* Card Contents */}
              <CardContent sx={{ p: "6px", mt: "17px", ml: "12px" }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  {/* Left Column: Main Tech + Name */}
                  <Box display="flex" flexDirection="column">
                    <Typography variant="body2" color="text.secondary">
                      {item.mainTech}
                    </Typography>
                    <Typography variant="body1" fontWeight={550}>
                      {item.name}
                    </Typography>
                  </Box>

                  {/* Right Column: Users, Imports, Queries */}
                  <Box display="flex" alignItems="center" gap={2} mr={2}>
                    <Box display="flex" alignItems="center" gap={0.4}>
                      <GroupOutlinedIcon
                        fontSize="small"
                        sx={{ color: "text.secondary" }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "0.75rem" }}
                      >
                        {item.users}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={0.4}>
                      <ImportExportOutlinedIcon
                        fontSize="small"
                        sx={{ color: "text.secondary" }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "0.75rem" }}
                      >
                        {item.imports}
                      </Typography>
                    </Box>

                    <Divider orientation="vertical" flexItem />

                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography variant="body2" fontWeight={510}>
                        {item.queries} queries
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        in last 30 days
                      </Typography>
                    </Box>

                    {/* Mini Area Chart */}
                    <Box>
                      <AreaChart
                        width={110}
                        height={43}
                        data={chartData}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id="colorValue"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="25%"
                              stopColor="#5d73c2"
                              stopOpacity={0.65}
                            />
                            <stop
                              offset="70%"
                              stopColor="#5377d1"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#5921c1"
                          strokeWidth={2.5}
                          fill="url(#colorValue)"
                        />
                      </AreaChart>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DataSourcePipeline;
