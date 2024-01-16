import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import CountryItem from "../CountryItem";
import classes from "./style.module.scss";
import { callApi } from "../../domain/api";

const CountryList = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await callApi("/all", "GET");

        const limitedResponse = response?.slice(0, 20);

        const modifiedData = limitedResponse?.map((data) => {
          return {
            key: data.altSpellings[0],
            flags: data.flags,
            name: data.name,
            population: data.population,
            region: data.region,
            capital: data.capital,
          };
        });

        setCountryList(modifiedData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={10} className={classes.container__grid}>
      {countryList &&
        countryList.map((data) => {
          return (
            <Grid
              item
              key={data.key}
              xs={3}
              className={classes.container__grid_item}
            >
              <CountryItem
                name={data.name.common}
                img={data.flags}
                population={data.population}
                region={data.region}
                capital={data.capital}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CountryList;
