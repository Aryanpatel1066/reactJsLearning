function Btn(){
     const hello=(name)=>{
    console.log(`hey ${name}`)
     }
    return(
        <>
        <button onClick={hello("aryan")}>click me</button>
        <button onClick={()=>hello("ab")}>click me 2</button>
        </>
    )
}
export default Btn;