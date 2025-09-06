import "./checkout.css";
import { useContext } from "react";
import {data} from '../data';

function CheckOut(){
    const {setConfirm,setCartState}=useContext(data);
    function cancelHandler(){
        setConfirm(false);
        setCartState(true);
    }
    return(
        <div className="backdrop">
        <div className="checkout">
            <h1>CheckOut</h1>
            <div className="form">
            <form>
                <label htmlFor="name">Name</label><br/>
                <input type="text" id="name" className="input" required/><br/>
                <lable htmlFor="phone">Phone</lable><br/>
                <input type="number" id="phone" className="input" required/><br/>
                <lable htmlFor="address">Address</lable><br/>
                <textarea rows="5" id="address" className="input area" required></textarea><br/>
                <button className="confirm">Place Order</button>
                <button className="confirm cancel" onClick={cancelHandler}>Cart</button>
            </form>
            </div>
        </div>
        </div>
    );

}
export default CheckOut;