import {
  Box,
  Tabs,
  Tab,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Container } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { Fade } from "react-awesome-reveal";
import jobs from "../../content/jobs";
import { useMediaQuery } from "@mui/material";
import TabPanel from "./TabPanel";

function Experience({ mode }) {
  const [value, setValue] = React.useState(0);
  const mediumbp = useMediaQuery("(min-width:900px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        maxWidth: "1600px",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        height: "100%",
        mt: {
          xs: "150px",
          sm: "0px",
        },
        mb: '150px'
      }}
      name="experienceSection"
    >
      <Fade cascade="true" damping=".25" triggerOnce="true">
        <Box
          sx={{
            borderBottom: "2px solid",
            borderBottomColor: mode === "dark" ? "#ff6d91" : "#4285F4",
            width: "33%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "clamp(40px, 8vw, 72px)",
              fontWeight: "700",
              letterSpacing: 1.5,
              lineHeight: 1,
              mb: "1rem",
            }}
          >
            Experience
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "inherit",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            maxWidth: "1200px",
            padding: "2rem 0rem",
          }}
        >
          <Tabs
            orientation={mediumbp ? "vertical" : "horizontal"}
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { background: mode === "dark" ? "#ff6d91" : "#4285F4" },
            }}
            sx={{
              borderColor: "divider",
              height: {
                xs: "10%",
                md: "150px",
              },
              width: {
                mediumbp: "100%",
              },
              mb: "1rem",
            }}
          >
            {jobs.map((job, index) => (
              <Tab
                label={job.company}
                id={`tab-${index}`}
                ariaControls={`tabpanel-${index}`}
                sx={{ fontSize: "13px", fontFamily: "Roboto" }}
              />
            ))}
          </Tabs>
          {jobs.map((job, index) => (
            <TabPanel value={value} index={index}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: mode === "dark" ? "#ff6d91" : "#4285F4",
                    fontWeight: "700",
                  }}
                >
                  {job.title}
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>{job.time}</Typography>
                <List>
                  {job.bullets.map((bullet) => (
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon
                          sx={{
                            color: mode === "dark" ? "#ff6d91" : "#4285F4",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText>{bullet}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </TabPanel>
          ))}
        </Box>
      </Fade>
    </Container>
  );
}

export default Experience;
