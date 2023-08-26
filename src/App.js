import { useState } from "react";
import "./App.css";
import React from "react";
import Table from "./components/Table";
import Data from "./components/Data";


function App() {
  const {fieldOpen, setFieldOpen}= useState(false);
  return(
    <div>
      <Table/>
      <button className="btn" onClick={()=>setFieldOpen(true)}>
        Add User</button>
    {fieldOpen && <Data closeField={()=>setFieldOpen(false)}/>}
    </div>
);
}

export default App;
