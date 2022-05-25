import React, { useState, useMemo, createContext } from "react";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getDesignTokens from "./theme/Theme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Navbar mode={mode} setMode={setMode}/>
          <Hero mode={mode} />
          <About mode={mode} />
          <Experience mode={mode}/>
          <Projects mode={mode}/>
          <Contact mode={mode}/>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
