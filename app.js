import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../Pagination';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Set items per page


  //fetch data from the fake API when the component mounts.
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('url'); // Fake API
      setData(response.data);
    };

    fetchData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>Fake API Data</h1>
      <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default App;
