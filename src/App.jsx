
import './App.css'
import Todo from './Todo';

function App() {
 

  return (
    <>
     <h1>Hellow world</h1>
     

      <Todo  task="Hellow here task."/>
      <Todo isTrue={true}/>
            <Todo isFalse={false}/>
            <Todo isNumber={12}/>
    </>
  )
}


// function Name(){
//   const age =12;
//   return(
//     <>
//     <h2>i am xunaiet farukk {age} </h2>
//     </>
//   )
// }


export default App
