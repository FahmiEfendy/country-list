import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, createTheme } from "@mui/material";

import Navbar from "./components/Navbar";

function App({ router }) {
  const [lightMode, setLightMode] = useState(true);

  const toggleLightModeHandler = () => {
    setLightMode(!lightMode);
  };

  const theme = createTheme({
    palette: {
      mode: lightMode ? "light" : "dark",
      background: {
        default: lightMode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            backgroundColor: lightMode
              ? "hsl(0, 0%, 100%)"
              : "hsl(209, 23%, 22%)",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: lightMode
              ? "hsl(0, 0%, 100%)"
              : "hsl(209, 23%, 22%)",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: lightMode
              ? "hsl(0, 0%, 100%)"
              : "hsl(209, 23%, 22%)",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: lightMode
              ? "hsl(0, 0%, 100%)"
              : "hsl(209, 23%, 22%)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: lightMode ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: lightMode ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onClick={toggleLightModeHandler} />
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
