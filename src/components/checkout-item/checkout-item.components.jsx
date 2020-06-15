import React from 'react';
import './checkout-item.styles.scss';
import { RemoveItem, addItem, ClearItem } from '../../redux/cart/cart.actions';
import {useDispatch, useSelector} from 'react-redux';


const CheckoutItem = ({cartItem}) => {

    const dispatch=useDispatch();
    const cartItems = useSelector(state=>state.cart.cartItems);
    const { id, name, imageUrl, price, quantity } = cartItem
  
    
    
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt ='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(ClearItem(cartItem))}>&#10094;</div>
            <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => dispatch(RemoveItem(cartItem))}>&#10005;</div>
    </div>
)}

export default CheckoutItem;