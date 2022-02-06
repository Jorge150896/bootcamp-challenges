import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Star from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card sx={{ maxWidth: 345 }} className="container__card">
          <CardContent>
            <div className="container__image">
              <div className="container__image__border">
                <Avatar
                  alt="Remy Sharp"
                  src="https://jorge-vicuna.gitlab.io/jorge-vicuna/static/media/avatar.272f0e79.jpg"
                  sx={{ width: 100, height: 100 }}
                  className="container__card__image"
                />
              </div>
            </div>
            <Typography
              color="secondary"
              StarBorderIcon
              gutterBottom
              variant="h6"
              component="div"
            >
              Jorge Vicuna
            </Typography>
            <div>
              <Star color="secondary" />
              <Star color="secondary" />
              <Star color="secondary" />
              <StarBorderIcon color="secondary" />
              <StarBorderIcon color="secondary" />
            </div>
            <Typography
              variant="body2"
              color="text.secondary"
              className="container__card__text"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="container__card__buttons">
            <Button color="secondary" variant="outlined">
              Read More
            </Button>

            <Button color="secondary" variant="contained">
              Contact
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
