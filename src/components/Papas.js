import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}))

export default function Papas({ addToCartBurger }) {
    const classes = useStyles();

    const [productos] = useState ([
      {
        nombre: 'Promo 5',
        descripcion: '2 Hamburguesas Completas + Papas Fritas',
        precio: '$300',
        img: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      },
      {
        nombre: 'Promo 6',
        descripcion: '2 Hamburguesas Completas + Papas Fritas',
        precio: '$300',
        img: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      },
      {
        nombre: 'Promo 7',
        descripcion: 'Hamburguesa Completa + Gaseosa',
        precio: '$200',
        img: 'https://images.unsplash.com/photo-1564849012987-56a988d14596?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80',
      },
      {
          nombre: 'Promo 8',
          descripcion: 'Hamburguesa Completa + Gaseosa',
          precio: '$200',
          img: 'https://images.unsplash.com/photo-1564849012987-56a988d14596?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80',
        },
        
      ]);

    return (
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
                    onClick={() => addToCartBurger(producto)}
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
};