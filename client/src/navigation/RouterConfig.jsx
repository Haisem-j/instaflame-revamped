import CreatePicture from "../pages/UploadPicture/UploadPictureContainer";
import Profile from "../pages/Profile/ProfileContainer";
import Home from "../pages/Home/HomeContainer";
import Login from "../pages/Login/LoginContainer";
import Register from "../pages/Register/RegisterContainer"
import Navbar from './Navbar/NavbarContainer'

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const RouterConfig = ({ loggedIn }) => {
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

  return <div>{loggedIn ? loggedTrue() : loggedFalse()}</div>;
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(RouterConfig);
