import { useState } from "react";
import "./App.css";
import React from "react";
import Table from "./components/Table";
import Data from "./components/Field";


function App() {
  const {DataOpen, setDataOpen}= useState(false);
  return(
    <div>
      <Table/>
      <button className="btn" onClick={()=>setDataOpen(true)}>
        Add User</button>
    {DataOpen && <Data closeData={()=>setDataOpen(false)}/>}
    </div>
);
}

export default App;
