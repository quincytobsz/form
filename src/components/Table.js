import React from "react";
import "./Table.css";

export const Table = ({ rows}) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>User Information</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
             return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td>{row.lastname}</td>
                <td >{row.userInformation}</td>
                <td>{row.email}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};



