import React from "react";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,

  Route,
  Link
} from "react-router-dom";

import "./App.css";

import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabbled", "success");
      document.title = "Dark Mode";
      // setInterval(() => {
      //   document.title='textutils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title='textutils is wow amazing'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabbled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={ <About mode={mode}/>}/>
           
         
         
          <Route exact path="/" element={ <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />}/>
         
          
        </Routes>
       
        
      </div>
      </Router>
    </>
  );
}

export default App;
