import NavbarView from "./NavbarView";

import { isLoggedIn, loginToken, setUser } from "../../actions";
import { connect } from "react-redux";
import { authLogout } from "../../services";

const NavbarContainer = ({ isLoggedIn, setToken, getUser }) => {
  const logoutHandler = async () => {
    authLogout(setToken).then((res) => {
      localStorage.clear();
      loginToken("");
      setUser("");
      isLoggedIn(false);
    });
  };

  return (
    <>
      <NavbarView logoutHandler={logoutHandler} getUser={getUser} />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  isLoggedIn,
})(NavbarContainer);
