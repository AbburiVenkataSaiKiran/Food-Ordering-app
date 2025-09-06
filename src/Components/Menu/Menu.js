import { useEffect, useState } from "react";
import Item from "./Item"; // assuming you have an Item component
import "./Menu.css";

function Menu() {
  const [items, setItems] = useState([]);

  async function menuData() {
    try {
      const response = await fetch(
        "https://react-backend-api-df517-default-rtdb.firebaseio.com/items.json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch menu data!");
      }

      const menudata = await response.json();

      const loadedItems = [];
      for (const key in menudata) {
        loadedItems.push({
          id: key,
          name: menudata[key].name,
          dec: menudata[key].dec,
          price: menudata[key].price,
        });
      }

      setItems(loadedItems);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    menuData(); 
  }, []);

  return (
    <div className="menucard">
      <div className="menu">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            dec={item.dec}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
