import { FaShoppingCart } from "react-icons/fa";
import {data} from '../data';
import {useContext} from 'react';
import "./Cart.css"
function Cart(){
    const {orderItems,setCartState}=useContext(data);
    let t=0;
    for(let i=0;i<orderItems.length;i++){
        t=t+orderItems[i].quantity;
    }

    function cartClickHandler(){
        setCartState(true);
    }

    return(
        <div className="container" onClick={cartClickHandler}>
            <div className="cart">
                <FaShoppingCart/>
                <p> Your Cart</p>
                <div className="count">
                    <p>{t}</p>
                </div>
            </div>
        </div>
    );
}
export default Cart;