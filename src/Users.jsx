import { use } from "react";
import User from "./User";


const Users = ({postUser}) => {


    const  user = use(postUser)
    console.log(user);

    return (
        <div>
           {
            user.map(user => <User user={user}></User>)
           }
        </div>
    );
};

export default Users;