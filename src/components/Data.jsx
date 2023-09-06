import React, { useState } from "react";

import "./data.css";

export const Data = ({ closeData, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
     name: "name",
    lastName: "lastname",
    userInformation: " ",
    email: "email",
      
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.name && formState.lastname && formState.userInformation && formState.email) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeData();
  };

  return (
    <div
      className="field-container"
      onClick={(e) => {
        if (e.target.className === "field-container") closeData();
      }}
    >
      <div className="field">
        <form>
        <div className="field-group">
            <label htmlFor="name">Name</label>
            <textarea
              name="name"
              onChange={handleChange}
              value={formState.name}
            />
          </div>
          <div className="field-group">
            <label htmlFor="lastname">LastName</label>
            <textarea
              name="lastname"
              onChange={handleChange}
              value={formState.lastname}
            />
          </div>
          <div className="field-group">
            <label htmlFor="userInformation">User Information</label>
            <select
              name="userInformation"
              onChange={handleChange}
              value={formState.UserInformation}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="field-group">
            <label htmlFor="email">email</label>
            <textarea
              name="email"
              onChange={handleChange}
              value={formState.email}
            />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
};

