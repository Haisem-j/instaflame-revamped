import * as utils from "../../../Utils";
import { deletePost } from "../../../services";
import { connect } from "react-redux";

const PostContainer = ({ name, post, setToken, history, getUser }) => {
  const deleteP = async () => {
    deletePost(setToken, post).then((res) => {
      history.push("/home");
    });
  };
  if (name === getUser) {
    return (
      <div className="column is-one-third" style={{ marginTop: "-20px" }}>
        <figure className="image is-1x1">
          <div className="x-logo delete is-medium" onClick={deleteP} />
          <img src={`${utils.imageRoute}/${post}`} alt="Placeholder" />
        </figure>
      </div>
    );
  } else {
    return (
      <div className="column is-one-third">
        <figure className="image is-1x1">
          <img src={`${utils.imageRoute}/${post}`} alt="Placeholder" />
        </figure>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(PostContainer);
