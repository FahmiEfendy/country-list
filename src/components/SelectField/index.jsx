import { FormControl, MenuItem, Select } from "@mui/material";

import classes from "./style.module.scss";

const SelectField = ({ value, setValue }) => {
  const selectChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormControl className={classes["form-control"]}>
      <Select
        displayEmpty
        value={value}
        placeholder="Filter by Region"
        onChange={selectChangeHandler}
      >
        <MenuItem value="" disabled>
          Filter by Region
        </MenuItem>
        <MenuItem value="africa">Africa</MenuItem>
        <MenuItem value="america">America</MenuItem>
        <MenuItem value="asia">Asia</MenuItem>
        <MenuItem value="europe">Europe</MenuItem>
        <MenuItem value="oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectField;
