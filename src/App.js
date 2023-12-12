import { useState } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Header
        onClick={() => {
          setShow(!show);
        }}
      />
      <div className="main bg-slate-800">
        <div className={show ? "hidden" : "flex"}>
          <Sidebar />
        </div>
        <div className="container">hi!..............................</div>
      </div>
    </div>
  );
}

export default App;
