import CheckOut from './Components/Cart/CheckOut';
import Header from './Components/Header/Header';
import Msg from "./Components/Msg";
import Menu from "./Components/Menu/Menu" ;
import {useState} from 'react';
import {data} from './Components/data';
import Cartpopup from './Components/Cart/Cartpopup';


function App() {
 
  const [orderItems,setOrderItems]=useState([]);
  const[cart,setCartState]=useState(false);
  const[confirm,setConfirm]=useState(false);

  
  return (
    <>
    <data.Provider value={{orderItems,setOrderItems,setCartState,setConfirm}}>
    <Header />
    <Msg />
    <Menu />
    {cart && <Cartpopup/>}
    {confirm && <CheckOut/>}
    </data.Provider>
    
    </>
  );
}

export default App;
