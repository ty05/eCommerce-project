import React from 'react';
import Sections from './sections';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';



function Directory(){

    const section = useSelector(selectDirectorySections);

    return(
        <div className='directory-menu'>
            {section.map((sec,index) => (
                <MenuItem 
                key={index}
                id={sec.id}
                title={sec.title}
                imagUrl={sec.imageUrl}
                size={sec.size}
                linkUrl={sec.linkUrl}
                ></MenuItem>
            ))}
        </div>
    )
}

export default Directory;