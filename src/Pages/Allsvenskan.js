import React from 'react';
import '../Service/AllsvenskanAPI.js'
import './Allsvenskan.css';
import useFetch from '../Service/AllsvenskanAPI.js';


function Allsvenskan() {
    const [logos] = useFetch('teams');
    const [events] = useFetch('events'); 


    return (
        <>
            <div><h1>Allsvenskan Teams</h1></div>

            <div className='image-container border border-primary border-3'>
                {logos.map((team, index) => (
                    <div key={team.id} className="logo-list text-center">
                        <img src={team.logos.small} alt={team.name} />
                    </div>
                ))}
            </div>

            <div className="border border-warning border-3">
            {events.map((events, index) => (
                    <div key={events.id}>
                        {events.id} 
                    </div>
                ))}
            </div>

        </>
    );
}

export default Allsvenskan;