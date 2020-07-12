import SHOP_DATA from '../../pages/shoppage/shopdate';
import ShopActionTYpes from './shop.types';
import ShopData from './shopdata';


const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case ShopActionTYpes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;