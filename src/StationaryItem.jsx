export default function StationaryItem({items,name}){
    return(
        <>
        <h2>name:{name}</h2>
        <h3>items:{items.map(item=>{
            
            return(
                <li>
                    {item}
                </li>
            )
            })}</h3>
        </>
    )
}