import { Link } from "react-router-dom";
import { REGISTER } from '../../navigation/CONSTANTS'
const LoginView = ({ setPassword, setUsername, mySubmitHandler, isError, errorMessage }) => {
  return (
    <section className="hero has-background-light is-fullheight ">
      <div className="custom-login">
        <div className="box">
          <div className="custom-flex">
            <span className="icon is-size-1" style={{ marginTop: "5px" }}>
              <ion-icon name="flame"></ion-icon>
            </span>

            <h1 className="is-size-4">InstaFlame</h1>
          </div>

          <form onSubmit={mySubmitHandler}>
            {isError === true ? (
              <div className="button is-danger m-bottom">{errorMessage}</div>
            ) : (
              ""
            )}
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="user"
                  name="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control custom-login-button">
                <button className="button is-success is-small">Login</button>
                <Link to={REGISTER}>
                  <button className="button is-info is-small">Sign Up</button>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginView;