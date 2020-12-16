import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  productos: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  producto: {
    padding: '40px',
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: '3.5rem',
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
    '&:hover': {
      backgroundColor: '#D8B800',
    }
  },
}))

export default function Cart({ cart, setCart, removePromoCart, removeBurgerCart, removePapasCart, removeBebidasCart }){
  const classes = useStyles();

  return (
    <>
      <div className={classes.productos}>
      {cart.map((producto, index) => (
        <div className={classes.producto} key={index}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img 
              className= {classes.img} 
              alt= {producto.nombre} 
              src= {producto.img} 
            />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {producto.nombre}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {producto.descripcion}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <Button 
                  onClick={() => removePromoCart(producto)}
                  className={classes.agregar} 
                  variant="outlined"
                  >
                  Eliminar
                </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{producto.precio}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div> 
    ))}
    </div>
    </>
  )
}


