import React from "react";
import CollectionItem from '../collection-item/collection-item.components';
import './preview-collection.components.scss';
import { Link } from 'react-router-dom';

const PreviewCollection = ({ title, items }) => (
    <div className='PreviewCollection'>
        <Link to={'/shop/' + title.toLowerCase() }><h1 className='title'>{title.toUpperCase()}</h1></Link>
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