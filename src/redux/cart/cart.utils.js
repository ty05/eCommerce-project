export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  // export const reduceItemCart = (cartItems, cartItemToReduce) => {
  //   const existingCartItem = cartItems.find(
  //     cartItem => cartItem.id === cartItemToReduce.id
  //   );

  //   if(existingCartItem.quantity == 1) {
  //     return cartItems.filter(cartItem => cartItem.id != cartItemToReduce.id);
  //   }

  //   return cartItems.map(
  //     cartItem =>
  //     cartItem.id === cartItemToReduce.id ?
  //     { ...cartItem, quantity: cartItem.quantity - 1 }
  //     : cartItem
  //   );
  // };

  export const reduceItemCart = (cartItems, cartItemToRemove) => {
    if (cartItemToRemove.quantity === 1) {
      return cartItems.filter((item) => item.id !== cartItemToRemove.id);
    }
   
    return cartItems.map((item) =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  };