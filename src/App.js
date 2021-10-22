// Components
import Navbar from "./components/navbar/navbar.component";
import FeedPage from "./pages/feed/feed.page";
// styles
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .then((data) =>
        fetch("https://panorbit.in/api/posts.json")
          .then((res) => res.json())
          .then((data) => setPosts(data.posts))
      );
  }, []);

  return (
    <div className="App">
      {users ? (
        <>
          <Navbar user={users[0]} />

          <FeedPage posts={posts} users={users} />
        </>
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
}

export default App;
