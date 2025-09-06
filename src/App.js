
import Header from './Components/Header/Header';
import Msg from "./Components/Msg";
import Menu from "./Components/Menu/Menu" ;
import {useState} from 'react';
import {data} from './Components/data';
import Cartpopup from './Components/Cart/Cartpopup';


function App() {
 
  const [orderItems,setOrderItems]=useState([]);
  const[cart,setCartState]=useState(false);

  
  return (
    <>
    <data.Provider value={{orderItems,setOrderItems,setCartState}}>
    <Header />
    <Msg />
    <Menu />
    {cart && <Cartpopup/>}
    </data.Provider>
    
    </>
  );
}

export default App;
