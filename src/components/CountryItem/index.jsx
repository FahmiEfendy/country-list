import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import classes from "./style.module.scss";

const CountryItem = ({ name, img, population, region, capital }) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        sx={{ height: 200, width: "100%" }}
        image={img.png}
        title={img.alt}
      />
      <CardContent className={classes.card__content}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">
          <b>Population:</b> {population}
        </Typography>
        <Typography variant="body2">
          <b>Region:</b> {region}
        </Typography>
        <Typography variant="body2">
          <b>Capital:</b> {capital}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryItem;
