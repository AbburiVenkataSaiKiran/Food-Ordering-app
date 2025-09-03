import "./Menu.css";
import Item from "./Item";

function Menu(props){
 
    return(
        <div className="menucard">
            <div className="menu">
                {props.Items.map(item => {
                    return(
                        <Item key={item.name} name={item.name} dec={item.dec} price={item.price} />
                    );
                })}
            </div>
        </div>
    );
}
export default Menu;