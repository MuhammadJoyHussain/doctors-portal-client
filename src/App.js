import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddDoctor from './Components/AddDoctor/AddDoctor';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUesr, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUesr, setLoggedInUser]} >
      <Router>
        <Switch>

        <Route path="/home">
            <Home />
          </Route>

          <Route path="/appointment">
            <Appointment />
          </Route>
          
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <Route path="/patients">
            <AllPatients />
          </Route>

          <Route path="/addDoctor">
            <AddDoctor />
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
