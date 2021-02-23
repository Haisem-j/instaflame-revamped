import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as utils from '../../Utils'
class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false
    };
  }
  likePost = async () => {
    console.log('TOKEN IN CARD');
    console.log(this.props.setToken);
    if (this.state.liked === false) {
      try {
        let response = await fetch(
          `${utils.backendRoute}/posts/like/${this.props.post.imageId}`,
          {
            headers: {
              "jwt": this.props.setToken
            }
          }
        );
        let res = await response.json();
        this.setState({
          liked: true
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    const { post } = this.props;

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
            <span className={`icon is-size-4 icon-padding ${this.state.liked ? 'heart' : ''}`}
             onClick={this.likePost}>
              <i className="fas fa-heart"></i>
            </span>
            <span className="icon is-size-4 icon-padding">
              <i className="far fa-comment"></i>
            </span>
          </div>
          <p className="subtitle is-size-7 p-margin">{
            this.state.liked ? post.likes + 1 : post.likes
          } likes</p>
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
  }
}
const mapStateToProps = state => {
  return state;
}
export default connect(mapStateToProps, null)(Card)
