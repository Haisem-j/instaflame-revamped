import React, {useState} from 'react'
import { Link } from "react-router-dom";
import * as utils from '../../Utils'
function SignUp(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('Something went wrong....')

    const mySubmitHandler = async event=>{
        event.preventDefault();

        const user = {
          username: username,
          password: password,
          email: email
        };
    
        try {
          event.target.reset();
          let response = await fetch(`${utils.backendRoute}/auth/registerUser`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json"
            }
          });
    
          let result = await response.json();
          console.log(result);
          if(result.success){
            setIsSuccess(true)
          }else{
            setErrorMessage(result.msg)
            setIsError(true)
          }
        } catch (err) {
          console.log(err);
          setIsError(true)
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
              {isSuccess === true ? (
                <div className="button is-success m-bottom">{`Username ${username} created successfully!!`}</div>
              ) : (
                ""
              )}
              {isError === true ? (
                <div className="button is-danger m-bottom">{errorMessage}</div>
              ) : (
                ""
              )}

              <form onSubmit={mySubmitHandler}>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="username"
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
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      onChange={(e)=>setEmail(e.target.value)}
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
                    <button className="button is-info is-small">Sign Up</button>
                  </p>
                  <div className="content flex-center">
                    <p className="is-size-7">
                      Already have an account?{" "}
                      <Link to="/login" className="no-link">
                        Login here.
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
    )
}
export default SignUp