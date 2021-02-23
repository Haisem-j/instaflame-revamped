import React, {useState} from "react";
import { connect } from "react-redux";
import * as utils from '../../Utils'
import {isLoggedIn, loginToken} from '../../actions'


function CreatePicture(props){
  const [works, setWorks] = useState(false)
  const [desc, setDesc] = useState('')
  

  const mySubmitHandler = async event => {
    event.preventDefault();
    try {
      let file = event.target.file;
      const formData = new FormData();
      formData.append("image", file.files[0]);
      formData.append("description", desc);
      formData.append('username', props.getUser)

      let response = await fetch(`${utils.backendRoute}/posts/upload`, {
        method: "POST",
        headers: {
          "jwt": props.setToken,
        },
        body: formData
      });

      let result = await response.json();
      if(result.msg === "Token is expired"){
        props.loginToken('')
        props.isLoggedIn(false)

      }else{
        setWorks(true)
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="hero has-background-light custom-border-top is-fullheight">
      <div className="custom-container-create-post">
        <div className="custom-create-post">
          <h1 className="title" style={{ textAlign: "center" }}>
            Upload Image
          </h1>
          {
            works ? (
              <div className="notification is-success" style={{ textAlign: "center" }}> Image Successfully Uploaded!! </div>
            ) : null
          }
          <form onSubmit={mySubmitHandler}>
            <fieldset>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Enter description here..."
                    name="description"
                    onChange={e => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="file" style={{ marginBottom: "15px" }}>
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="file"
                    id="file"
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">Choose a file…</span>
                  </span>
                </label>
              </div>
              <div
                className="field is-grouped"
                style={{ justifyContent: "center" }}
              >
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}




const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {
  isLoggedIn,
  loginToken
})(CreatePicture);
