import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import CodeIcon from "@mui/icons-material/Code";
import profile from "../../assets/ProfilePic.png";

function About({ mode }) {
  const stack = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
  ];

  return (
    <Container
      sx={{
        maxWidth: "1600px",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        m: '150px auto'
      }}
      name="aboutSection"
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
            About
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: {
                md: "50%",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontFamily: "Roboto",
                maxWidth: "1000px",
                m: "1.5rem auto 0.75rem auto",
              }}
            >
              Hi, I’m Edwin and I create solution-based software and web
              applications. I believe in the power of programming to change
              lives, inspire creativity, and empower people around the world.
              I'm interested in pursuing full stack, front-end, or back-end
              roles where my contributions make a positive impact.
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontFamily: "Roboto",
                maxWidth: "1000px",
                m: "0.75rem auto",
              }}
            >
              I'm a software engineering graduate of Fullstack Academy. Prior to
              becoming a software engineer, I was a Cybersecurity Flight
              Commander in the United States Air Force. The squadron I lead
              developed secure software and interfaces, using innovative tech
              like AR/VR, to train Space and Missile Operators. I'm currently a
              Software Engineering Mentor at Fullstack Academy, teaching student
              engineers full stack development using Javascript, React, Node,
              Express, and PostgreSQL!
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontFamily: "Roboto",
                maxWidth: "1000px",
                m: "0.75rem auto",
              }}
            >
              Here's the tech stack I've been working with recently:
            </Typography>
            <List
              sx={{
                maxWidth: "1000px",
                height: "120px",
                m: "auto",
                display: "flex",
                flexFlow: "column wrap",
              }}
            >
              <Fade cascade="true" damping=".25" triggerOnce="true">
                {stack.map((item) => (
                  <ListItem sx={{ padding: "0px 16px" }}>
                    <ListItemIcon>
                      <CodeIcon
                        style={{
                          color: mode === "dark" ? "#ff6d91" : "#4285F4",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </Fade>
            </List>
          </Box>
          <Box
            sx={{
              width: {
                lg: "50%",
                md: "50%",
                sm: "100%",
              },
              display: "flex",
              justifyContent: "center",
              mt: {
                md: "5rem",
                xs: "2rem",
              },
            }}
          >
            <Box
              sx={{
                width: { xs: "150px", md: "300px" },
                height: { xs: "150px", md: "300px" },
              }}
            >
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={profile}
                alt="profile-pic"
              />
            </Box>
            <Box
              sx={{
                border: "3px solid",
                borderColor: mode === "dark" ? "#ff6d91" : "#4285F4",
                width: { xs: "150px", md: "300px" },
                height: { xs: "150px", md: "300px" },
                zIndex: "-1",
                ml: {
                  md: "-17rem",
                  xs: '-8rem',
                },
                mt: {
                  md: "2rem",
                  xs: "1.5rem"
              },
              }}
            ></Box>
          </Box>
        </Box>
      </Fade>
    </Container>
  );
}

export default About;
