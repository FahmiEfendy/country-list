import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField } from "@mui/material";

import classes from "./style.module.scss";

const InputField = ({ setValue }) => {
  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box className={classes.container}>
      <TextField
        elevation={3}
        fullWidth
        placeholder="Search for a country..."
        onChange={(e) => inputChangeHandler(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default InputField;
