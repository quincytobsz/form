import { useState } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { Data } from "./components/Data";

function App() {
  const [DataOpen, setDataOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      name: "Arnoe",
      lastname: "Tbs",
      userInformation: "Male",
      email:"arnoetbs@hoo.com",
    },
    {
      name: " Jj",
      lastname: "Okocha",
      userInformation: "Male ",
      email:"jjokocha@yahoo.com",
    },
    {
      name: "mik",
      lastname: "aenda",
      userInformation: " Female",
      email:"mkaenda@gmail.com",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setDataOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setDataOpen(true)} className="btn">
        Add
      </button>
      {DataOpen && (
        <Data
          closeData={() => {
            setDataOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;