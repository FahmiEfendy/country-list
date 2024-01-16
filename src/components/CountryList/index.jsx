import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import CountryItem from "../CountryItem";
import classes from "./style.module.scss";
import { callApi } from "../../domain/api";
import { useNavigate } from "react-router-dom";

const CountryList = ({ region, searchValue }) => {
  const navigate = useNavigate();

  const [countryList, setCountryList] = useState([]);
  const [countryListByName, setCountryListByName] = useState([]);
  const [countryListByRegion, setCountryListByRegion] = useState([]);

  const countryDetailHandler = (id) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    const getAllCountries = async () => {
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

    getAllCountries();
  }, []);

  useEffect(() => {
    const getCountriesByName = async () => {
      let limitedResponse;

      try {
        const response = await callApi(`/name/${searchValue}`);

        if (response.length > 0) limitedResponse = response?.slice(0, 20);

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

        setCountryListByName(modifiedData);
        setCountryListByRegion([]);
      } catch (err) {
        console.log(err.message);
        setCountryListByName([]);
      }
    };

    searchValue !== "" && getCountriesByName();
  }, [searchValue]);

  useEffect(() => {
    const getCountriesByRegion = async () => {
      try {
        const response = await callApi(`/region/${region}`);

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

        setCountryListByRegion(modifiedData);
        setCountryListByName([]);
      } catch (err) {
        console.log(err.message);
        setCountryListByRegion([]);
      }
    };

    region !== "" && getCountriesByRegion();
  }, [region]);

  return (
    <Grid container spacing={10} className={classes.container__grid}>
      {searchValue === "" &&
        region === "" &&
        countryList?.map((data) => {
          return (
            <Grid
              item
              key={data.key}
              xs={3}
              className={classes.container__grid_item}
              onClick={() => {
                countryDetailHandler(data.name.common);
              }}
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
      {searchValue !== "" ? (
        countryListByName.length > 0 ? (
          countryListByName?.map((data) => {
            return (
              <Grid
                item
                key={data.key}
                xs={3}
                className={classes.container__grid_item}
                onClick={() => {
                  countryDetailHandler(data.name.common);
                }}
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
          })
        ) : (
          <h2>No result found for search '{searchValue}'</h2>
        )
      ) : (
        ""
      )}
      {region !== "" ? (
        countryListByRegion.length > 0 ? (
          countryListByRegion?.map((data) => {
            return (
              <Grid
                item
                key={data.key}
                xs={3}
                className={classes.container__grid_item}
                onClick={() => {
                  countryDetailHandler(data.name.common);
                }}
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
          })
        ) : (
          <h2>No result found for region {region}</h2>
        )
      ) : (
        ""
      )}
    </Grid>
  );
};

export default CountryList;
