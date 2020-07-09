import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

// custom imports
import "./App.css";
import Weather from "./components/Weather";

toast.configure();

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
