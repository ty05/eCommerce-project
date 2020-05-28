import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {useDispatch, useSelector} from 'react-redux';
import ToggleCartHidden from '../../redux/cart/cart.actions';


const CartIcon = () => {

    const dispatch = useDispatch()
    const toggle = useSelector(state=>state.cart)
    


    return(
        <div className='cart-icon' onClick={() => dispatch(ToggleCartHidden())}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
    
}

export default CartIcon;