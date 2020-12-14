import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import image from '../img/galeria2.jpg';

const useStyles = makeStyles((theme) => ({
  section: {
      display: 'flex',
      justifyContent:'space-around',
      marginLeft: '8rem',
      marginRight: '1rem',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // margin: 'auto',
    // marginLeft: '5rem',
    maxWidth: 400,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  agregar: {
      backgroundColor: '#FFD900',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Promo 1
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Hamburguesa Completa + Gaseosa
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    <Button className={classes.agregar} variant="outlined">Agregar</Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$200</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>

    
    {/* <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Promo 2
                </Typography>
                <Typography variant="body2" gutterBottom>
                  2 Hamburguesas Completas + Papas Fritas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    <Button className={classes.agregar} variant="outlined">Agregar</Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$300</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div> */}
    </section>
  );
}
