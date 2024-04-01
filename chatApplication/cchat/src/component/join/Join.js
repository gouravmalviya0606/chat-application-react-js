import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;
const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {
  const [name, setName] = useState("");

  return (
    <div className="joinPage">
      <div className="joinContainer">
        <img src={logo} alt="" />
        <h1>C-Chat By</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
        />
        {/* e.preventDefault() agr name blank hua toh to="/chat" nhi chalega  */}
        <Link onClick={(e) => (!name ? e.preventDefault() : null)} to="/chat">
          <button onClick={sendUser} className="joinbtn">
            Login In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
