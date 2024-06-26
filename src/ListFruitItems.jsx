export default function ListFruitItems(){
    const fruits = [
        { id: 1, name: "Apple", price: 20 },
        { id: 2, name: "Orange", price: 54 },
        { id: 3, name: "Grapes", price: 30 },
        { id: 4, name: "Pineapple", price: 70 }
      ];
    return(
        <>
       {
        fruits.map(({name,price,id})=>{
            return(
                <div key={id}>
                    {name} :INR {price}
                </div>
            )
        })
       }
        </>
    )
}