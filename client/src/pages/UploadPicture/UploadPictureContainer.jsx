import UploadPictureView from "./UploadPictureView";

import { useState } from "react";
import { isLoggedIn, loginToken } from "../../actions";
import { connect } from "react-redux";

import { uploadPicture } from '../../services'

const UploadPictureContainer = ({ getUser, setToken, loginToken, isLoggedIn }) => {
  const [works, setWorks] = useState(false);
  const [desc, setDesc] = useState("");

  const mySubmitHandler = async (event) => {
    event.preventDefault();
    
    uploadPicture(setToken, event.target.file, desc, getUser).then(result =>{
      if (result.msg === "Token is expired") {
        loginToken("");
        isLoggedIn(false);
      } else {
        setWorks(true);
      }
    })
  };

  return (
    <>
      <UploadPictureView works={works} setDesc={setDesc} mySubmitHandler={mySubmitHandler}/>
    </>
  );
};

const mapStateToProps = state => {
    return state;
  };
  export default connect(mapStateToProps, {
    isLoggedIn,
    loginToken
  })(UploadPictureContainer);
  