import { useState } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Header from "./components/Header/Header";
import Input from "./components/Inputs/Input";
import LabelInput from "./components/Inputs/LabelInput";

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
        <div className="container">
          <LabelInput />
        </div>
      </div>
    </div>
  );
}

export default App;
