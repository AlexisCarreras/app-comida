import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles ({
    root: {
        height: '12.1vh',
        backgroundColor: '#333',
        
    },
    text: {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '3rem',
    },
})

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Typography className={classes.text} variant="caption" display="block" gutterBottom>
            © Derechos Reservados 2020 - Alexis Carreras
        </Typography>
        </div>

    );
}

export default Footer;