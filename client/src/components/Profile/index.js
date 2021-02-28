import { useState, useEffect } from "react";
import { connect } from "react-redux";

import HeaderProfile from "./HeaderProfile";
import Post from "./Post";

import * as utils from "../../Utils";

function Profile(props) {
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        let tempName = props.location.pathname.split("/");
        let response = await fetch(
          `${utils.backendRoute}/posts/profile/${tempName[2]}`,
          {
            method: "GET",
            headers: {
              jwt: props.setToken,
            },
          }
        );
        let final = await response.json();
        return {
          posts: final.data,
          tempName: tempName[2],
        };
      } catch (err) {
        console.log(err);
      }
    };
    getPosts().then((res) => {
      setName(res.tempName);
      setPosts(res.posts);
    });
  }, [props.location.pathname, props.setToken]);

  const renderCards = () => {
    if (posts.length === 0) {
      return <div>LOOOOOOOOOOOADING.......</div>;
    } else {
      return posts.map((post) => {
        return (
          <Post
            key={post.imageId}
            post={post.imageId}
            name={name}
            history={props.history}
          />
        );
      });
    }
  };

  return (
    <section className="section has-background-light custom-border-top">
      <div className="custom-body-center">
        <HeaderProfile posts={posts.length} name={name} />
        <section className="section custom-border-top">
          <div className="columns is-multiline">{renderCards()}</div>
        </section>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, null)(Profile);
  