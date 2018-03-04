import React from 'react';
import PizzaListCartItem from '../PizzaListCartItem/PizzaListCartItem';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class CartPageBody extends React.Component {

    constructor (props, ctx) {
        super(props, ctx);
        this.state = {
            pizzasInCart: null
        };
        this.removeFromLocalStorage = this.removeFromLocalStorage.bind(this);
    }

    // Get 'cart' from local storage
    componentDidMount() {
        var pizzasInCart = JSON.parse(localStorage.getItem('cartPizzasInventory'));
        if(pizzasInCart === null) { pizzasInCart = []; }
        this.setState({pizzasInCart : pizzasInCart});
    }

    // Removes pizza from 'cart' in local storage
    removeFromLocalStorage(pizza) {
        var pizzasInCart = JSON.parse(localStorage.getItem('cartPizzasInventory'));
        for(var i = 0; i < pizzasInCart.length; i++) {
            if(pizzasInCart[i].id === pizza.id) {
                pizzasInCart.splice(i, 1);
                localStorage.setItem('cartPizzasInventory', JSON.stringify(pizzasInCart));
                break;
            }
        }
        this.setState({pizzasInCart: JSON.parse(localStorage.getItem('cartPizzasInventory'))});
        alert(pizza.name + ' removed from cart!');
    }   

    render() {
        if (this.state.pizzasInCart === null) {
            return <LoadingScreen />;
        } else if(this.state.pizzasInCart.length === 0) {
            return (
                <div className='cartBody'>
                    <div className="pageViewHeadings">
                        <h1>Cart is empty!</h1>
                        <h2>Che orribile! Go explore our menu under the 'menu' page. We have delicious pizzas!</h2>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='cartBody'>
                    <div className='row'>
                        <div className="pageViewHeadings">
                            <h1>Your cart</h1>
                            <h2>Mamma mia! You're clearly in for a feast!</h2>
                        </div>
                        <div className='pizzasInMenu'>
                            {this.state.pizzasInCart.map(p => <PizzaListCartItem key={p.id} pizza={p} removeFromLocalStorage={this.removeFromLocalStorage}/>)}
                        </div>
                    </div>
                    <div className='row'>
                        <Link to={'/checkout/'} >
                            <span id="checkoutButton">
                                Checkout &nbsp; &nbsp;
                                <FontAwesome name="arrow-right"/>
                            </span>
                        </Link>
                    </div>
                </div>
            );
        }
    }
};

export default CartPageBody;