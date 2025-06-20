const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 9 },
  ]
export default function MyShop(){
    const filtereItem = products.filter(({name,quantity,sales})=> sales > quantity);
    console.log(filtereItem)
    return(
        <>
        <h1>products:</h1>
        <ul>{products.map(({name})=>(
             <li>{name}</li>
        ))}</ul>
        <h5>sales more :</h5>
        <ul>
           {
            filtereItem.map(({name,sales,quantity})=>(
                <li>name:{name},sales:{sales},quantity:{quantity}</li>
            ))
           }
        </ul>
        </>
    )
}