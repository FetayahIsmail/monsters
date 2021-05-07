import React from 'react';
import Card from '../card/card';
import './cards.css'
const Cards = (props) => {
    return ( 
        <div className="container">
            {props.monsters.map((e)=>(
                <Card key={e.id} monsterName={e.name} imgSrc={e.id} />
            ))}
            
        </div>
     );
}
export default Cards;