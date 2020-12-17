import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles =makeStyles((theme) => ({
    encabezado: {
        height: '9vh',
        width: '100%',
        marginTop: '3.84rem',
        backgroundColor: '#333',
        position: 'fixed',
        display: 'flex',
    },
    titulo: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '3rem',
        marginRight: '44.45rem',
    },
    siguiente: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        marginLeft: '2rem',
        borderRadius: '50px',
        backgroundColor: '#89C739',
        color: 'white',
        '&:hover': {
            backgroundColor: '#629F13',
          },
    },
    atras: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        marginLeft: '2rem',
        borderRadius: '50px',
        backgroundColor: '#C22C1D',
        color: 'white',
        '&:hover': {
            backgroundColor: '#9B0E00',
          },
    },
    separacion: {
        paddingBottom: '10rem',
    },
    form: {
        padding: '1.5rem',
        marginLeft: '30rem',
        width: '20%',
        backgroundColor: 'white',
      },
    envio: {
        color: 'black',
        marginBottom: '0.4rem',
    },
    linea: {
        color: 'black',
        marginBottom: '0.7rem',
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 241,
        marginTop: '1rem',
        marginBottom: '2rem',
    },
    submit: {
        backgroundColor: '#89C739',
        '&:hover': {
          backgroundColor: '#629F13',
        },
    }
}));

const ConfirmarCompra = () => {
    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    return (
        <section className="confirmarCompra">
           <div className={classes.encabezado}>
                <Typography variant="subtitle1" className={classes.titulo}>
                    Asistente de compra
                </Typography>
            
                <Link to="/productos" style={{ textDecoration: 'none' }}>
                    <Button className={classes.atras} variant="outlined">Atrás</Button>
                </Link>
                <Link to="/pagar" style={{ textDecoration: 'none' }}>
                    <Button className={classes.siguiente} variant="outlined">Siguiente</Button>
                </Link>
            </div>
            <div className={classes.separacion}></div>
            <div>
                <form className={"form"} noValidate>
                <Grid item xs={12}>
                <Typography variant="h6" className={classes.envio}>
                    Envío:
                </Typography>
                <Divider className={classes.linea}/>
                <TextField 
                    name="direccion"
                    id="direccion" 
                    label="Dirección"  
                    required 
                    fullWidth
                />
                </Grid>
                <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Localidad</InputLabel>
                    <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Merlo</MenuItem>
                    <MenuItem value={20}>Padua</MenuItem>
                    <MenuItem value={30}>Libertad</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
            
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Guardar
                </Button>
            </form>
            </div>
        </section>
    );
}

export default ConfirmarCompra;