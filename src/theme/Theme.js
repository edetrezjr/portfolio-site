const getDesignTokens = (mode) => ({
  palette: {
    mode,
    background: {
      ...(mode === "light"
        ? {
            default: "#fff",
          }
        : {
            default: "#1b1b1b",
          }),
    },
    text: {
      ...(mode === "light"
        ? {
            primary: "#000",
          }
        : {
            primary: "#fff",
          }),
    },
  },
  components: {
    mode,
    MuiAppBar: {
      ...(mode === "dark"
        ? {
            styleOverrides: {
              colorInherit: {
                backgroundColor: "#1b1b1b",
              },
            },
          }
        : {
            styleOverrides: {
              colorInherit: {
                backgroundColor: "#fff",
              },
            },
          }),
    },
    MuiTab: {
      ...(mode === "dark"
        ? {
            styleOverrides: {
              root: {
                "&.Mui-selected": {
                  color: "#ff6d91",
                },
              },
            },
          }
        : {
            styleOverrides: {
              root: {
                "&.Mui-selected": {
                  color: "#4285F4",
                },
              },
            },
          }),
    },
    // MuiButton: {
    //   ...(mode === "dark"
    //     ? {
    //         styleOverrides: {
    //           root: {
    //             fontSize: "1rem",
    //           },
    //         },
    //       }
    //     : {}),
    // },
  },
});

export default getDesignTokens;
