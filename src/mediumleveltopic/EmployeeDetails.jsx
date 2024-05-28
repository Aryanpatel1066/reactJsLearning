import React from 'react';
import { Link, useParams } from 'react-router-dom';

const employees = [
  { id: 1, name: 'Jack Smith', level: 2, dept: 'Tech', designation: 'Manager', salary: 24000 },
  { id: 2, name: 'Mary Robbins', level: 3, dept: 'Fin', designation: 'Manager', salary: 28000 },
  { id: 3, name: 'Steve Williams', level: 4, dept: 'Ops', designation: 'President', salary: 35000 },
  { id: 4, name: 'Bob Andrews', level: 1, dept: 'Fin', designation: 'Trainee', salary: 16500 },
  { id: 5, name: 'Dave Martin', level: 2, dept: 'Fin', designation: 'Manager', salary: 21700 },
  { id: 6, name: 'Julia Clarke', level: 3, dept: 'Ops', designation: 'Manager', salary: 26900 },
  { id: 7, name: 'Kathy Jones', level: 4, dept: 'Tech', designation: 'President', salary: 42500 },
  { id: 8, name: 'Tom Bresnan', level: 2, dept: 'Tech', designation: 'Manager', salary: 22200 },
];

export default function EmployeeDetails() {
  const { id } = useParams();
  const employeeId = parseInt(id);  // Ensure ID is converted to an integer
  const employee = employees.find(emp => emp.id === employeeId);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h2>{employee.name}</h2>
      <p>ID: {employee.id}</p>
      <p>Level: {employee.level}</p>
      <p>Department: {employee.dept}</p>
      <p>Designation: {employee.designation}</p>
      <p>Salary: {employee.salary}</p>
      <Link to="/category">see all</Link>
    </div>
  );
}
