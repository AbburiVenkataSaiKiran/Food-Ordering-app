import { useContext, useState } from "react";
import {data} from '../data';
import "./Item.css";


function Item(props){
    const {setOrderItems}=useContext(data);
    const [amount, setAmount] = useState("1");

    function clickHandler(event){
        event.preventDefault();
        const amt = parseInt(amount, 10);
        if (amount === '' || isNaN(amt) || amt <= 0) {
            return;
        }
       
        // Add/update selected item in orderItems
        setOrderItems((prev) => {
            const idx = prev.findIndex((i) => i.name === props.name);
            if (idx !== -1) {
                const updated = [...prev];
                const existing = updated[idx];
                updated[idx] = { ...existing, quantity:  amt };
                return updated;
            }
            return [...prev, { name: props.name, price: props.price, quantity: amt }];
        });
    }
    
    return(
        <>
            <div className="contain">
                <div className="details">
                    <p className="name">{props.name}</p>
                    <p className="dec">{props.dec}</p>
                    <p className="price">${props.price}</p>
                </div>
                <div >
                    <form onSubmit={clickHandler}>
                        <div className="addtocart">
                            <label htmlFor={`amount-${props.name}`}>Amount</label>
                            <input id={`amount-${props.name}`} type="number" className="amt" value={amount} onChange={(e) => setAmount(e.target.value)} min="1" step="1" />
                        </div>
                        <button type="submit" className="add" > + Add</button>
                    </form>
                </div>

                
            </div>
            <hr />
        </>
    );
    
}
export default Item; 