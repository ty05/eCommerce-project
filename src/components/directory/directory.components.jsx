import React from 'react';
import Sections from './sections';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';


function Directory(){

    return(
        <div className='directory-menu'>
            {Sections.map((section,index) => (
                <MenuItem 
                key={index}
                id={section.id}
                title={section.title}
                imagUrl={section.imageUrl}
                size={section.size}
                linkUrl={section.linkUrl}
                ></MenuItem>
            ))}
        </div>
    )
}

export default Directory;