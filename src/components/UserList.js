import React from "react";
import "./UserList.css";

const UserList = ({ ListDatas, setListDataVal }) => {
  const onClickDelete = (ListData) => {
    const newData = ListDatas.filter((item) => ListData !== item);
    setListDataVal(newData);
  };

  const listval = ListDatas.map((ListData) => {
    return (
      <ul key={ListData.userName}>
        <li onClick={() => onClickDelete(ListData)}>
          {ListData.userName} - {ListData.userAge}
        </li>
      </ul>
    );
  });

  return <div className="userList">{listval}</div>;
};

export default UserList;
