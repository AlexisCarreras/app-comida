import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TarjetaPromo from './TarjetaPromo';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#F1F0F0',
  },
  separacion: {
    paddingTop: '10rem',
  },
}))

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <TarjetaPromo/>
    </div>
  );
}

export default Menu;

