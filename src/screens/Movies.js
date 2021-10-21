import React, {useState, useEffect} from "react";
import axios, {API} from "../config/axios";
import {Grid, CardMedia, CardContent,Typography, Button, Card, CardActions} from "@mui/material";
function Movies() {
  const [data, setDate] = useState(null)
  useEffect(() => {
    axios.get(API.movies('now_playing'))
    .then(function (response) {
      // handle success
      // debugger
      setDate(response.data.results)
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  console.log(process.env.REACT_APP_THE_MOVIE_DB_KEY)
  }, []);

  if(!data){
    return <h1>loading...</h1>
  }
  return <Grid container spacing={4}>

    
{data.map(movie => (
    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
    <Card
      sx={{
        // height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {movie.title}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  </Grid>
  ))}

  </Grid>;
}

export default Movies;
