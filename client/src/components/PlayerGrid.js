import React from 'react';

import PlayerCard from './PlayerCard';

const PlayerGrid = (props) => {


    return (
        <div>
            {Array.from(props.players).map(player => (
                <PlayerCard 
                key={player.id}
                name={player.name}
                country={player.country}
                />
            ))}
            
        </div>
    )
}

export default PlayerGrid