import { useState, useEffect } from "react";
import { connect } from "react-redux";

import HomeView from "./HomeView";

import { getAllPosts } from "../../services";

const HomeContainer = ({ setToken, getUser }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(setToken).then((res) => setPosts(res));
  }, [setToken]);
  return (
    <>
      <HomeView posts={posts} getUser={getUser} />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(HomeContainer);
