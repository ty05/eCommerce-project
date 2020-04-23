import React from 'react';
import SHOP_DATA from './shopdate';
import PreviewCollection from '../../components/preview-collection/preview-collection.components';



const ShopPage = () => (
    <div className='shop-page'>
        {SHOP_DATA
        .map((data, index) =>(
                <PreviewCollection key={index} title={data.title} items={data.items}></PreviewCollection>
            ))
        }
    </div>  
    
)


export default ShopPage;

