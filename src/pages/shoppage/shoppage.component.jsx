import React from 'react';
// import SHOP_DATA from './shopdate';
// import PreviewCollection from '../../components/preview-collection/preview-collection.components';
// import {selectShopItems} from '../../redux/shop/shop.selector';
// import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/component-overview/collection-overview.compoent';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {

    console.log(match)

    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
        </div>  
    )
}


   

    



export default ShopPage;

