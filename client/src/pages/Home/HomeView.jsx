import Card from './components/Card/CardContainer'

const HomeView = ({ posts, getUser }) => {
  
    const renderCards = () => {
    if (posts.length === 0) {
      return <div>LOOOOOOOOOOOADING.......</div>;
    } else {
      return posts.map((post) => {
        return <Card key={post.imageId} post={post} />;
      });
    }
  };

  return (
    <section className="section has-background-light custom-border-top">
      <div className="columns custom-body-center">
        <div className="column is-10">
          <div className="container">{renderCards()}</div>
        </div>
        <div className="column">
          <div className="menu">
            <article className="media center">
              <figure className="media-left">
                <span className="image is-48x48 ">
                  <img
                    className="is-rounded"
                    src="https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg"
                    alt="man smiling"
                  />
                </span>
              </figure>
              <div className="media-content" style={{ width: "105px" }}>
                <div className="content">
                  <p className="is-size-6" style={{ margin: "0px" }}>
                    <strong>{getUser}</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
