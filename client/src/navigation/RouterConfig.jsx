import { useEffect } from "react";

import CreatePicture from "../pages/UploadPicture/UploadPictureContainer";
import Profile from "../pages/Profile/ProfileContainer";
import Home from "../pages/Home/HomeContainer";
import Login from "../pages/Login/LoginContainer";
import Register from "../pages/Register/RegisterContainer";
import Navbar from "./Navbar/NavbarContainer";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isLoggedIn, loginToken, setUser } from "../actions";

const RouterConfig = ({ loggedIn, setUser, loginToken, isLoggedIn }) => {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      setUser(foundUser.username);
      loginToken(foundUser.token);
      isLoggedIn(true);
    }
  }, []);
  const loggedTrue = () => {
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
          <Route exact path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/profile/:profile" component={Profile} />
          <Route exact path="/upload" component={CreatePicture} />
        </Switch>
      </div>
    );
  };

  const loggedFalse = () => {
    return (
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
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    );
  };
  console.log(loggedIn);
  return <div>{loggedIn ? loggedTrue() : loggedFalse()}</div>;
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {
  isLoggedIn,
  loginToken,
  setUser,
})(RouterConfig);
