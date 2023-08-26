import React from "react";
import "./Table.css";


const Table
 = () => {
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th className="expand"> User Information</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Arnold</td>
                <td>Tobayiwa</td>
                <td>male </td>
                <td>Quincy@any.com</td>
            </tr>
            <tr>
                <td>Arnold</td>
                <td>Tobayiwa</td>
                <td>male </td>
                <td>Quincy@any.com</td>
            </tr>
            <tr>
                <td>Arnold</td>
                <td>Tobayiwa</td>
                <td>male </td>
                <td>Quincy@any.com</td>
            </tr>
            <tr>
                <td>Arnold</td>
                <td>Tobayiwa</td>
                <td>male </td>
                <td>Quincy@any.com</td>
            </tr>


        </tbody>
      </table>
    </div>
  )
}

export default Table




