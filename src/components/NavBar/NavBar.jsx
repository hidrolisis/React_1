import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {
    const cartItemCount = 5;
        return (
            <nav>
                <h3>HELADERIA S&H SWEET AND HEALTHY</h3>
                <div className="navbar">
                    <button>Crema y Chocolate</button>
                    <button>Fresas y Crema</button>
                    <button>Sueños de Avellana</button>
                    <CartWidget id='logo' />
                    <span className="cart-icon">
                        <span className="cart-count">{cartItemCount}</span>
                        </span>
                </div>
                
            </nav>
        )
}  

export default NavBar;