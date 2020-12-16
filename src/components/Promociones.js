import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
        marginRight: '1rem',
        backgroundColor: '#FFD900',
        '&:hover': {
          backgroundColor: '#D8B800',
        }
      },
      verMas: {
        color: 'whiteSmoke',
        backgroundColor: '#EB5D2F',
        '&:hover': {
          backgroundColor: '#C4380A',
        }
      },
      botones: {
        display: 'flex',
      },
}))

export default function Promociones({ addToCartPromo }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const [productos] = useState ([
        {
          nombre: 'Promo 1',
          descripcion: 'Hamburguesa Súper + Papas + Gaseosa',
          precio: '$500',
          img: 'https://images.unsplash.com/photo-1607013401178-f9c15ab575bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
        },
        {
          nombre: 'Promo 2',
          descripcion: 'Hamburguesa con lechuga y tomate + Papas Fritas',
          precio: '$380',
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
        },
        {
          nombre: 'Promo 3',
          descripcion: '3 Hamburguesas Completas (ingredientes a elección)',
          precio: '$700',
          img: 'https://images.unsplash.com/photo-1585730315692-5252e57d4b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
        },
        {
          nombre: 'Promo 4',
          descripcion: 'Hamburguesa con lechuga, tomate y cheddar + Bebida',
          precio: '$320',
          img: 'https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=780&q=80',
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
                    ID: Promociones
                  </Typography>
                </Grid>
                <Grid item className={classes.botones}>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button 
                    onClick={() => addToCartPromo(producto)}
                    className={classes.agregar} 
                    variant="outlined"
                    >
                    Agregar
                  </Button>
                  </Typography>

                  <Button 
                    onClick={handleClickOpen}
                    className={classes.verMas}
                    variant="outlined"  
                  >
                    Ver Foto
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <DialogTitle id="responsive-dialog-title">{"Foto"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                      <Typography gutterBottom variant="subtitle1">
                        {producto.nombre}
                      </Typography>
                      <img 
                        className= {classes.img} 
                        alt= {producto.nombre} 
                        src= {producto.img} 
                      />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary" autoFocus>
                        Cerrar
                      </Button>
                    </DialogActions>
                  </Dialog>

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