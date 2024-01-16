import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import classes from "./style.module.scss";
import { callApi } from "../../domain/api";

const CountryDetail = () => {
  const navigate = useNavigate();

  const { name } = useParams();

  const [countryDetail, setCountryDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCountryDetail = async () => {
      setIsLoading(true);
      try {
        const response = await callApi(`/name/${name}/?fullText=true`, "GET");

        const modifiedData = response?.map((data) => {
          return {
            key: data.altSpellings[0],
            borders: data.borders,
            capital: data.capital,
            currencies: data.currencies,
            domain: data.tld[0],
            img: data.flags,
            languages: data.languages,
            name: data.name,
            population: data.population,
            region: data.region,
            subRegion: data.subregion,
          };
        });

        setCountryDetail(modifiedData);
      } catch (err) {
        console.log(err.message);
      }
      setIsLoading(false);
    };

    name !== "" && getCountryDetail();
  }, [name]);

  return (
    <React.Fragment>
      {!isLoading ? (
        countryDetail.length > 0 && (
          <Container maxWidth={false} className={classes.container}>
            <Button
              startIcon={<KeyboardBackspaceIcon />}
              className={classes.back_btn}
              sx={{ boxShadow: 5 }}
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Grid container className={classes.container__inner}>
              <Grid item sm={6} xs={12} className={classes.container__left}>
                <img
                  src={countryDetail[0]?.img?.png}
                  alt={countryDetail[0]?.img?.alt}
                  className={classes.countryImg}
                />
              </Grid>
              <Grid item sm={6} xs={12} className={classes.container__right}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {countryDetail[0]?.name?.common}
                    </Typography>
                  </Grid>

                  {/* LEFT */}
                  <Grid item container sm={6} xs={12} rowSpacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        <b>Native Name:</b>{" "}
                        {
                          Object.values(countryDetail[0].name.nativeName)[0]
                            .common
                        }
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        <b>Population:</b>{" "}
                        {countryDetail[0]?.population.toLocaleString()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        <b>Region:</b> {countryDetail[0]?.region}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        <b>Sub Region:</b> {countryDetail[0]?.subRegion}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        <b>Capital:</b> {countryDetail[0]?.capital}
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* RIGHT */}
                  <Grid
                    item
                    container
                    sm={6}
                    xs={12}
                    rowSpacing={2}
                    className={classes.right__text}
                  >
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        <b>Top Level Domain:</b> {countryDetail[0]?.domain}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        <b>Currencies:</b>{" "}
                        {Object.values(countryDetail[0].currencies)[0].name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ height: "100%" }}>
                      <Typography variant="body2">
                        <b>Languages:</b>{" "}
                        {Object.values(countryDetail[0].languages)[0]}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className={classes.last__row}>
                    <Typography variant="body2">
                      <b>Border Countries:</b>
                    </Typography>
                    {countryDetail[0]?.borders?.map((data) => {
                      return (
                        <Chip
                          key={data}
                          label={data}
                          variant="outlined"
                          className={classes.chip}
                        />
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        )
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <CircularProgress sx={{ textAlign: "center" }} />
        </Box>
      )}
    </React.Fragment>
  );
};

export default CountryDetail;
