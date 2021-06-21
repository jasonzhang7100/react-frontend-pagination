import React from "react";

const Posts = ({ loading, currentPosts }) => {
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <ul className="list-group mb-4">
      {currentPosts.map(post => (
        <li key={post.id} className="list-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
