import { useState } from "react";

import RegisterView from "./RegisterView";

import { authRegister } from "../../services";

const RegisterContainer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something went wrong....");

  const mySubmitHandler = async (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
      email: email,
    };
    event.target.reset();

    authRegister(user).then((result) => {
      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(result.msg);
        setIsError(true);
      }
    });
  };

  return (
    <>
      <RegisterView
        mySubmitHandler={mySubmitHandler}
        setUsername={setUsername}
        setPassword={setPassword}
        setEmail={setEmail}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage={errorMessage}
        username={username}
      />
    </>
  );
};

export default RegisterContainer;
