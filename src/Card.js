import React from 'react';
import './Card.css';



const Card = ({pokeName, pokeId}) =>{


    
    return(
        <div className='f7 tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
            
            <>
                <h1>{pokeName}</h1>
                <h1>{pokeId}</h1>
            </>
        </div>
    )
}

export default Card;