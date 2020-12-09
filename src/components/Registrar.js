import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {authentication} from "../firebase";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  contenedor: {
    backgroundColor: '#F1F0F0',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    width: '93%',
    height: '2.7rem',
    backgroundColor: '#89C739',
    color: 'white',
    '&:hover': {
      backgroundColor: '#629F13',
    },
  },
}));

const Registar = ({ history }) => {
  const classes = useStyles();

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await authentication
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className={classes.contenedor}>
      <Typography variant="h4" gutterBottom>
        Crea tu cuenta
      </Typography>
      <form onSubmit={handleSignUp} className={classes.root} noValidate autoComplete="off">
        
        <TextField 
          name="email" 
          type="email" 
          id="outlined-basic" 
          label="Email" 
          variant="outlined"
          required />
        
        <TextField 
          name="password" 
          type="password" 
          id="outlined-basic" 
          label="Contraseña" 
          variant="outlined"
          required />

        <Button variant="outlined" className={classes.button}>Registrarse</Button>
      </form>
      
    </div>
    
  );
};

export default withRouter(Registar); 