import { Box, Container, Typography, Button } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Resume from "../../assets/Edwin_Detrez_Resume_SoftwareEngineer.pdf";

function Hero({ mode }) {
  // const openResume = () => {
  //   window.open(Resume, '_blank')
  // }

  return (
    <Container
      sx={{
        maxWidth: "1600px",
        padding: "1rem",
        height: "100%",
        display: "flex",
        alignItems: "center",
        m: "200px auto",
      }}
      name="heroSection"
    >
      <Fade triggerOnce="true">
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "clamp(18px, 3vw, 20px)",
              lineHeight: 1,
              mb: "1.5rem",
            }}
          >
            Hi, my name is
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "clamp(40px, 8vw, 80px)",
              fontWeight: "700",
              letterSpacing: 1.5,
              lineHeight: 1,
              mb: "1.5rem",
            }}
          >
            Edwin Detrez.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "clamp(40px, 8vw, 64px)",
              fontWeight: "700",
              letterSpacing: 1.5,
              lineHeight: 1,
              mb: "1.5rem",
            }}
          >
            I develop creative solutions.
          </Typography>
          <Typography
            sx={{
              fontSize: "clamp(18px, 2vw, 20px)",
              fontFamily: "Roboto",
              maxWidth: "640px",
            }}
          >
            I'm a full stack software engineer specializing in creative
            problem-solving and innovative solutions. I'm currently mentoring
            software engineering students in full stack development and adding
            to my repertoire of skills.
          </Typography>
          <Button
            variant="outlined"
            href={Resume}
            target="_blank"
            sx={{
              color: mode === "dark" ? "#ff6d91" : "#4285F4",
              borderColor: mode === "dark" ? "#ff6d91" : "#4285F4",
              "&:hover": {
                border: "2px solid",
                borderColor: mode === "dark" ? "#4285F4" : "#ff6d91",
                color: mode === "dark" ? "#4285F4" : "#ff6d91",
              },
              border: "2px solid",
              fontFamily: "Roboto",
              fontSize: "22px",
              mt: "2rem",
              pl: "25px",
              pr: "25px",
            }}
          >
            Resume
            <OpenInNewIcon sx={{ ml: "5px" }} />
          </Button>
        </Box>
      </Fade>
    </Container>
  );
}

export default Hero;
