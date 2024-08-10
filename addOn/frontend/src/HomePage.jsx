/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link } from 'react-admin';

const CardTitle = styled(Typography)(() => ({
  textAlign: 'center',
  fontFamily: 'DK Burobu',
  textTransform: 'uppercase'
}));

const HomePage = () => {
  return (
    <Grid container spacing={2} sx={{ marginY: 2 }}>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="https://flod.io">
            <CardMedia
              component="img"
              height="200px"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "375px", margin: "auto" }}
              image="/images/carto-glocal.png"
              alt="icone-carte"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Carte en réseau
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/Organization?perPage=500&sort=pair%3Alabel&view=map&lat=47.2186353776589&lng=-1.5545654296875002&zoom=10">
            <CardMedia
              component="img"
              height="200px"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "375px", margin: "auto" }}
              image="/images/icone-carte-pays-nantais.png"
              alt="icone-carte"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Carte géographique
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/Organization">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "200px", margin: "auto" }}
              image="/images/icons8-annuaire-200.png"
              alt="icone-annuaire"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Organisations
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/Event">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "200px", margin: "auto" }}
              image="/images/icons8-calendrier-160.png"
              alt="icone-agenda"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Evénements
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/Page/https%3A%2F%2Fdata.flod.io%2Fpages%2Fa-propos/show">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "200px", margin: "auto" }}
              image="/images/transiscope-loupe.png"
              alt="icone-cest-quoi"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Quoi ?
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/person">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "245px", margin: "auto" }}
              image="/images/en-pays-nantais-400x300.png"
              alt="icone-cest-qui"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Qui ?
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomePage;
