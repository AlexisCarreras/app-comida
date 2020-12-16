import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const useStyles = makeStyles ({
    root: {
        height: '12.1vh',
        backgroundColor: '#222',
        
    },
    icons: {
        marginRight: '32rem',
        marginLeft: '32rem',
        paddingTop: '0.7rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    text: {
        // color: 'white',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '0.7rem',
    },
})

const Footer = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
        <div className={classes.icons}>
        <FacebookIcon style={{ color: grey[500] }} />
        <InstagramIcon style={{ color: grey[500] }} />
        <TwitterIcon style={{ color: grey[500] }} />
        <SubscriptionsIcon style={{ color: grey[500] }} />
        </div>
        <Typography variant="body2" className={classes.text} style={{ color: grey[500] }} align="center">
            {'Copyright ©  '}
            <Link color="inherit" href="/">
                 Comida Fácil - 
            </Link> Developed by: Alexis Carreras{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </section>

    );
}

export default Footer;