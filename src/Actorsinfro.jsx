import React from 'react';
import ActorFuctionWork from './ActorFuctionWork';


const Actorsinfro = () => {
    const Actorinfo = [
        {
            name: "Shakib Khan",
            age: 44,
            profession: "Film Actor"
        },
        {
            name: "Manna",
            age: 60,
            profession: "Film Actor"
        },
        {
            name: "Riaz",
            age: 52,
            profession: "Film Actor"
        },
        {
            name: "Ananta Jalil",
            age: 46,
            profession: "Actor & Producer"
        },
        {
            name: "Rubel",
            age: 55,
            profession: "Action Film Actor"
        }
    ];


    return (
        // <div style={{margin:"10px"}}>
        //     {
        //         banglaActors.map(actor => <ActorFuctionWork actor={actor}/>)
        //     }
        // </div>

        <div>

            {
                Actorinfo.map(info=><ActorFuctionWork info={info}/>)
            }
        </div>
    );
};

export default Actorsinfro;