import React, { useState } from 'react';
import Promociones from './Promociones';
import Cart from './Cart';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, ButtonGroup } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { grey } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import ButtonBase from '@material-ui/core/ButtonBase';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -5,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  encabezado: {
    height: '9vh',
    width: '100%',
    marginTop: '3.84rem',
    backgroundColor: '#333',
    position: 'fixed',
    display: 'flex',
  },
  titulo: {
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '3rem',
  },
  botones: {
      display: 'flex',
      alignItems: 'center',
      marginLeft:'6rem',
      color: 'white',
  },
  button: {
      paddingRight: '1rem',
      paddingLeft: '1rem',
      color: 'white',
      '&:hover': {
          color: '#FFD900'
      }
  },
  cart: {
      marginLeft: '16.5rem',
  },
  siguiente: {
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      marginLeft: '2rem',
      borderRadius: '50px',
      backgroundColor: '#89C739',
      color: 'white',
      '&:hover': {
          backgroundColor: '#629F13',
        },
  },
  section: {
      display: 'flex',
      justifyContent:'space-around',
      marginLeft: '8rem',
      marginRight: '1rem',
  },
  root: {
    flexGrow: 1,
  },
}));

const PAGE_PRODUCTOS = 'productos';
const PAGE_CART = 'cart';


export default function ComplexGrid() {
  const classes = useStyles();
  const [cart, setCart] = useState ([]);
  const [page, setPage] = useState (PAGE_PRODUCTOS);

  const removeFromCart = (eliminarProducto) => {
    setCart(cart.filter(producto => producto !== eliminarProducto))
  }

  const addToCart = (producto) => {
    console.log("Funcion de agregar al carrito");
    setCart([...cart, { ...producto }]);
  };

  const navegarA = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <section >
      <div className={classes.encabezado}>
            <Typography variant="subtitle1" className={classes.titulo}>
                Asistente de compra
            </Typography>
            <ButtonGroup className={classes.botones} size="small" variant="text" aria-label="text primary button group">
              
              <Button  
                onClick={() => navegarA(PAGE_PRODUCTOS)} className={classes.button}
              >
                Promociones
              </Button>
              
                <Link to="/hamburguesas" style={{ textDecoration: 'none' }}>
                    <Button className={classes.button}>Hamburguesas</Button>
                </Link>
                <Link to="/papas" style={{ textDecoration: 'none' }}>
                    <Button className={classes.button}>Papas</Button>
                </Link>
                <Link to="/bebidas" style={{ textDecoration: 'none' }}>
                    <Button className={classes.button}>Bebidas</Button>
                </Link>
            </ButtonGroup>
            <IconButton 
                onClick={() => navegarA(PAGE_CART)} 
                aria-label="add to shopping cart" 
                style={{ color: grey[50] }}
                className={classes.cart}
                >
                <StyledBadge badgeContent={cart.length} showZero color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            <Link to="/confirmarCompra" style={{ textDecoration: 'none' }}>
            <Button className={classes.siguiente} variant="outlined">Siguiente</Button>
            </Link>
      </div>
        {page === PAGE_PRODUCTOS && (
            <Promociones addToCart={addToCart} />
        )}
        {page === PAGE_CART && (
          <Cart cart={cart} removeFromCart={removeFromCart} />
        )}
    </section>
  );
}
