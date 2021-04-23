import HeaderProfile from './components/HeaderProfile'
import Post from './components/PostContainer'

const ProfileView = ({ posts, name, history }) => {
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
};

export default ProfileView;
