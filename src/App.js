import "./App.css";
import Navbar from "./components/Navbar";
import TextChange from "./components/TextChange";
import React, { useState } from "react"; // imrs (snippit)
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  // for diff theme modes
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode has been disabled", "success");
    }
  };
  // to set Alert
  // Alert is basically a func which gives takes 2 parameteres and give data to alert state where the given data is process and give us the required output in the Atext app
  const showAlert = (message, type) => {
    setAlert({
      aMessage: message,
      aType: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  return (
    <>
      <Router>
        <Navbar title="ATEXT" modeC={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {/* <Home /> */}
            <TextChange modeC={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
