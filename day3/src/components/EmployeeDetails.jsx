export default function EmployeeDetails({employees}){
    return(
        <>
        <h3>employees details</h3>
        <div> {employees.map(({name,salary,dept,level,designation})=>(
            <li key={index}style={{background:level>2?"orange":"",border:designation === "President"?"2px solid red":""}}>name:{name},level{level},dept:{dept},designation:{designation},salary:{salary}</li>
        ))}</div>
        <h4>Total Salary Expense:{employees.reduce((curr,acc)=>curr+acc.salary,0)}</h4>
        </>
    )
}