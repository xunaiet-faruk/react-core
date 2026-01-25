
import { Suspense } from 'react';
import Actorsinfro from './Actorsinfro';
import './App.css'
import Statemangment from './Statemangment';
import Todo from './Todo';
import Users from './Users';

function App() {
 

  const fetchUsers = async() =>{
    const userApi = await fetch("https://jsonplaceholder.typicode.com/users")
    return userApi.json();
  }

  const postUser =fetchUsers();

  return (
   <>
   
      {/* <div>
        <h1>Hellow world</h1>


        <Todo task="Hellow here task." />
        <Todo isTrue={true} />
        <Todo isFalse={false} />
        <Todo isNumber={12} />
      </div> */}
   

{/* 
   <div>

    <Actorsinfro/>
   </div> */}


   <div>
    <Suspense fallback={<h2>User are comming</h2>}>
      <Users postUser={postUser}></Users>
    </Suspense>
   </div>

   <Statemangment/>
   
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
