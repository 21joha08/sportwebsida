import React from 'react';
import '../Service/AllsvenskanAPI.js'
import './Allsvenskan.css';
import useFetch from '../Service/AllsvenskanAPI.js';


function Allsvenskan() {
    const [records] = useFetch();

    return (
        <>
            <div><h1>Allsvenskan Teams</h1></div>

            <div className='image-container border border-primary border-3'>
                {records.map((team, index) => (
                    <div key={team.id} className="logo-list text-center">
                        <img src={team.logos.small} alt={team.name} />
                    </div>
                ))}
            </div>
            
            <div className="row m-4">
                
            </div>

        </>
    );
}

export default Allsvenskan;