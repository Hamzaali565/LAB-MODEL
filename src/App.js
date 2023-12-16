import { useState } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Header from "./components/Header/Header";
import Input from "./components/Inputs/Input";
import LabelInput from "./components/Inputs/LabelInput";
import Test from "./Screens/TestScreen/Test";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-slate-800">
      <Header
        onClick={() => {
          setShow(!show);
        }}
        icon={show ? "uil uil-bars" : "uil uil-times"}
      />
      <div className="main bg-slate-800">
        <div className={show ? "hidden" : "flex"}>
          <Sidebar />
        </div>
        <div className="container">
          <Test />
        </div>
      </div>
    </div>
  );
}

export default App;
