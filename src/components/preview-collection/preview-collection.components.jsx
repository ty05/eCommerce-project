import React from "react";
import CollectionItem from '../collection-item/collection-item.components';
import './preview-collection.components.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='PreviewCollection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <h2>hello world</h2>
        <div className='preview'>
            {items
            .filter((item,idx)=>idx<4)
            .map((item) => (
                <CollectionItem key={item.id} item={item}/>
            ))};
        </div>
    </div>
)

export default PreviewCollection;