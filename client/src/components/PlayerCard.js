import React from 'react';

const PlayerCard = (props) => {


    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.country}</h3>
            <p>Searches: {props.searchNumber}</p>
        </div>
    )
} 

export default PlayerCard