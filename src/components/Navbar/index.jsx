import NightsStayIcon from "@mui/icons-material/NightsStay";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import classes from "./style.module.scss";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Where in the world?
          </Typography>
          <Button>
            <IconButton>
              <NightsStayIcon />
            </IconButton>
            <Typography>Dark Mode</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
