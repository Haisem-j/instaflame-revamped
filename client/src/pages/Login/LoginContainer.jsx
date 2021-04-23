import { useState } from "react";

import LoginView from "./LoginView";

import { connect } from "react-redux";
import { isLoggedIn, loginToken, setUser } from "../../actions";

import { authLogin } from "../../services";

const LoginContainer = ({ setUser, loginToken, isLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something went wrong....");

  const mySubmitHandler = async (event) => {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    authLogin(user).then((result) => {
      if (result.success) {
        let lUser = {
          username,
          password,
          token: result.data.token,
        };
        localStorage.setItem("user", JSON.stringify(lUser));
        setUser(user.username);
        loginToken(result.data.token);
        isLoggedIn(true);
      } else {
        setErrorMessage(result.msg);
        setIsError(true);
      }
    });
  };
  return (
    <>
      <LoginView
        setUsername={setUsername}
        setPassword={setPassword}
        mySubmitHandler={mySubmitHandler}
        isError={isError}
        errorMessage={errorMessage}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  isLoggedIn,
  loginToken,
  setUser,
})(LoginContainer);
