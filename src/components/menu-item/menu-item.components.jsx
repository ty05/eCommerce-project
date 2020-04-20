import React from 'react';
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imagUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={()=> history.push(`${match}${linkUrl}`)}>
    <div 
    className='background-image' 
    style={{
        backgroundImage: `url(${imagUrl})`
    }} />
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem)