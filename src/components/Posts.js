import React from "react";
import PropTypes from "prop-types";

const Posts = ({ loading, currentPosts }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {currentPosts.map(post => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

Posts.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentPosts: PropTypes.array.isRequired,
};

export default Posts;
