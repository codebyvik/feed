import PostComponent from "../../components/feedCard/post.Component";
import "./feed.style.css";

const FeedPage = ({ posts, users }) => {
  return (
    <div className="feed">
      {posts && users ? (
        posts.map((p) => <PostComponent key={p.id} post={p} users={users} />)
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default FeedPage;
