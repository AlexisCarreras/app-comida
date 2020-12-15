import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Comida Fácil -
      </Link> Developed by: Alexis Carreras{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1554306297-0c86e837d24b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=721&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5.2rem',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1.8),
  },
  check: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '2.5rem',
    marginLeft: '2.5rem',
  },
  submit: {
    margin: theme.spacing(2, 0, 3),
    backgroundColor: '#89C739',
    '&:hover': {
      backgroundColor: '#629F13',
    },
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h6">
            Contanos tu experiencia con la app:
          </Typography>
          <Typography component="h1" variant="subtitle1">
            Ayudanos a mejorar
          </Typography>
          <form className={classes.form} action="https://formspree.io/f/mqkgydjd" method="POST" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Nombre"
              label="Nombre"
              name="Nombre"
              autoComplete="Nombre"
              autoFocus
              size= "small"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
              size= "small"
            />
            <div className={classes.check}>
            <FormControlLabel
              control={<Checkbox value="Mala" color="primary" />}
              label="Mala"
              name="Experiencia"
            />
            <FormControlLabel
              control={<Checkbox value="Buena" color="primary" />}
              label="Buena"
              name="Experiencia"
            /> 
            <FormControlLabel
              control={<Checkbox value="Muy buena" color="primary" />}
              label="Muy buena"
              name="Experiencia"
            />
            </div>
             <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Comentario"
                label="Comentario"
                id="comentario"
                multiline
                rows="4"
                size= "small"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Enviar
            </Button>
            <Box>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}