import React from 'react';
import './checkout.styles.scss';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selectors';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.components';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'


const CheckOutPage = () => {

    const cartItems= useSelector(selectCartItems);
    const cartPrice = useSelector(selectCartTotal);
    
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='checkout-block'>
                    <span> </span>
                </div>
                <div className='checkout-block'>
                    <span>Product</span>
                </div>
                <div className='checkout-block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout-block'>
                    <span>Price</span>
                </div>
                <div className='checkout-block'>
                    <span>Remove</span>
                </div>
            </div>
            
                {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
           
            <div className='total'>
                <span>Total: ${cartPrice}</span>
            </div>
            
            <div className='pay'>
                <StripeCheckoutButton price = {cartPrice} />
            </div>
            
            <div className='test-warning'>
                *Please use th3 following test credit card for payment*
                <br/>
                4242 4242 4242 4242 - EXP:01/21 - CVV: 123
            </div>


            
        </div>
    )
}
export default CheckOutPage;