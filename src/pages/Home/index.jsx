import { useState } from "react";
import { Box, Container } from "@mui/material";

import classes from "./style.module.scss";
import InputField from "../../components/InputField";
import CountryList from "../../components/CountryList";
import SelectField from "../../components/SelectField";

const Home = () => {
  const [region, setRegion] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container maxWidth={false} className={classes.container}>
      <Box className={classes.box}>
        <InputField setValue={setSearchValue} />
        <SelectField value={region} setValue={setRegion} />
      </Box>
      <CountryList region={region} searchValue={searchValue} />
    </Container>
  );
};

export default Home;
