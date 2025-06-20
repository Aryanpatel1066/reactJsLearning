const employees = [
    {
      name: 'Jack Smith',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 24000,
    },
    {
      name: 'Mary Robbins',
      level: 3,
      dept: 'Fin',
      designation: 'Manager',
      salary: 28000,
    },
    {
      name: 'Steve Williams',
      level: 4,
      dept: 'Ops',
      designation: 'President',
      salary: 35000,
    },
    {
      name: 'Bob Andrews',
      level: 1,
      dept: 'Fin',
      designation: 'Trainee',
      salary: 16500,
    },
    {
      name: 'Dave Martin',
      level: 2,
      dept: 'Fin',
      designation: 'Manager',
      salary: 21700,
    },
    {
      name: 'Julia Clarke',
      level: 3,
      dept: 'Ops',
      designation: 'Manager',
      salary: 26900,
    },
    {
      name: 'Kathy Jones',
      level: 4,
      dept: 'Tech',
      designation: 'President',
      salary: 42500,
    },
    {
      name: 'Tom Bresnan',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 22200,
    },
  ]
export default function EmployeeDetails(){
    return(
        <>
        <h1 style={{color:"blueviolet"}}>employee details:</h1>
        <ul>
            {
                employees.map(({name,level,dept,designation,salary})=>(
                    <li style={{backgroundColor:level==2?"orange":"",border:designation=="President"?"3px solid red":""}}>
                   name:{name}, level:{level}, dept:{dept}, designation:{designation}, salary:{salary}
                    </li>
                ))
            }
            <h3>Total salary Expanse:</h3>
            {
                employees.reduce((totalSalary,item)=>totalSalary+=item.salary,0)
            }
        </ul>
        </>
    )
}