import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Chip, Container, Grid, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import classes from "./style.module.scss";
import { callApi } from "../../domain/api";

const CountryDetail = () => {
  const navigate = useNavigate();

  const { name } = useParams();

  const [countryDetail, setCountryDetail] = useState([]);

  useEffect(() => {
    const getCountryDetail = async () => {
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

        setCountryDetail(modifiedData[0]);
      } catch (err) {
        console.log(err.message);
      }
    };

    name !== "" && getCountryDetail();
  }, [name]);

  return (
    <Container maxWidth={false} className={classes.container}>
      <Button
        startIcon={<KeyboardBackspaceIcon />}
        className={classes.back_btn}
        sx={{ boxShadow: 5 }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Grid container className={classes.containner__inner}>
        <Grid item xs={6}>
          <img
            src={countryDetail?.img?.png}
            alt={countryDetail?.img?.alt}
            className={classes.countryImg}
          />
        </Grid>
        <Grid item xs={6} className={classes.container__right}>
          <Grid container spacing={2}>
            {/* Row 1 */}
            <Grid item xs={12}>
              <Typography variant="h5">
                {countryDetail?.name?.common}
              </Typography>
            </Grid>

            {/* Row 2 */}
            <Grid item xs={6}>
              {/* TODO: Display Native Name */}
              <Typography variant="body2">
                <b>Native Name:</b>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <b>Top Level Domain:</b> {countryDetail?.domain}
              </Typography>
            </Grid>

            {/* Row 3 */}
            <Grid item xs={6}>
              {/* TODO: Format Number */}
              <Typography variant="body2">
                <b>Population:</b> {countryDetail?.population}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {/* TODO: Display Currencies */}
              <Typography variant="body2">
                <b>Currencies:</b>
              </Typography>
            </Grid>

            {/* Row 4 */}
            <Grid item xs={6}>
              <Typography variant="body2">
                <b>Region:</b> {countryDetail?.region}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {/* TODO: Display Languages */}
              <Typography variant="body2">
                <b>Languages:</b>
              </Typography>
            </Grid>

            {/* Row 5 */}
            <Grid item xs={12}>
              <Typography variant="body2">
                <b>Sub Region:</b> {countryDetail?.subRegion}
              </Typography>
            </Grid>

            {/* Row 6 */}
            <Grid item xs={12}>
              <Typography variant="body2">
                <b>Capital:</b> {countryDetail?.capital}
              </Typography>
            </Grid>

            {/* Row 7 */}
            <Grid item xs={12} className={classes.last__row}>
              <Typography variant="body2">
                <b>Border Countries:</b>
              </Typography>
              {countryDetail?.borders?.map((data) => {
                console.log(data);
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
  );
};

export default CountryDetail;
