import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import DeleteIcon from '@material-ui/icons/Delete';

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
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  total: {
    marginTop: '1rem',
    marginBottom: '1rem',
    // marginLeft: '30rem',
    // marginRight: '30rem',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '10px',
    padding: '0.5rem',
    border: '1.5px solid #eb5e30',
  },
}))

export default function Cart({ cart, clearCart, removePromoCart, removeBurgerCart, removePapasCart, removeBebidasCart }){
  const classes = useStyles(); 

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { precio }) => sum + precio,
      0
    );
  };

  const productsWhatsapp = cart.map(
    (product) =>
          product.nombre + "%20" + "$" + product.precio
  );

  console.log(productsWhatsapp);

  function getLinkWhastapp() {
    var url =
      "https://api.whatsapp.com/send?phone=" +
      "541121936289" +
      "&text=" +
      encodeURIComponent("Mi pedido es: ") +
      "%0a%0a" +
      productsWhatsapp +
      "%0a" +
      encodeURIComponent("El total es: $" + getTotalSum());

    return window.open(url);
  }

  return (
    <>
      <div className={classes.header}>
      <IconButton onClick={clearCart}>
        <DeleteIcon fontSize="large"/>
      </IconButton>
      <Typography className={classes.total} variant="h6" gutterBottom>
         Total: ${getTotalSum()}
      </Typography>
      <IconButton onClick={() => getLinkWhastapp()}>
        <WhatsAppIcon fontSize="large"/>
      </IconButton>
      </div>
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
              <Typography variant="subtitle1">${producto.precio}</Typography>
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


