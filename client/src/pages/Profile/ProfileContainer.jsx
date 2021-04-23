import ProfileView from "./ProfileView";

import { useState, useEffect } from "react";
import { connect } from "react-redux";

import {getProfilePosts} from '../../services'

const ProfileContainer = ({ location, setToken }) => {
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getProfilePosts(setToken, location.pathname.split('/')[2]).then((res) => {
      setName(res.tempName);
      setPosts(res.posts);
    });
  }, [location.pathname, setToken]);
  return (
    <>
      <ProfileView posts={posts} name={name}/>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(ProfileContainer);
