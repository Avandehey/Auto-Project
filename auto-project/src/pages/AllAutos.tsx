import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AutoList from '../components/AutoList';
import { AutoCardProp } from '../components/AutoCard';

const AllAutos: React.FC = () => {
  const [carArray, setCarArray] = useState<AutoCardProp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          Array.from({ length: 10 }, (_, i) =>
            axios.get(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${i + 1}`)
          )
        );
        const data = responses.map((response) => response.data);
        setCarArray(data);
      } catch (error) {
        console.error('Error fetching auto data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>AutoList</h1>
      <AutoList autos={carArray} />
    </div>
  );
};

export default AllAutos;
