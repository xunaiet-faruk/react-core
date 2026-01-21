import React from 'react';
import Actorsinfro from './Actorsinfro';

const ActorFuctionWork = ({ info  }) => {
    console.log(info);
  
    return (
        <div style={{padding:"50px", color:"yellow"}}>
            <h2>
                {info.name}
            </h2>
            <p>{info.age}</p>
            <p>{info.profession}</p>
        </div>
    );
};


export default ActorFuctionWork;