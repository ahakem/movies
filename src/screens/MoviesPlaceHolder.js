import React from "react";
import { Grid } from "@mui/material";
import {Skeleton, Card, CardHeader, CardContent} from "@mui/material";
const MoviesPlaceHolder = (props) => {
  return (
    <>
      <h1> Movies List</h1>
      <Grid container spacing={4}>
        {[...Array(8)].map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card sx={{ m: 2 }}>
              <CardHeader
                title={
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                }
                subheader={
                  <Skeleton animation="wave" height={10} width="40%" />
                }
              />
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />

              <CardContent>
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MoviesPlaceHolder;
