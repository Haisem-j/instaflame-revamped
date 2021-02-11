import React, {useState} from 'react'
import { connect } from "react-redux";
import { isLoggedIn, loginToken, setUser} from "../../actions";
import { Link } from "react-router-dom";
import backendRoute from '../../Utils'

function Login(props){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const mySubmitHandler = async event=>{
        event.preventDefault();
        console.log(backendRoute);
        const user = {
          username: username,
          password: password,
        };
        console.log('user here');
        console.log(user);
    
        try {
          let response = await fetch(`${backendRoute}/auth/login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json"
            }
          });
    
          let result = await response.json();
          props.setUser(user.username)
          props.loginToken('TOKEEEN')
          props.isLoggedIn(true);
        } catch (err) {
          console.log(err);
        }
    }

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
                  <Link to="/register">
                    <button className="button is-info is-small">Sign Up</button>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}

const mapStateToProps = state => {
    return state;
  };
  
  export default connect(mapStateToProps, {
    isLoggedIn,
    loginToken,
    setUser
  })(Login);
  