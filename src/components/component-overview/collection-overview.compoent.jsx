import React from 'react';
import './collection-overview.styles.scss';
import PreviewCollection from '../../components/preview-collection/preview-collection.components';
import {selectShopItems} from '../../redux/shop/shop.selector';
import { useSelector } from 'react-redux';


const CollectionOverview = () => {

    const shopItems = useSelector(selectShopItems);

    console.log(shopItems)


    return(
        <div className='shop-page'>
            {shopItems
            .map((data, index) =>(
                    <PreviewCollection key={index} title={data.title} items={data.items}></PreviewCollection>
                ))
            }
        </div>  
    )
}

export default CollectionOverview;