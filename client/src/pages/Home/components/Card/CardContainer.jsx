import { useState } from "react";
import { connect } from "react-redux";

import CardView from "./CardView";

import { likePost } from "../../../../services";

const CardContainer = ({ post, setToken }) => {
  const [liked, setLike] = useState(false);

  const likeP = async () => {
    if (!liked) {
      likePost(setToken, post.imageId).then((res) => {
        setLike(true);
      });
    }
  };

  return (
    <>
      <CardView post={post} liked={liked} likePost={likeP} />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(CardContainer);
