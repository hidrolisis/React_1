import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function NavBar() {
    const cartItemCount = 5;

    return (
        <AppBar position="static">
            <Toolbar className="barra">
                <div className="center-container">
                    <Typography variant="h2">S&H, Sweet and Healthy</Typography>
                    <Typography variant="h6">Exquisitos helados con impresionantes sabores sin azúcar.</Typography>
                </div>

                {/* Botones del menú principal */}
                <div className="botones_navbar">
                    <button className="boton_tipo_a">Crema y Chocolate</button>
                    <button className="boton_tipo_a">Fresas y Crema</button>
                    <button className="boton_tipo_a">Sueños de Avellana</button>
                    <CartWidget id='logo' />
                    <span className="cart-icon">
                        <span className="cart-count">{cartItemCount}</span>
                    </span>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;