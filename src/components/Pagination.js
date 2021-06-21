import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ postsPerPage, totalPosts, changePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      {pageNumbers.map(number => (
        <li
          key={number}
          className="page-item"
          onClick={() => changePage(number)}
        >
          <a href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};

Pagination.prototype = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default Pagination;
