import React, { useContext, useState } from "react";
import TableChild from "../Child/TableChild";
import { ParentContext } from "../../Parent/Parent";
import { Navigate, useNavigate } from "react-router";
import "./form.css";
const Form = () => {
  const navigate = useNavigate();
  const { setEmployees, employees } = useContext(ParentContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [salary, setSalary] = useState("");

  const handleSubmit = () => {
    let detail = {
      name: name,
      age: age,
      salary: salary,
    };
    setEmployees([...employees, detail]);
    setName("");
    setAge("");
    setSalary("");
    navigate("/Table");
  };
  return (
    <div className="form">
      <div className="form-sec-1">
        <h1>Form</h1>
      </div>
      <div className="form-title">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

    </div>
  );
};

export default Form;
