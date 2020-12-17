import React, { useState } from 'react';
import Promociones from './Promociones';
import Hamburguesas from './Hamburguesas';
import Papas from './Papas';
import Bebidas from './Bebidas';
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
  subtitle1: {
    paddingTop: '9rem',
    display: 'flex',
    justifyContent: 'center',
    color: '#752A07',
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

const PAGE_PROMOCIONES = 'promociones';
const PAGE_HAMBURGUESAS = 'hamburguesas';
const PAGE_PAPAS = 'papas';
const PAGE_BEBIDAS = 'bebidas';
const PAGE_CART = 'cart';


export default function ComplexGrid() {
  const classes = useStyles();
  const [cart, setCart] = useState ([]);
  const [page, setPage] = useState ([PAGE_PROMOCIONES, PAGE_HAMBURGUESAS, PAGE_PAPAS, PAGE_BEBIDAS]);

//---------------Funciones para eliminar del carrito--------------------------

  const removePromoCart = (eliminarPromocion) => {
    setCart(cart.filter(promocion => promocion !== eliminarPromocion))
  }

  const removeBurgerCart = (eliminarHamburguesa) => {
    setCart(cart.filter(hamburguesa => hamburguesa !== eliminarHamburguesa))
  }

  const removePapasCart = (eliminarPapa) => {
    setCart(cart.filter(papa => papa !== eliminarPapa))
  }

  const removeBebidasCart = (eliminarBebida) => {
    setCart(cart.filter(bebida => bebida !== eliminarBebida))
  }

//---------------Funciones para agregar al carrito--------------------------

  const addToCartPromo = (promocion) => {
    // console.log("Funcion de agregar al carrito");
    setCart([...cart, { ...promocion }]);
  };
  const addToCartBurger = (hamburguesa) => {
    // console.log("Funcion de agregar al carrito");
    setCart([...cart, { ...hamburguesa }]);
  };

  const addToCartPapas = (papa) => {
    // console.log("Funcion de agregar al carrito");
    setCart([...cart, { ...papa }]);
  };

  const addToCartBebidas = (bebida) => {
    // console.log("Funcion de agregar al carrito");
    setCart([...cart, { ...bebida }]);
  };

//---------------Función para pasar a otra página--------------------------

  const navegarA = (nextPage) => {
    setPage(nextPage);
  };

  const clearCart = () => {
    setCart([])
  };

  return (
    <section >
      <div className={classes.encabezado}>
            <Typography variant="subtitle1" className={classes.titulo}>
                Asistente de compra
            </Typography>
            <ButtonGroup className={classes.botones} size="small" variant="text" aria-label="text primary button group">
              
              <Button  
                onClick={() => navegarA(PAGE_PROMOCIONES)} className={classes.button}
              >
                Promociones
              </Button>
              <Button 
                onClick={() => navegarA(PAGE_HAMBURGUESAS)} className={classes.button}
              >
                Hamburguesas
              </Button>
              <Button 
                onClick={() => navegarA(PAGE_PAPAS)} className={classes.button}
              >
                Papas
              </Button>
              <Button 
                onClick={() => navegarA(PAGE_BEBIDAS)} className={classes.button}
              >
                Bebidas
              </Button>
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
      <Typography className={classes.subtitle1} variant="subtitle1" gutterBottom>
        Navega por el asistente de compra.
      </Typography>
        {page === PAGE_PROMOCIONES && (
            <Promociones addToCartPromo={addToCartPromo} />
        )}
        {page === PAGE_HAMBURGUESAS && (
            <Hamburguesas addToCartBurger={addToCartBurger} />
        )}
        {page === PAGE_PAPAS && (
            <Papas addToCartPapas={addToCartPapas} />
        )}
        {page === PAGE_BEBIDAS && (
            <Bebidas addToCartBebidas={addToCartBebidas} />
        )}
        {page === PAGE_CART && (
          <Cart 
            cart={cart} 
            removePromoCart={removePromoCart}
            removeBurgerCart={removeBurgerCart}
            removePapasCart={removePapasCart}
            removeBebidasCart={removeBebidasCart}
            clearCart={clearCart}
          />
        )}
    </section>
  );
}
