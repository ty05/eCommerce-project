import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.components';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';
import  ToggleCartHidden from '../../redux/cart/cart.actions';


const CartDropDown = () => {

    const cartItems = useSelector(selectCartItems);
    const history = useHistory();
    const dispatch = useDispatch();
    

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {   cartItems.length ?
                    cartItems && cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
                :
                <span className='empty-message'>No item is added</span>
                }
            </div>
            <CustomButton onClick={
                () => {history.push('/checkout');
                dispatch(ToggleCartHidden());
            }}     
            >
            GO TO CHECKOUT
            </CustomButton>  
        </div>
    )};

    

export default withRouter(CartDropDown);