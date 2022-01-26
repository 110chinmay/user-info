import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const inputName = (e) => {
    setUserName(e.target.value);
  };

  const inputAge = (e) => {
    setUserAge(e.target.value);
  };

  const formOnSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || userAge === "") {
      alert("Enter Input Details");
      return;
    }
    if (userAge < 1) {
      alert("Enter Valid Age");
      return;
    }
    let userDataValues = { userName, userAge };
    props.userFormData(userDataValues);
    setUserName("");
    setUserAge("");
  };

  return (
    <form onSubmit={formOnSubmit} className="userForm">
      <div>
        <label className="label">Enter the Name </label>
        <input value={userName} onChange={inputName} className="input" />
      </div>
      <br></br>
      <div>
        <label className="label">Enter the age </label>
        <input
          type="number"
          value={userAge}
          onChange={inputAge}
          className="input"
        />
      </div>
      <br />
      <input type="submit" value="Submit" className="submit" />
      <br />
    </form>
  );
};

export default UserForm;
