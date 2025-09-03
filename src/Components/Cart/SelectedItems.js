import { useContext } from "react";
import { data } from "../data";
import "./SelectedItems.css";

function SelectedItems() {
  const { orderItems, setOrderItems } = useContext(data);
  
  function decbtnHandler(item) {
    setOrderItems((prev) =>
      prev.map((order) =>
          order.name === item.name
            ? { ...order, quantity: order.quantity - 1 }
            : order
        )
        .filter((order) => order.quantity > 0) 
    );
  }
  

  
  function incbtnHandler(item) {
    setOrderItems((prev) =>
      prev.map((order) =>
        order.name === item.name
          ? { ...order, quantity: order.quantity + 1 }
          : order
      )
    );
  }

  return (
    <>
      {orderItems.map((item, index) => (
        <div key={`${item.name}-${index}`}>
          <div className="selected-items">
            <div className="left">
              <li>{item.name}</li>
              <li>x {item.quantity}</li>
            </div>
            <div className="right">
              <li className="price">
                ${(item.price * item.quantity).toFixed(2)}
              </li>
            </div>
            <div>
              
              <button
                className="quantity"
                onClick={() => decbtnHandler(item)}
              >
                -
              </button>
              <button
                className="quantity"
                onClick={() => incbtnHandler(item)}
              >
                +
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default SelectedItems;
