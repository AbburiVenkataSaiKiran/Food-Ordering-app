
import Header from './Components/Header/Header';
import Msg from "./Components/Msg";
import Menu from "./Components/Menu/Menu" ;
import {  useState } from 'react';
import {data} from './Components/data';
import Cartpopup from './Components/Cart/Cartpopup';

const items = [
  { name: "Sushi", dec: "Finest fish and veggies", price: 22.99 },
  { name: "Schnitzel", dec: "A German speciality!", price: 16.50 },
  { name: "Barbecue Burger", dec: "American raw meaty", price: 12.99 },
  { name: "Green Bowl", dec: "Healthy and green", price: 18.99 },
  { name: "Pasta Alfredo", dec: "Creamy Italian delight", price: 14.50 },
  { name: "Margherita Pizza", dec: "Classic cheese & tomato", price: 11.99 },
  { name: "Chicken Biryani", dec: "Spicy Indian rice dish", price: 17.25 },
  { name: "Caesar Salad", dec: "Fresh lettuce & dressing", price: 10.75 },
  { name: "Grilled Salmon", dec: "Served with lemon butter", price: 24.99 },
  { name: "Tacos", dec: "Mexican spicy street style", price: 13.49 },
  { name: "Falafel Wrap", dec: "Middle Eastern flavors", price: 9.99 },
  { name: "Ramen Noodles", dec: "Japanese broth noodles", price: 15.20 },
];


function App() {
 
  const [orderItems,setOrderItems]=useState([]);
  const[cart,setCartState]=useState(false);
  
  return (
    <>
    <data.Provider value={{orderItems,setOrderItems,setCartState}}>
    <Header />
    <Msg />
    <Menu Items={items} />
    {cart && <Cartpopup/>}
    </data.Provider>
    
    </>
  );
}

export default App;
