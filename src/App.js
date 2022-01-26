import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  const [listDataVal, setListDataVal] = useState([]);
  const formData = (value) => {
    setListDataVal((prevValue) => {
      return [...prevValue, value];
    });
  };

  return (
    <>
      <div className="main">
        <h1 className="title-content">User Details</h1>
        <UserForm userFormData={formData} />
        <UserList ListDatas={listDataVal} setListDataVal={setListDataVal} />
      </div>
    </>
  );
};

export default App;
