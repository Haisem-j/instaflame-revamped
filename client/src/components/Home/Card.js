import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as utils from "../../Utils";

function Card(props) {
  const [liked, setLike] = useState(false);

  const likePost = async () => {
    if (!liked) {
      try {
        let response = await fetch(
          `${utils.backendRoute}/posts/like/${props.post.imageId}`,
          {
            headers: {
              jwt: props.setToken,
            },
          }
        );
        await response.json();
        setLike(true);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="card custom-card-bottom">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="media-content">
            <Link to={`/profile/${props.post.profileId}`}>
              <p className="title is-size-6">{props.post.profileId}</p>
            </Link>
          </div>
        </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={`${utils.imageRoute}/${props.post.imageId}`}
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className="media-content">
          <span
            className={`icon is-size-4 icon-padding ${liked ? "heart" : ""}`}
            onClick={likePost}
          >
            <i className="fas fa-heart"></i>
          </span>
          <span className="icon is-size-4 icon-padding">
            <i className="far fa-comment"></i>
          </span>
        </div>
        <p className="subtitle is-size-7 p-margin">
          {liked ? props.post.likes + 1 : props.post.likes} likes
        </p>
        <div className="content">{props.post.desc}</div>
      </div>
      <footer className="card-footer">
        <input
          className="input"
          type="text"
          style={{ border: "none" }}
          placeholder="Add a comment..."
        />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(Card);
