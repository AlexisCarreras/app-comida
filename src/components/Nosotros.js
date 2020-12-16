import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';
import img from '../img/Comida Fácil.png';

const useStyles = makeStyles ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        paddingTop: '9.2rem',
        marginBottom: '5.5rem',
    },
    imagen: {
        marginLeft: '5rem',
        width: '300px',
        height: '300px',
    },
    txt: {
        marginLeft: '3rem',
        color: 'white',
        float: 'left',
        width: '45%',
        paddingTop: '1rem',

    },
})

const Nosotros = () => {
    const classes = useStyles();

    return (
        <section className="nosotros">
        <div className= {classes.root} >
            <img 
                className= {classes.imagen} 
                alt= "Logo Comida Fácil" 
                src= {img} 
            />
            <Typography gutterBottom variant="body1" className= {classes.txt}> 
                Desarrollamos aplicaciones para locales de comidas.<br/>
                <strong>Comida Fácil </strong> es un app para realizar pedidos online que consta de un registro e inicio de sesión para tus clientes, una galería, un menú donde vas a tener las categorías que creas necesarias y un navegador para recorrerlas.<br/>
                Además de poder realizar el pago del pedido de forma online.
            </Typography>
        </div>
        <Footer />
        </section>
    )
}

export default Nosotros;