import { createSelector } from 'reselect';


const cart = state => state.cart;


export const selectCartItems = createSelector(
    [cart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [cart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity,
        0
        )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,0)
)