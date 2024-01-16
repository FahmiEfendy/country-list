import NightsStayIcon from "@mui/icons-material/NightsStay";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import classes from "./style.module.scss";

const Navbar = ({ onClick }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Where in the world?
          </Typography>
          <Button startIcon={<NightsStayIcon />} onClick={onClick}>
            Dark Mode
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
