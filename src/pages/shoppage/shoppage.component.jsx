import React,{ useEffect, useState }  from 'react';
// import SHOP_DATA from './shopdate';
// import PreviewCollection from '../../components/preview-collection/preview-collection.components';
// import {selectShopItems} from '../../redux/shop/shop.selector';
// import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/component-overview/collection-overview.compoent';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import {useSelector, useDispatch } from 'react-redux';

const ShopPage = ({ match }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            
            setData(collectionMap)
        })
    },[])

    console.log(data.map((da) => console.log(da)))

    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
        </div>  
    )
}


   

    



export default ShopPage;

