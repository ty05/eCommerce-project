import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.components';
import { useSelector } from 'react-redux';



const CartDropDown = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems && cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>  
        </div>
    )};

    

export default CartDropDown;