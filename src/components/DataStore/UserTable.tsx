import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
  IconButton,
  Box,
  Collapse,
  Chip,
  Stack,
  TextField,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import StorageIcon from "@mui/icons-material/Storage";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";


import { rows } from "../../mockData/userData";

export default function UserTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [openQueryRow, setOpenQueryRow] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const handleQueryToggle = (index: number) => {
    setOpenQueryRow(openQueryRow === index ? null : index);
  };

  const renderClassificationChip = (classification: string) => {
    switch (classification) {
      case "PCI":
        return (
          <Chip
            icon={<StorageIcon />}
            label="PCI"
            size="small"
            sx={{
              fontWeight: 500,
              backgroundColor: "#ffebee",
              color: "#c62828",
            }}
          />
        );
      case "Sensitive":
        return (
          <Chip
            icon={<PersonIcon />}
            label="Sensitive"
            size="small"
            sx={{
              fontWeight: 500,
              backgroundColor: "#fffde7",
              color: "#f9a825",
            }}
          />
        );
      case "Financial":
        return (
          <Chip
            icon={<SettingsIcon />}
            label="Financial"
            size="small"
            sx={{
              fontWeight: 500,
              backgroundColor: "#e8f5e9",
              color: "#2e7d32",
            }}
          />
        );
      default:
        return (
          <Chip label={classification} size="small" sx={{ fontWeight: 500 }} />
        );
    }
  };

  const renderStatusChip = (status: string) => {
    return (
      <Chip
        label={status}
        size="small"
        sx={{
          fontWeight: 600,
          backgroundColor: status === "Success" ? "#e8f5e9" : "#ffebee",
          color: status === "Success" ? "#2e7d32" : "#c62828",
        }}
      />
    );
  };

  const renderSeverityChip = (severity: string) => {
    switch (severity) {
      case "High":
        return (
          <Chip
            label="High"
            size="small"
            sx={{
              fontWeight: 600,
              backgroundColor: "#ffebee",
              color: "#c62828",
            }}
          />
        );
      case "Moderate":
        return (
          <Chip
            label="Moderate"
            size="small"
            sx={{
              fontWeight: 600,
              backgroundColor: "#fffde7",
              color: "#f9a825",
            }}
          />
        );
      case "Low":
        return (
          <Chip
            label="Low"
            size="small"
            sx={{
              fontWeight: 600,
              backgroundColor: "#e8f5e9",
              color: "#2e7d32",
            }}
          />
        );
      default:
        return <Chip label={severity} size="small" sx={{ fontWeight: 500 }} />;
    }
  };

  return (
    <TableContainer
      elevation={0}
      component={Paper}
      sx={{
        width: 800,
        height: 350,
        paddingTop: "65px",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {["User", "Email", "Role", ""].map((header) => (
              <TableCell key={header} sx={{ height: 42, py: 0 }}>
                <Box display="flex" alignItems="center" height={42}>
                  <Typography variant="subtitle2" fontWeight={505}>
                    {header}
                  </Typography>
                  {header !== "" && (
                    <IconButton size="small" sx={{ p: "4px", ml: 1 }}>
                      <UnfoldMoreIcon
                        fontSize="small"
                        sx={{ transform: "scaleX(1)" }}
                      />
                    </IconButton>
                  )}
                </Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow
                sx={{
                  height: 42,
                  "&:hover": {
                    backgroundColor: "#F8F9FA",
                    "& .hover-icon": { visibility: "visible" },
                  },
                  "&:not(:last-child) td": {
                    borderBottom: "1px solid #EEEEEE",
                  },
                }}
              >
                <TableCell sx={{ py: 0, height: 42 }}>
                  <Typography variant="body2">{row.user}</Typography>
                </TableCell>

                <TableCell sx={{ py: 0, height: 42 }}>
                  <Typography variant="body2">{row.email}</Typography>
                </TableCell>

                <TableCell sx={{ py: 0, height: 42 }}>
                  <Box>
                    <Typography variant="caption" fontWeight={500}>
                      {row.role}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ py: 0, height: 42 }}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton
                      size="small"
                      className="hover-icon"
                      onClick={() => handleToggle(index)}
                      sx={{
                        visibility: "hidden",
                        color: "text.secondary",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      <MonitorHeartIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>

              {/* Collapsible Activity Table */}
              <TableRow>
                <TableCell colSpan={4} sx={{ p: 0, border: 0 }}>
                  <Collapse in={expandedRow === index}>
                    <Box
                      sx={{ m: 1, backgroundColor: "#FAFAFA", borderRadius: 1 }}
                    >
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            {[
                              "Type",
                              "Status",
                              "Classification",
                              "Severity",
                              "Date & Time",
                            ].map((header) => (
                              <TableCell key={header} sx={{ fontWeight: 600 }}>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  height={42}
                                >
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight={505}
                                  >
                                    {header}
                                  </Typography>
                                </Box>
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.activities?.map((activity, idx) => (
                            <React.Fragment key={idx}>
                              <TableRow>
                                <TableCell>
                                  <Box display="flex" alignItems="center">
                                    <IconButton
                                      size="small"
                                      onClick={() => handleQueryToggle(idx)}
                                    >
                                      <KeyboardArrowDownIcon fontSize="small" />
                                    </IconButton>
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                      {activity.type}
                                    </Typography>
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  {renderStatusChip(activity.status)}
                                </TableCell>
                                <TableCell>
                                  <Stack direction="row" spacing={1}>
                                    {Array.isArray(activity.classification)
                                      ? activity.classification.map(
                                          (cls, i) => (
                                            <React.Fragment key={i}>
                                              {renderClassificationChip(
                                                cls.trim()
                                              )}
                                            </React.Fragment>
                                          )
                                        )
                                      : renderClassificationChip(
                                          activity.classification
                                        )}
                                  </Stack>
                                </TableCell>
                                <TableCell>
                                  {renderSeverityChip(activity.severity)}
                                </TableCell>
                                <TableCell>{activity.dateTime}</TableCell>
                              </TableRow>

                              {/* Query Section */}
                              <TableRow>
                                <TableCell colSpan={5} sx={{ p: 0, border: 0 }}>
                                  <Collapse in={openQueryRow === idx}>
                                    <Box
                                      sx={{
                                        m: 2,
                                        p: 2,
                                        backgroundColor: "#f0f4f4",
                                        borderRadius: 1,
                                      }}
                                    >
                                      <Typography
                                        variant="subtitle2"
                                        sx={{ mb: 1 }}
                                      >
                                        Query
                                      </Typography>
                                      <Box sx={{ position: "relative" }}>
                                        <TextField
                                          multiline
                                          minRows={3}
                                          fullWidth
                                          placeholder="code here..."
                                          variant="outlined"
                                          sx={{
                                            "& .MuiOutlinedInput-root": {
                                              backgroundColor: "#fff",
                                            },
                                          }}
                                        />
                                        <IconButton
                                          size="small"
                                          sx={{
                                            position: "absolute",
                                            top: 8,
                                            right: 8,
                                            "&:hover": {
                                              backgroundColor: "transparent",
                                              color: "primary.main",
                                            },
                                          }}
                                          onClick={() =>
                                            console.log("Copy query")
                                          }
                                        >
                                          <ContentCopyIcon fontSize="small" />
                                        </IconButton>
                                      </Box>
                                      {/* Grey divider line and "Show more" */}
                                      <Box
                                        sx={{
                                          borderTop: "1px solid #ccc",
                                          mt: 2,
                                          pt: 1,
                                          textAlign: "center", 
                                        }}
                                      >
                                        <Typography
                                          variant="body2"
                                          color="primary"
                                          sx={{
                                            cursor: "pointer",
                                            display: "inline-flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          Show more
                                          <KeyboardArrowDownIcon
                                            sx={{ ml: 0.5 }}
                                            fontSize="small"
                                          />
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Collapse>
                                </TableCell>
                              </TableRow>
                            </React.Fragment>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
