import React from 'react';
import Table from 'react-bootstrap/Table'

//import {employeelist} from '../../data/employeelist';
import {useSelector} from 'react-redux'

import './employee-list.css'

function EmployeeList(props) {
    var employeelist = useSelector((state) => {
        return state.employeeDetails.employeelist;
      });
    return(
        <div className = "employeelistcontainer">
            <h1 className = "employeelistheader">Employee List</h1>
            <Table striped bordered hover size="sm">
                <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Email</th>
      <th>phone Number</th>
    </tr>
  </thead>
  <tbody>
      {
        employeelist.user === undefined ? null : 
          employeelist.user.map((employee, index) => {
            return(
                <tr id = {index}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNo}</td>
                </tr>
            )
          })
      }
  </tbody>
</Table>
        </div>
    );

}

export default EmployeeList;