import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import InicioLista from './InicioLista';
import Footer from './Footer';

const useStyles = makeStyles({
    titulo: {
        marginTop: '4rem',
        marginLeft: '5rem',
        color: 'white'
    },
    // ancho: {
    //     marginLeft: '5rem',
    //     color: "white"
    // },
    subTitul: {
        marginTop: '1.2rem',
        marginLeft: '7.5rem',
        color: 'white'
    },
    pie1: {
        marginTop: '15rem',
        marginLeft: '9rem',
        color: 'white'
    },
    pie2: {
        marginLeft: '11rem',
        color: 'white'
    },
})

const Inicio = (props) => {
    const classes = useStyles();

    return (
        <div>
        <Hidden only={['xs', 'sm']}>
        <section className="fondo"><br/><br/><br/>
        <Typography className={classes.titulo} variant="h4" gutterBottom>
            Delivery de comidas caseras!
        </Typography>
        <Typography className={classes.subTitul} variant="h6" gutterBottom>
            ¡Hace tu pedido online desde el Menú!
        </Typography>
            {/* <Typography variant="body2" className={classes.ancho}>
                    Ancho: {props.width}
            </Typography> */}
            <Typography className={classes.pie1} variant="h6" gutterBottom>
                Viernes a Domingos de 20 a 23hs
            </Typography>
            <Typography className={classes.pie2} variant="h6" gutterBottom>
                Merlo - Padua - Libertad
            </Typography>
        </section>
        </Hidden>

        <Hidden only={['xs', 'md', 'lg']}>
        <section className="fondo2"><br/><br/><br/>
            <h2 className={classes.titulo}>Delivery de comidas caseras!</h2>
            {/* <Typography variant="body2" className={classes.ancho}>
                    Ancho: {props.width}
            </Typography> */}
            <h4 className={classes.subTitul}>¡Hace tu pedido online desde el Menú!</h4>
            <h3 className={classes.pie1}>Viernes a Domingos de 20 a 23hs</h3>
            <h3 className={classes.pie2}>Merlo - Padua - Libertad</h3>
        </section>
        </Hidden>

        <Hidden only={['sm', 'md', 'lg']}>
        <section className="fondo3"><br/><br/><br/>
            <h2 className={classes.titulo}>Delivery de comidas caseras!</h2>
            <Typography variant="body2" className={classes.ancho}>
                    Ancho: {props.width}
            </Typography>
            <h4 className={classes.subTitul}>¡Hace tu pedido online desde el Menú!</h4>
            <h3 className={classes.pie1}>Viernes a Domingos de 20 a 23hs</h3>
            <h3 className={classes.pie2}>Merlo - Padua - Libertad</h3>
        </section>
        </Hidden>
        <InicioLista />
        <Footer />

        </div>

        
        
    )
}

export default withWidth() (Inicio);