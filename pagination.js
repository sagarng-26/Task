import React from 'react';
//Calculate the total number of pages based on the number of items and items per page
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);



  return (
    <div>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
