import Navbar from './components/Navbar'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Body from "./components/Home";
import Profile from './components/Profile'
import CreatePicture from './components/CreatePicture'
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  const loggedTrue = () =>{
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/register">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Body} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/profile/:profile" component={Profile} />
          <Route exact path="/upload" component={CreatePicture} />
          <SignUp />
        </Switch>
      </div>
    )
  }

  const loggedFalse = () =>{
      return(
        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/home">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/profile/:profile">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/upload">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
          </Switch>
        </div>
      )
  }
  return (
    <div>
        {props.loggedIn ? loggedTrue() : loggedFalse()}
    </div>
  )
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, null)(App);
