import {authentication} from '../firebase';
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./Auth.js";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

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

const Login = ({ history }) => {
  const classes = useStyles();

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await authentication
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.contenedor}>
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      <form onSubmit={handleLogin} className={classes.root} noValidate autoComplete="off">
        <TextField 
          name="email" 
          type="email" 
          id="outlined-basic" 
          label="Email" 
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          />
        <TextField name="password" 
          type="password" 
          id="outlined-basic" 
          label="Contraseña" 
          variant="outlined" 
          required />
        <Button type="submit" variant="outlined" className={classes.button} >Iniciar Sesión</Button>
      </form>
      
    </div>
  );
};

export default withRouter(Login);