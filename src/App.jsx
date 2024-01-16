import { useState } from "react";
import { Container } from "@mui/material";

import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
import CountryList from "./components/CountryList";

function App() {
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue);

  return (
    <>
      <Navbar />
      <Container maxWidth={false}>
        <InputField setValue={setSearchValue} />
        {/* <CountryList /> */}
      </Container>
    </>
  );
}

export default App;
