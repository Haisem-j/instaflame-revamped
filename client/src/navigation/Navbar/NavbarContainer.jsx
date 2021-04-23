import NavbarView from "./NavbarView";

import { isLoggedIn } from "../../actions";
import { connect } from "react-redux";
import * as utils from "../../Utils";

const NavbarContainer = ({ isLoggedIn, setToken, getUser }) => {
  const logoutHandler = async () => {
    try {
      isLoggedIn(false);
      let response = await fetch(`${utils.backendRoute}/auth/logout`, {
        headers: {
          jwt: setToken,
        },
      });
      await response.json();
    } catch (err) {
      console.log("err");
    }
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
