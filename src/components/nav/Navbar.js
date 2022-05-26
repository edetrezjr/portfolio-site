import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Typography,
  Container,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloseIcon from "@mui/icons-material/Close";
import { ColorModeContext } from "../../App";
import { useTheme } from "@mui/material/styles";
import * as Scroll from "react-scroll";
import Resume from "../../assets/Edwin_Detrez_Resume_SoftwareEngineer.pdf";

function Navbar({ mode, setMode }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const openResume = () => {
    window.open(Resume, "_blank");
  };

  const handleScroll = (section) => {
    const scroller = Scroll.scroller;
    scroller.scrollTo(section, {
      duration: 500,
      smooth: "easeInOutQuad",
      offset: -150,
    });
    handleDrawerClose();
  };

  return (
    <AppBar elevation={0} position="sticky" color="inherit">
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 50px",
          }}
        >
          <Button color='inherit' onClick={() => handleScroll('heroSection')}>
            <Typography sx={{color: mode === "dark" ? "#ff6d91" : "#4285F4", fontSize: '24px', fontWeight: '700'}}>ED</Typography>
          </Button>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{ margin: "0rem 0.5rem" }}
              color="inherit"
              onClick={() => {
                handleScroll("aboutSection");
              }}
            >
              About
            </Button>
            <Button
              sx={{ margin: "0rem 0.5rem" }}
              color="inherit"
              onClick={() => {
                handleScroll("experienceSection");
              }}
            >
              Experience
            </Button>
            <Button
              sx={{ margin: "0rem 0.5rem" }}
              color="inherit"
              onClick={() => {
                handleScroll("workSection");
              }}
            >
              Work
            </Button>
            <Button
              sx={{ margin: "0rem 0.5rem" }}
              color="inherit"
              onClick={() => {
                handleScroll("contactSection");
              }}
            >
              Contact
            </Button>
            <Button
              sx={{ margin: "0rem 0.5rem" }}
              color="inherit"
              variant="outlined"
              onClick={() => {openResume()}}
            >
              Resume
            </Button>
            <Button
              sx={{ margin: "0rem 0.5rem" }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <WbSunnyIcon />
              ) : (
                <NightsStayIcon />
              )}
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="open drawer"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              sx={{ width: 250, flexShrink: 0 }}
              anchor="right"
              open={drawerOpen}
            >
              <Box>
                <IconButton onClick={handleDrawerClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Divider />
              <Box
                sx={{ display: "flex", flexDirection: "column", width: 250 }}
              >
                <Button
                  sx={{
                    padding: "auto",
                    margin: "20px auto",
                    width: "50%",
                    height: "50%",
                  }}
                  color="inherit"
                  onClick={() => {
                    handleScroll("aboutSection");
                  }}
                >
                  About
                </Button>
                <Button
                  sx={{
                    padding: "auto",
                    margin: "20px auto",
                    width: "50%",
                    height: "50%",
                  }}
                  color="inherit"
                  onClick={() => {
                    handleScroll("experienceSection");
                  }}
                >
                  Experience
                </Button>
                <Button
                  sx={{
                    padding: "auto",
                    margin: "20px auto",
                    width: "50%",
                    height: "50%",
                  }}
                  color="inherit"
                  onClick={() => {
                    handleScroll("workSection");
                  }}
                >
                  Work
                </Button>
                <Button
                  sx={{
                    padding: "auto",
                    margin: "20px auto",
                    width: "50%",
                    height: "50%",
                  }}
                  color="inherit"
                  onClick={() => {
                    handleScroll("contactSection");
                  }}
                >
                  Contact
                </Button>
                <Button
                  sx={{
                    padding: "auto",
                    margin: "20px auto",
                    width: "50%",
                    height: "50%",
                  }}
                  color="inherit"
                  variant="outlined"
                  onClick={() => {openResume()}}
                >
                  Resume
                </Button>
                <Button
                  sx={{ padding: "20px 0px" }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <WbSunnyIcon />
                  ) : (
                    <NightsStayIcon />
                  )}
                </Button>
              </Box>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
