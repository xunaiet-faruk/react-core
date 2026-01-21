

import './App.css'
const Todo = ({ task, isNumber, isTrue,isFalse}) => {
    return (
        <div>
{/* 
            if(isTrue == true){

                <p style={{ fontSize: "60px", backgroundColor: "gray" }}>Hellow i am {task}</p>

            }else{
                <p style={{ fontSize: "60px", backgroundColor: "white", color: "black" }}>I am true Hurrrrrrrray {isTrue}</p>
            } */}

            {
                isTrue ? <p style={{ fontSize: "60px", backgroundColor: "gray" }}> Hellow i am Hurrrrrrrray {task}</p>
                :
                    <p style={{ fontSize: "60px", backgroundColor: "white", color: "black" }}>I am FAIL  {isTrue}</p>
        

            }

            <div style={{ fontSize: "60px", backgroundColor: "green", color:"black" }}>
            {task}
           </div>
            <div style={{ fontSize: "60px", backgroundColor: "blue", color: "black" }}>
            {isNumber}
           </div>
       
           {/* <div>
            {isFalse}
           </div>
           <div>
            {isTrue}
           </div> */}
        </div>
    );
};

export default Todo;