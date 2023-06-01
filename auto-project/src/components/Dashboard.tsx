import React, { useEffect, useState } from 'react';
import AutoList from './AutoList';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [autoList, setAutoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/Llang8/cars-api/cars');
        setAutoList(response.data);
      } catch (error) {
        console.error('Error fetching auto data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Auto Dashboard</h1>
      <AutoList autos={autoList} />
    </div>
  );
}

export default Dashboard;
