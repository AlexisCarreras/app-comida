import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {AuthProvider} from './components/Auth';
// import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Registrarse from './components/Registrar';
import Login from './components/Login';
import Menu from './components/Menu';
import Promociones from './components/Promociones';
import Hamburguesas from './components/Hamburguesas';
import Papas from './components/Papas';
import Bebidas from './components/Bebidas';
import Cart from './components/Cart';
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
          <Route path="/promociones" exact> 
            <Promociones/>
          </Route>
          <Route path="/menu" exact> 
            <Menu />
          </Route>
          <Route path="/mas" exact> 
            <Mas/>
          </Route>
          <Route path="/registrate" exact> 
            <Registrarse />
          </Route>
          <Route path="/iniciar-sesion" exact> 
            <Login />
          </Route>

        
          <Route path="/promociones" exact>
            <Promociones/>
          </Route>
          <Route path="/hamburguesas" exact>
            <Hamburguesas/>
          </Route>
          <Route path="/papas" exact>
            <Papas/>
          </Route>
          <Route path="/bebidas" exact>
            <Bebidas/>
          </Route>
          <Route path="/cart" exact>
            <Cart/>
          </Route>

          <Route path="/menu" exact>
            <Promociones/>
            <Hamburguesas/>
            <Papas/>
            <Bebidas/>
          </Route>


        </Switch>
      </div>
      </Router>

    </AuthProvider>
  );
}

export default App;
