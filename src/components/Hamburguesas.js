import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AsistenteCompra from './AsistenteCompra';
// import Burger from "./ListaBurger";
// import Cart from "./Cart";


const Hamburguesas = () => {

    //Estado de burgers y listado
    // const [burgers, setBurgers] = useState([
    //     { id: 1, nombre: "SALTEÑA", precio: 450 },
    //     { id: 2, nombre: "PORTEÑA", precio: 380 },
    //     { id: 3, nombre: "CHICKEN", precio: 350 },
    //     { id: 4, nombre: "CRIOLLA", precio: 400 },
    //     { id: 5, nombre: "PATAGONIA", precio: 440 },
    //   ]);

    //Estado del carro
    // const [cart, setCart] = useState([])
    

    return (
        <div>
            <AsistenteCompra />

            {/* {burgers.map((burger) => (
              <Burger
                key={burger.id}
                burger={burger}
                cart={cart}
                setCart={setCart}
                burgers={burgers}
              />
            ))}

            <Cart
            cart={cart}
            setCart={setCart}
            /> */}

        </div>
    );
}

export default Hamburguesas;