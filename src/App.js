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
import Registrarse from './components/Registrar';
import Login from './components/Login';
import Menu from './components/Menu';
import Promociones from './components/Promociones';
import Hamburguesas from './components/Hamburguesas';
import Papas from './components/Papas';
import Bebidas from './components/Bebidas';
import Mas from './components/Mas';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="app">
        <Header/>
        <Switch>
          {/* <PrivateRoute path="/" exact component={Inicio} />  */}
          <Route path="/" exact> 
            <Inicio />
          </Route>
          <Route path="/promociones"> 
            <Promociones/>
          </Route>
          <Route path="/menu"> 
            <Menu />
          </Route>
          <Route path="/mas"> 
            <Mas/>
          </Route>
          <Route path="/registrate"> 
            <Registrarse />
          </Route>
          <Route path="/iniciar-sesion"> 
            <Login />
          </Route>

          <Route path="/promociones">
            <Promociones/>
          </Route>
          <Route path="/hamburguesas">
            <Hamburguesas/>
          </Route>
          <Route path="/papas" >
            <Papas/>
          </Route>
          <Route path="/bebidas" >
            <Bebidas/>
          </Route>
        </Switch>
      </div>
      </Router>

    </AuthProvider>
  );
}

export default App;
