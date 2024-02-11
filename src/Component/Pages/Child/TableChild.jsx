import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { ParentContext } from '../../Parent/Parent'
import'./table.css'
import { useNavigate } from 'react-router'

//Child Component
const TableChild = () => {
const {employees}=useContext(ParentContext)
const navigate = useNavigate()

  return (
    <div className="table-sec">
      <h1>Employees</h1>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>

          {
            employees.map((item)=>{
              return(
                <tbody>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_age}</td>
                    <td>{item.employee_salary}</td>
                  </tr>
                </tbody>
              )
            })
          }
        </Table>
        <div className='btn-1'>
          <button onClick={()=>navigate('/')}>Back</button>
        </div>
    </div>
  )
}

export default TableChild
