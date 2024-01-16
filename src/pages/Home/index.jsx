import { useState } from "react";
import { Container } from "@mui/material";

import classes from "./style.module.scss";
import InputField from "../../components/InputField";
// import CountryList from "../components/CountryList";
import SelectField from "../../components/SelectField";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("");

  console.log("Search Value", searchValue);
  console.log("Region", region);

  return (
    <Container maxWidth={false} className={classes.container}>
      <InputField setValue={setSearchValue} />
      <SelectField value={region} setValue={setRegion} />
      {/* <CountryList /> */}
    </Container>
  );
};

export default Home;
