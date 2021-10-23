import React from "react";
import {
  Grid,
  CardMedia,
  CardContent,
  Card,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarsIcon from "@mui/icons-material/Stars";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import dayjs from "dayjs";

import { BoxHeader } from "./style";
const MovieCard = ({ movie, handleRemoveMovie, handleLikeMovie }) => {

  
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card>
        <BoxHeader
          title={movie.title}
          subheader={`Release Date: ${dayjs(movie.release_date).format(
            "MMM D, YYYY"
          )}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            {movie.favorit ?
            <IconButton onClick={()=>{handleRemoveMovie(movie.id)}} aria-label="Remove to favorites">
              <FavoriteIcon color="error" />
            </IconButton>:
            <IconButton onClick={()=>{handleLikeMovie(movie.id)}} aria-label="Add from favorites">
            <FavoriteBorderIcon />
          </IconButton>
            }
            <Badge color="secondary" badgeContent={movie.vote_average}>
              <StarsIcon />
            </Badge>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default MovieCard;
