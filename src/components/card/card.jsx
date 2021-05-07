import React from 'react';
import './card.css';
const Card = (props) => {
    return ( 
        <div className="card">
            <img srcSet={`https://robohash.org/${props.imgSrc}?set=set2&size=180x180`} src="" alt=""/>
            <h1>{props.monsterName}</h1>
        </div>
     );
}
 
export default Card;