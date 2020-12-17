import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {AuthProvider} from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';
import Mas from './components/Mas';
import Registrarse from './components/Registrar';
import Login from './components/Login';
import Hamburguesas from './components/Hamburguesas';
import Papas from './components/Papas';
import Bebidas from './components/Bebidas';
import Cart from './components/Cart';
import ConfirmarCompra from './components/ConfirmarCompra';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/nosotros" component={Nosotros}/>
          <Route exact path="/mas" component={Mas}/>
          <Route exact path="/registrate" component={Registrarse}/>
          <Route exact path="/iniciar-sesion" component={Login}/>

          <PrivateRoute exact path="/productos" component={Productos}/>
          <Route exact path="/hamburguesas" component={Hamburguesas}/>
          <Route exact path="/papas" component={Papas}/>
          <Route exact path="/bebidas" component={Bebidas}/>
          <Route exact path="/cart" component={Cart}/>

          <Route exact path="/menu" >
            <Productos/>
            <Hamburguesas/>
            <Papas/>
            <Bebidas/>
          </Route>

          <PrivateRoute exact path="/confirmarCompra" component={ConfirmarCompra} /> 

          <Route exact component={PageNotFound}/>
        </Switch>
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
