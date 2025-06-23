function Stationary({header,items,products}){
    console.log(items)
     products.sort((a,b)=>b.sales-a.sales)
    return(
        <>
        <h1>{header}</h1>
        {
            items.map((item)=>(
                <li key={item}>
                    {item}
                </li>
            ))
        }
        <h3 style={{color:"GrayText"}}>product listing:</h3>
        <li>{
            products.map(({name,quantity,sales})=>(
                <li>name:{name},quantity:{quantity},sales:{sales}</li>
            ))}
        </li>
        


        </>
    )
}
export default Stationary;