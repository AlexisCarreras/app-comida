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
import Promociones from './components/Promociones';
import Menu from './components/Menu';
import Mas from './components/Mas';
import Registrarse from './components/Registrar';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Hamburguesas from './components/Hamburguesas';
import Papas from './components/Papas';
import Bebidas from './components/Bebidas';
import Cart from './components/Cart';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="app">
        <Header/>
        <Switch>
          {/* <PrivateRoute path="/" exact component={Inicio} />  */}
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/promociones" component={Promociones}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/mas" component={Mas}/>
          <Route exact path="/registrate" component={Registrarse}/>
          <Route exact path="/iniciar-sesion" component={Login}/>
          <Route component={PageNotFound}/>

          <Route exact path="/promociones" component={Promociones}/>
          <Route exact path="/hamburguesas" component={Hamburguesas}/>
          <Route exact path="/papas" component={Papas}/>
          <Route exact path="/bebidas" component={Bebidas}/>
          <Route exact path="/cart" component={Cart}/>

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
