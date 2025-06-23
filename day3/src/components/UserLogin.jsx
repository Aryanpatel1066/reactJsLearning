function UserLogin(props){
    return(
        <>
          {
        props.isLogin
          ? <h2 style={{color:'green'}}>Hey! {props.name}</h2>
          : <h2 style={{color:"red"}}>Please login</h2>
      }
        </>
    )
}
UserLogin.defaultProps ={
    name:"guest",
    isLogin:false
}
export default UserLogin;