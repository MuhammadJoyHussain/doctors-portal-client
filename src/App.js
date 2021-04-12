import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUesr, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUesr, setLoggedInUser]} >
      <Router>
        <Switch>

          <Route path="/appointment">
            <Appointment />
          </Route>
          
          <Route path="/dashboard/appointment">
            <Dashboard />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
