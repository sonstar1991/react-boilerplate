import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
const App = () => {
  return (
   
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>

  );
};

export default App;
