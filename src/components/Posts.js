import React from "react";

const Posts = ({ loading, posts }) => {
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <li key={post.id} className="list-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
