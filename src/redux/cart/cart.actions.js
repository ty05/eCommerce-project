import CartActionTypes from './cart.types';

const ToggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  });

export default ToggleCartHidden;

export const addItem = item =>({
  type:CartActionTypes.ADD_ITEM,
  payload:item
});

export const RemoveItem = item => ({
  type:CartActionTypes.REMOVE_ITEM,
  payload:item
})

export const ClearItem = item => ({
  type:CartActionTypes.CLEAR_ITEM,
  payload: item
})