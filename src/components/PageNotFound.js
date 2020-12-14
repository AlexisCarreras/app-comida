import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles ({
    titulo: {
        paddingTop: '10rem',
    },
})

const PageNotFound = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.titulo} component="h1" variant="h5">
                Page not Found
            </Typography>
        </div>
    );
}

export default PageNotFound;