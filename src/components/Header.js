import React from 'react';
import logo from '../img/burger.png';
import { makeStyles} from '@material-ui/core/styles';
import { Button, ButtonGroup } from '@material-ui/core'; 
import { Link } from "react-router-dom";
import { grey } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { deepPurple } from '@material-ui/core/colors';
import {authentication} from '../firebase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    encabezado: {
        height: '10vh',
        width: '100%',
        backgroundColor: 'black',
        position: 'fixed',
        display: 'flex',
    },
    root: {
        marginLeft: '2rem',
        marginRight: '14rem'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: '0.7rem',
        color: 'white'
      },
    registrar: {
        backgroundColor: '#eb5e30',
        color: 'white',
        marginTop: '0.9rem',
        '&:hover': {
            color: 'white',
            border: '1px solid black',
            backgroundColor: '#CB4E00'
        }
    },
    registrar2: {
        backgroundColor: '#eb5e30',
        color: 'white',
        marginTop: '0.9rem',
        '&:hover': {
            color: 'white',
            border: '1px solid black',
            backgroundColor: '#CB4E00'
        }
    },
    registrar3: {
        backgroundColor: '#eb5e30',
        color: 'white',
        marginTop: '0.9rem',
        marginLeft: '13rem',
        '&:hover': {
            color: 'white',
            border: '1px solid black',
            backgroundColor: '#CB4E00'
        }
    },
    iniciar: {
        color: 'white',
        border: '1px solid white',
        marginTop: '0.9rem',
        marginLeft:'1rem',
        '&:hover': {
            color: 'white',
            border: '1px solid black',
            backgroundColor: '#7B7B7B'
        }
    },
    iniciar2: {
        color: 'white',
        border: '1px solid white',
        marginTop: '0.9rem',
        marginLeft:'1rem',
        '&:hover': {
            color: 'white',
            border: '1px solid black',
            backgroundColor: '#7B7B7B'
        }
    },
    iniciar3: {
        color: 'white',
        border: '1px solid white',
        marginTop: '0.9rem',
        marginLeft:'1rem',
        '&:hover': {
            color: 'white',
            border: '1px solid black',
            backgroundColor: '#7B7B7B'
        }
    },
    button: {
        color: 'white',
        marginTop: '0.9rem',
        marginLeft: '3rem',
        '&:hover': {
            color: '#eb5e30'
        }
    },
    button2: {
        color: 'black'
    },
    img: {
        marginLeft: '2rem',
        width: '4rem'
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    avatar: {
        marginLeft: '7rem',
        display: 'flex',
        alignItems: 'center',
    },
    bienvenido: {
        marginRight: '1rem',
        paddingTop: '0.4rem',
        color: 'white',
    },
}))

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const redireccionar = () => {
        window.location.replace("/")
    }

    function handleSignOut() {
        authentication.signOut()
        setTimeout(redireccionar, 100);
    }

        const comprobarUsuario = () => {
            const user = authentication.currentUser
            if(user) {
                return(
                    <div className={classes.avatar}>
                        <Typography variant="subtitle1" gutterBottom className={classes.bienvenido}>
                            Bienvenido
                        </Typography>
                        <Button 
                            aria-controls="simple-menu" 
                            aria-haspopup="true" 
                            onClick={handleClick}
                        >
                            <Avatar className={classes.purple}>AC</Avatar>
                            <ArrowDropDownIcon style={{ color: grey[50] }}/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} className={classes.menuBtn}>Profile</MenuItem>
                            <MenuItem onClick={handleClose} className={classes.menuBtn}>My account</MenuItem>
                            <MenuItem onClick={handleClose, handleSignOut} className={classes.menuBtn}>
                                <Link to="/iniciar-sesion">Cerrar Sesión</Link>
                            </MenuItem>
                        </Menu>
                        {/* <button onClick={() => authentication.signOut()}>Sign Out</button> */}
                    </div>
                )
            } else {
                return (
                    <div>
                        <Link to="/registrate" style={{ textDecoration: 'none' }}>
                            <Button className={classes.registrar} variant="outlined">Registrarse</Button>
                        </Link>
                        <Link to="/iniciar-sesion" style={{ textDecoration: 'none' }}>
                            <Button className={classes.iniciar} variant="outlined">Iniciar Sesión</Button>
                        </Link>
                    </div>
                )
            }
        }

    return(
        <div className={classes.encabezado}>

                {/* Icono de Menú responsivo, solo es visible en tamaño XS, se oculta en los demás
                El color de los iconos ahora es grey 900 por el fondo
                y su estilo está en classes.button2 para darle un color negro*/}
                <Hidden only={['md', 'lg']}>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon onClick={handleClick} />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><Link to="/" style={{ textDecoration: 'none' }}>
                        <Button 
                            className={classes.button2}
                            startIcon={<HomeIcon style={{ color: grey[900] }}/>}
                        >
                            Inicio
                        </Button>
                    </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/menu" style={{ textDecoration: 'none' }}>
                        <Button 
                            className={classes.button2}
                            startIcon={<MenuBookIcon style={{ color: grey[900] }}/>}
                        >
                            Menu
                        </Button>
                    </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/promociones" style={{ textDecoration: 'none' }}>
                        <Button 
                            className={classes.button2}
                            startIcon={<FastfoodIcon style={{ color: grey[900] }}/>}
                        >
                            Promociones
                        </Button>
                    </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/mas" style={{ textDecoration: 'none' }}>
                        <Button 
                            className={classes.button2}
                            startIcon={<ContactSupportIcon style={{ color: grey[900] }}/>}
                        >
                            Más
                        </Button>
                    </Link></MenuItem>
                </Menu>
                </Hidden>

                <Hidden only={['xs', 'sm']}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={logo} className={classes.img}/>
                </Link>
                <ButtonGroup className={classes.root} variant="text" aria-label="text primary button group">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button 
                            className={classes.button}
                            startIcon={<HomeIcon style={{ color: grey[50] }}/>}
                        >
                            Inicio
                        </Button>
                    </Link>
                    <Link to="/menu" style={{ textDecoration: 'none' }}>
                        <Button 
                            className={classes.button}
                            startIcon={<MenuBookIcon style={{ color: grey[50] }}/>}
                        >
                            Menu
                        </Button>
                    </Link>
                    <Link to="/promociones" style={{ textDecoration: 'none' }}>
                        <Button 
                            className={classes.button}
                            startIcon={<FastfoodIcon style={{ color: grey[50] }}/>}
                        >
                            Promociones
                        </Button>
                    </Link>
                    <Link to="/mas" style={{ textDecoration: 'none' }}>
                        <Button 
                            className={classes.button}
                            startIcon={<ContactSupportIcon style={{ color: grey[50] }}/>}
                        >
                            Más
                        </Button>
                    </Link>
                </ButtonGroup>
                </Hidden>
                {comprobarUsuario()}

                {/* <button onClick={() => authentication.signOut()}>Sign Out</button> */}
                <Hidden only={['sm', 'md', 'lg']}>
                    <Link to="/registrate" style={{ textDecoration: 'none' }}>
                        <Button className={classes.registrar2} variant="outlined">Registrate</Button>
                    </Link>
                    <Link to="/iniciar-sesion" style={{ textDecoration: 'none' }}>
                        <Button className={classes.iniciar2} variant="outlined">Iniciar Sesión</Button>
                    </Link>
                </Hidden>

                <Hidden only={['xs', 'md', 'lg']}>
                    <Link to="/registrate" style={{ textDecoration: 'none' }}>
                        <Button className={classes.registrar3} variant="outlined">Registrate</Button>
                    </Link>
                    <Link to="/iniciar-sesion" style={{ textDecoration: 'none' }}>
                        <Button className={classes.iniciar3} variant="outlined">Iniciar Sesión</Button>
                    </Link>
                </Hidden>

                {/* <Hidden only={['xs', 'sm']}>
                    <Link to="/registrate" style={{ textDecoration: 'none' }}>
                        <Button className={classes.registrar} variant="outlined">Registrate</Button>
                    </Link>
                    <Link to="/iniciar-sesion" style={{ textDecoration: 'none' }}>
                        <Button className={classes.iniciar} variant="outlined">Iniciar Sesión</Button>
                    </Link>
                </Hidden> */}
        </div>
    );
}

export default Header;
