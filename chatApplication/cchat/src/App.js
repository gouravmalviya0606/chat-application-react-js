import socketIO from "socket.io-client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Join from "./component/join/Join";
import Chat from "./component/chat/Chat";

// const ENDPOINT = "http://localhost:4500/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {
  // socket.on("connection", () => {});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
