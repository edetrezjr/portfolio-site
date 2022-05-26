import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const sendEmail = () => {
  window.open("mailto: edetrezjr@gmail.com");
};

function Contact({ mode }) {
  return (
    <Container
      sx={{
        maxWidth: "1600px",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        mt: "200px",
        mb: "100px",
      }}
      name="contactSection"
    >
      <Fade cascade="true" damping=".25" triggerOnce="true">
        <Box
          sx={{
            borderBottom: "2px solid",
            borderBottomColor: mode === "dark" ? "#ff6d91" : "#4285F4",
            width: {
              xs: '50%',
              md: '33%'
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
            Contact
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap-reverse", p: "2rem" }}>
          <Box
            sx={{
              width: {
                md: "50%",
                xs: "100%",
              },
              p: '1rem 0rem'
            }}
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon sx={{ fontSize: "32px" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: "20px" }}>
                    Casselberry, FL 32707
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon sx={{ fontSize: "32px" }} />
                </ListItemIcon>
                <ListItemText>
                  <Link
                    href="mailto: edetrezjr@gmail.com"
                    underline="none"
                    color="inherit"
                    sx={{ fontSize: "20px" }}
                  >
                    edetrezjr@gmail.com
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon sx={{ fontSize: "32px" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: "20px" }}>
                    407.616.1222
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Box
              sx={{
                p: "1rem",
                display: "flex",
              }}
            >
              <IconButton
                sx={{ mr: "2rem" }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/edetrezjr/",
                    "_blank"
                  );
                }}
              >
                <Link></Link>
                <LinkedInIcon sx={{ fontSize: "32px", color: mode === "dark" ? "#ff6d91" : "#4285F4" }} />
              </IconButton>
              <IconButton
                sx={{ mr: "2rem" }}
                onClick={() => {
                  window.open("https://github.com/edetrezjr", "_blank");
                }}
              >
                <GitHubIcon sx={{ fontSize: "32px", color: mode === "dark" ? "#ff6d91" : "#4285F4" }} />
              </IconButton>
              <IconButton
                sx={{ mr: "2rem" }}
                onClick={() => {
                  window.open("https://twitter.com/edetrezjr", "_blank");
                }}
              >
                <TwitterIcon sx={{ fontSize: "32px", color: mode === "dark" ? "#ff6d91" : "#4285F4" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                md: "50%",
                xs: "100%",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              pb: {
                xs: "2rem",
                md: "0rem",
              },
              borderBottom: {
                xs: "1px solid",
                md: "none",
              },
              borderBottomColor: {
                xs: mode === "dark" ? "#ff6d91" : "#4285F4",
                md: "none",
              },
            }}
          >
            <Typography sx={{ fontSize: {
              md: '24px',
              xs: '20px'
            }, textAlign: {
              md: "center",
              xs: 'left'
          } }}>
              Whether you'd like to connect about an opportunity, have a
              question, or just want to say hi, my inbox is always open!
            </Typography>
            <Button
              variant="outlined"
              onClick={sendEmail}
              sx={{
                color: mode === "dark" ? "#ff6d91" : "#4285F4",
                borderColor: mode === "dark" ? "#ff6d91" : "#4285F4",
                "&:hover": {
                  border: "2px solid",
                  borderColor: mode === "dark" ? "#4285F4" : "#ff6d91",
                  color: mode === "dark" ? "#4285F4" : "#ff6d91",
                },
                width: {
                  md: "33%",
                  xs: '50%'
                },
                border: "2px solid",
                fontFamily: "Roboto",
                fontSize: 'clamp(14px, 3vw, 18px)',
                mt: "2rem",
                p: "auto",
                mb: "1rem",
              }}
            >
              Email me
            </Button>
          </Box>
        </Box>
      </Fade>
    </Container>
  );
}

export default Contact;
