import Cart from './Cart';
import "./Header.css"
function Header(){
    return(
        <div className='header'>
            <h1 className='title'>Asian Foods</h1>
            <Cart/>
        </div>
    );
}
export default Header;