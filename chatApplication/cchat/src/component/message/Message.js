import React from "react";
import "./Message.css";

const Message = ({ user, message, classs }) => {
  if (user) {
    return (
      <div className={`messageBox ${classs}`}>{`${user} : ${message}`}</div>
    );
  } else {
    console.log(classs);
    return <div className={`messageBox ${classs}`}>{`you : ${message}`}</div>;
  }
};

export default Message;
