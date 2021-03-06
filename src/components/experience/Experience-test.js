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
import jobs from "../../content/jobs";
import { useMediaQuery } from "@mui/material";
import TabPanel from "./TabPanel";


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

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
        height: "75vh",
        mt: {
          xs: '5rem',
          sm: '0rem',
        }
      }}
      name="experienceSection"
    >
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
          TabIndicatorProps={{ style: { background: mode === "dark" ? "#ff6d91" : "#4285F4" } }}
          sx={{
            borderColor: "divider",
            height: {
              xs: "10%",
              md: "150px",
            },
            width: {
              mediumbp: "100%",
            },
            mb: '1rem'
          }}
        >
          <Tab
            label="Fullstack Academy"
            sx={{ fontSize: "13px", fontFamily: "Roboto" }}
            {...a11yProps(0)}
          />
          <Tab
            label="US Air Force"
            sx={{ fontSize: "13px", fontFamily: "Roboto" }}
            {...a11yProps(1)}
          />
          <Tab
            label="Addition Financial"
            sx={{ fontSize: "13px", fontFamily: "Roboto" }}
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          {jobs.map((job) => (
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
                        sx={{ color: mode === "dark" ? "#ff6d91" : "#4285F4" }}
                      />
                    </ListItemIcon>
                    <ListItemText>{bullet}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Container>
  );
}

export default Experience;
