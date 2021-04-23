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

import { ROOT, LOGIN, REGISTER, PROFILE, UPLOAD, HOME } from "./CONSTANTS";

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
          <Route exact path={LOGIN}>
            <Redirect to={HOME} />
          </Route>
          <Route exact path={REGISTER}>
            <Redirect to={HOME} />
          </Route>
          <Route exact path={HOME} component={Home} />
          <Route exact path={ROOT}>
            <Redirect to={HOME} />
          </Route>
          <Route exact path={PROFILE} component={Profile} />
          <Route exact path={UPLOAD} component={CreatePicture} />
        </Switch>
      </div>
    );
  };

  const loggedFalse = () => {
    return (
      <div>
        <Switch>
          <Route exact path={ROOT}>
            <Redirect to={LOGIN} />
          </Route>
          <Route exact path={HOME}>
            <Redirect to={LOGIN} />
          </Route>
          <Route exact path={PROFILE}>
            <Redirect to={LOGIN} />
          </Route>
          <Route exact path={UPLOAD}>
            <Redirect to={LOGIN} />
          </Route>
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={REGISTER} component={Register} />
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
