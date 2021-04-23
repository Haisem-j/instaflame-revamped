import { Link } from "react-router-dom";
import * as utils from "../../../../Utils";

const CardView = ({ post, liked, likePost }) => {
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
            <Link to={`/profile/${post.profileId}`}>
              <p className="title is-size-6">{post.profileId}</p>
            </Link>
          </div>
        </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={`${utils.imageRoute}/${post.imageId}`}
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className="media-content">
          <span
            className={`icon is-size-4 icon-padding ${liked ? "heart" : ""}`}
            onClick={likePost}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-heart"></i>
          </span>
          <span className="icon is-size-4 icon-padding">
            <i className="far fa-comment"></i>
          </span>
        </div>
        <p className="subtitle is-size-7 p-margin">
          {liked ? post.likes + 1 : post.likes} likes
        </p>
        <div className="content">{post.desc}</div>
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
};

export default CardView;
