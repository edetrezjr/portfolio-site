// import { Container} from "@mui/system";
import {
  Box,
  Container,
  Typography,
  Card,
  IconButton,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import dotGuide from "../../assets/dotGuideSS.png";
import { Fade } from "react-awesome-reveal";

function Projects({ mode }) {
  return (
    <Container
      sx={{
        maxWidth: "1600px",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        height: "75vh",
        mt: {
          xs: "5rem",
          sm: "0rem",
        },
      }}
      name="workSection"
    >
      <Fade cascade="true" damping=".25" triggerOnce="true">
        <Box
          sx={{
            borderBottom: "2px solid",
            borderBottomColor: mode === "dark" ? "#ff6d91" : "#4285F4",
            width: {
              md: "33%",
              xs: "50%",
            },
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
            My Work
          </Typography>
        </Box>
        <Card
          sx={{
            display: "flex",
            flexWrap: "wrap-reverse",
            mt: "2rem",
            backgroundColor: mode === "dark" ? "#202020" : "#fff",
            boxShadow: mode === 'dark' ? 3 : 0,
            border: mode === 'dark' ? '0px' : '1px solid #4285F4'
          }}
        >
          <Box
            sx={{
              width: { md: "50%", xs: "100%" },
              p: {
                md: "1rem 2rem",
                xs: '0rem 2rem 1rem'
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "700",
                mb: "1rem",
                color: mode === "dark" ? "#ff6d91" : "#4285F4",
              }}
            >
              dotGuide
            </Typography>
            <Typography sx={{ mb: "1rem" }}>
              DotGuide is a developer tool for standardizing code structure,
              storing reference code, and creating educational guides in an
              easy-to-follow format. Whether you are an organization looking to
              streamline your developer's best coding practices, or a new
              developer looking to learn, dotGuide has something for everyone!
            </Typography>
            <Box>
              <IconButton
                onClick={() =>
                  window.open("https://github.com/edetrezjr/dotGuide", "_blank")
                }
              >
                <GitHubIcon
                  sx={{
                    fontSize: "32px",
                    color: mode === "dark" ? "#ff6d91" : "#4285F4",
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open("https://readme-c72e5.web.app/", "_blank")
                }
              >
                <OpenInNewIcon
                  sx={{
                    fontSize: "32px",
                    color: mode === "dark" ? "#ff6d91" : "#4285F4",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ width: { md: "50%", xs: "100%" }, p: "1rem" }}>
              <a href="https://readme-c72e5.web.app/" target="_blank">
                <img
                  src={dotGuide}
                  style={{ width: "100%", maxHeight: "100%"}}
                  alt="dotGuide Screenshot"
                />
              </a>
          </Box>
        </Card>
      </Fade>
    </Container>
  );
}

export default Projects;
