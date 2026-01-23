import React, { useState } from 'react';

const Statemangment = () => {
    const [count,setCount] =useState(0);
    const [run,setRun] =useState(0);
    const [runin,setRunin] =useState();

    const handleClick = () =>{
        const ballcount =count + 1;
        setCount(ballcount)
    }


    const handleCount = () =>{

        const runrate= run+ 1;
        setRun(runrate)

    }

    const handleSix = () =>{

const runicrease = run -1;
setRun(runicrease)

    }
    return (
       <>
            <div style={{
                border: "2px solid red",
                padding: "50px",
                marginBottom : "50px"
            }}>
                <h1>Sakib Bolling {count}</h1>
                {
                    count >= 6 && <p>your over close</p>
                }
                <button onClick={handleClick}>Ball</button>
            </div>


            <div style={{
                border: "4px dotted green",
                padding: "50px",
                marginBottom:"200px"
            }}>

                <h1>Run score {run}</h1>
                <button onClick={handleCount}>Count</button>
                <button onClick={handleSix}>Mines</button>

            </div>
       
       </>
    );
};

export default Statemangment;