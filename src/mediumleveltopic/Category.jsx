import { Link } from "react-router-dom"
const employees = [
    {
        id:1,
    name: 'Jack Smith',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 24000,
    },
    {
        id:2,
      name: 'Mary Robbins',
      level: 3,
      dept: 'Fin',
      designation: 'Manager',
      salary: 28000,
    },
    {
        id:3,
      name: 'Steve Williams',
      level: 4,
      dept: 'Ops',
      designation: 'President',
      salary: 35000,
    },
    {
        id:4,
      name: 'Bob Andrews',
      level: 1,
      dept: 'Fin',
      designation: 'Trainee',
      salary: 16500,
    },
    {
        id:5,
      name: 'Dave Martin',
      level: 2,
      dept: 'Fin',
      designation: 'Manager',
      salary: 21700,
    },
    {
        id:6,
      name: 'Julia Clarke',
      level: 3,
      dept: 'Ops',
      designation: 'Manager',
      salary: 26900,
    },
    {
        id:7,
      name: 'Kathy Jones',
      level: 4,
      dept: 'Tech',
      designation: 'President',
      salary: 42500,
    },
    {
        id:8,
      name: 'Tom Bresnan',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 22200,
    },
  ]
export default function Category(){
    return(
        <>
          <ul>
            {
                employees.map(({id,name,salary})=>(
                    <li>id:{id}, name:{name}, salary:{salary} 
                      <Link to={`/employee/${id}`}>viewDetails</Link>
                    </li>
                ))
            }
          
          </ul>
         </>
    )
}