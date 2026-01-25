

const User = ({user}) => {
    console.log(user);
    const {name}=user;
    return (
        <div style={{
            border : "2px solid green",
            margin : "10px",
            padding:"10px",
            borderRadius : "30px"
        }}>
            <h1>{name}</h1>
        </div>
    );
};

export default User;