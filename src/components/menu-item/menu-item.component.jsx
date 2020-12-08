import React from 'react';

import './menu-item.styles.scss';

//lo style permette di aggiungere del css direttamente nel component
const MenuItem = ({title, imageUrl, size} //al posto del props
    ) => (
    <div className={`${size} menu-item`}>   
    
    <div 
        className='background-image'
        style={{backgroundImage:`url(${imageUrl})`}}
    />

        <div className='content'>
             <h1 className='title'>{title.toUpperCase()}</h1>
             <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;