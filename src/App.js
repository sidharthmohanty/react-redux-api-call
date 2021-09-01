import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import TopNavbar from "./components/layouts/Navbar";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = window.localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
      <Router>
        <TopNavbar />
        {!isLoggedIn ? (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
