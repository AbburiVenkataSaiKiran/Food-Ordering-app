import SelectedItems from "./SelectedItems";
import "./Cartpopup.css";
import { useContext } from "react";
import {data} from '../data';
function Cartpopup(){
    const {orderItems,setCartState,setConfirm}=useContext(data);
    let total=0.00;
    for(let i=0;i<orderItems.length;i++){
        total+=orderItems[i].price*orderItems[i].quantity;
    }
    total=total.toFixed(2)
    function closeCart(){
        setCartState(false);
    }
    function confirm(){
        setConfirm(true);
        setCartState(false);
    }
    return(
        <div className="backdrop">
            <div className="model">
                <div className="cartpopup">
                    <SelectedItems/>
                    <div className="total">
                        <h1>Total</h1>
                        <h1>${total}</h1>
                    </div>
                    <div className="buttons">
                        <button className="close" onClick={closeCart}>Close</button>
                        <button className="order" onClick={confirm}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartpopup;