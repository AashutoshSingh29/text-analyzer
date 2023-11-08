import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import {
  
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [alert,setAlert] = useState(null)
  const showAlert = (message, typee) =>{
    setAlert({
      msg:message,
      type: typee
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    
  }
  

  return (
    <>
      

      <Navbar title="All In One" />
      <Alert Alert={alert} />
      
        <div className="container">

          <Routes>
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter text to Evaluate" />}>
              
            </Route>
            <Route path="/about" element={<About/>}>
            </Route>
            
          </Routes>
        </div>
      
      
      
    </>
  );
}

export default App;
