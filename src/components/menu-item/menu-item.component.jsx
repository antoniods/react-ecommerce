import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

//lo style permette di aggiungere del css direttamente nel component
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (

     <div
         className={`${size} menu-item`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}
     >

      <div
        className='background-image' // background
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      
      <div className='content' // testo 
      >
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
// withRouter è una funzione che ci permette di poternziare un componente et di fare un retourn per ritrovarcelo potenziato
export default withRouter(MenuItem);