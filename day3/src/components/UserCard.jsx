 
 
 // UserCard.jsx
function UserCard({ userInfoObj, name, age }) {
  return (
    <>
      {userInfoObj && (
        <h5>From Object – name: {userInfoObj.name}, age: {userInfoObj.age}</h5>
      )}
      {name && (
        <h5>From Props – name: {name}, age: {age}</h5>
      )}
    </>
  );
}
UserCard.defaultProps={
    name:"ary"
}
export { UserCard };
