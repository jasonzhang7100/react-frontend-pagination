import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const changePage = page => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">React Pagination Demo</h1>
      <Posts loading={loading} currentPosts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        changePage={changePage}
      />
    </div>
  );
};

export default App;
