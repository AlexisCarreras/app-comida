import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'; 
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { grey } from '@material-ui/core/colors';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -5,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

const useStyles = makeStyles ({
    encabezado: {
        height: '9vh',
        width: '100%',
        marginTop: '3.8rem',
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
})

const AsistenteCompra = () => {
    const classes = useStyles();

    return (
        <div className={classes.encabezado}>
            <Typography variant="subtitle1" className={classes.titulo}>
                Asistente de compra
            </Typography>
            <ButtonGroup className={classes.botones} size="small" variant="text" aria-label="text primary button group">
                <Link to="/promociones" style={{ textDecoration: 'none' }}>
                    <Button className={classes.button}>Promociones</Button>
                </Link>
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
                aria-label="add to shopping cart" 
                style={{ color: grey[50] }}
                className={classes.cart}
                >
                <StyledBadge badgeContent={1} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            <Button className={classes.siguiente} variant="outlined">Siguiente</Button>
        </div>
    );
}

export default AsistenteCompra;