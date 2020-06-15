import React from 'react';
import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selector';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.components';


const CollectioPage =({match}) => {
    // const shops = useSelector(state => state.shop)
    const cateId = useSelector(selectCollection(match.params.categoryId));
    console.log(cateId);

    return (
        <div className='collection-page'>
            <h2 className='title'>{cateId.title.toUpperCase()}</h2>
            <div className='items'>
                {cateId.items
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))};
            </div>
        </div>
    )
}



export default CollectioPage;
