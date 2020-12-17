import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import AsistenteCompra from './AsistenteCompra';
import CardMenu from './CardMenu';
import Footer from './Footer';

const useStyles = makeStyles ({
    subtitle: {
        paddingTop: '7.6rem',
        display: 'flex',
        justifyContent: 'center',
    },
    subtitle1: {
        paddingTop: '2rem',
        marginBottom: '3.4rem',
        display: 'flex',
        justifyContent: 'center',
        color: '#752A07',
    },
    section: {
        paddingTop: '1.9rem',
    },
})

const Menu = () => {
    const classes = useStyles();

    return (
            <div>
                {/* <AsistenteCompra /> */}
                    <Typography className={classes.subtitle} variant="h6" gutterBottom>
                        Éstas son las categorías disponibles:
                    </Typography>
                    <div className={classes.section}>
                        <CardMenu/>
                    </div>
                    <Typography className={classes.subtitle1} variant="subtitle1" gutterBottom>
                        Nota: Puedes agregar al carrito e ir a otra categoría, no se perderá lo agregado.
                    </Typography>
                    <Footer />

            </div>
    );
}

export default Menu;

