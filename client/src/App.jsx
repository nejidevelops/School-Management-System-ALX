import { Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./screens/LogIn/LogIn";
import Register from "./screens/Register/Register";
import "./App.css";
import { useEffect, useState } from "react";
import { verify } from "./services/users";
import Main from "./components/Main/Main";
import LogOut from "./screens/LogOut/LogOut";

function App() {
  const [authorized, setAuthorized] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const reverify = async () => {
      try {
        const currUser = await verify();
        setUserData(currUser);
        setAuthorized(true);
      } catch (error) {
        setAuthorized(false);
      }
    };
    reverify();
  }, []);

  return authorized === true || authorized === false ? (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LogIn authorized={authorized} setUserData={setUserData} />
        </Route>
        <Route exact path="/register">
          <Register authorized={authorized} setUserData={setUserData} />
        </Route>
        <Route exact path="/logout">
          <LogOut />
        </Route>
        <Route>
          {authorized ? (
            <Main userData={userData} setUserData={setUserData} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
