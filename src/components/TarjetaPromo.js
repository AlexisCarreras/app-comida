import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button, ButtonGroup } from '@material-ui/core';
// import image1 from '../img/galeria2.jpg';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { grey } from '@material-ui/core/colors';
import { Link } from "react-router-dom";

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
  agregar: {
    backgroundColor: '#FFD900',
  },
  productos: {
    paddingTop: '6rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  img: {
    display: 'block',
    width: '100%',
    maxHeight: '100%',
  },
  producto: {
    padding: '40px',
  },
}));

const PAGE_PRODUCTOS = 'productos';
const PAGE_CART = 'cart';


export default function ComplexGrid() {
  const classes = useStyles();
  const [cart, setCart] = useState ([]);
  const [page, setPage] = useState (PAGE_PRODUCTOS);

  const [productos] = useState ([
    {
      nombre: 'Promo 1',
      descripcion: 'Hamburguesa Completa + Gaseosa',
      precio: '$200',
      img: 'https://images.unsplash.com/photo-1564849012987-56a988d14596?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80',
    },
    {
      nombre: 'Promo 2',
      descripcion: '2 Hamburguesas Completas + Papas Fritas',
      precio: '$300',
      img: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    },
    {
      nombre: 'Promo 3',
      descripcion: 'Hamburguesa Completa + Gaseosa',
      precio: '$200',
      img: 'https://images.unsplash.com/photo-1564849012987-56a988d14596?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80',
    },
    {
      nombre: 'Promo 4',
      descripcion: '2 Hamburguesas Completas + Papas Fritas',
      precio: '$300',
      img: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    },
    
  ])

  const addToCart = (producto) => {
    console.log("Funcion de agregar al carrito");
    setCart([...cart, producto]);
  };

  const removeFromCart = (eliminarProducto) => {
    setCart(cart.filter(producto => producto !== eliminarProducto))
  }

  const navegarA = (nextPage) => {
    setPage(nextPage);
  };

  const renderProductos = () => (
    <>
       <div className={classes.productos}>
       {productos.map((producto, index) => (
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
                    onClick={() => addToCart(producto)}
                    className={classes.agregar} 
                    variant="outlined"
                    >
                    Agregar +
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
      );

  const renderCart = () => (
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
                  onClick={() => removeFromCart(producto)}
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
    );

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
        {page === PAGE_PRODUCTOS && renderProductos()}
        {page === PAGE_CART && renderCart()}
    </section>
  );
}
