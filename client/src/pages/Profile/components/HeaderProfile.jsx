const HeaderProfile = ({ name, posts }) => {
    return (
      <div className="columns">
        <div className="column is-one-third">
          <figure className="image is-128x128 center-container">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder "
            />
          </figure>
        </div>
        <div className="column">
          <div className="media-content">
            <article className="media custom-profile-margin">
              <figure className="media-left">
                <h1 className="title">{name}</h1>
              </figure>
              <div className="media-content">
                <button className="button">Edit Profile</button>
              </div>
            </article>
            <h2 className="subtitle-5 custom-followers">
              <span>{posts} posts</span>
            </h2>
            <h1 className="title is-6 is-spaced">Toronto</h1>
          </div>
        </div>
      </div>
    );
  }

  export default HeaderProfile