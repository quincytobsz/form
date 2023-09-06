import React from "react";
import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th className="expand">User Information</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
             return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td>{row.lastname}</td>
                <td className="expand">{row.userinfomation}</td>
                <td className="fit">
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};



