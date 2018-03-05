import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../resources/PizzeriaUno.png';

const NavigationBar = () => {
    return (
        <div className="NavigationBar">
            <nav id="navBar">
                <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    id="navBarLogo"><img id='navBarLogo'src={Logo} alt="Home Page" /></NavLink>
                <NavLink
                    to="/pizzas"
                    activeClassName="active"
                    className="navBarItem">Menu</NavLink>
                <NavLink
                    to="/offers"
                    activeClassName="active"
                    className="navBarItem">Offers</NavLink>
                <NavLink
                    to="/cart"
                    activeClassName="active"
                    className="navBarItem">Cart</NavLink>
                <NavLink
                    to="/order"
                    activeClassName="active"
                    className="navBarItem navBarItemRight">Order</NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="navBarItem navBarItemRight">About Us</NavLink>
            </nav>
        </div>
    );
};
export default NavigationBar;