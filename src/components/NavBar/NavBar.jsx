import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {
    const cartItemCount = 5;
        return (
            <nav className="Titulo">
                <h3>S&H</h3>
                <h3>(SWEET AND HEALTHY ICECREAM)</h3>
                <h4>Heladería y cafe para paladares exigentes</h4>
                <div className="botones_navbar">
                    <button className="boton_tipo_a" onclick="addIceCream()">Crema y Chocolate
                    </button>
                    <button className="boton_tipo_a" onclick="addIceCream()">Fresas y Crema
                    </button>
                    <button className="boton_tipo_a" onclick="addIceCream()">Sueños de Avellana
                    </button>
                    <CartWidget id='logo' />
                    <span className="cart-icon">
                        <span className="cart-count">{cartItemCount}
                        </span>
                    </span>
                </div>
                
            </nav>
        )
}  

export default NavBar;