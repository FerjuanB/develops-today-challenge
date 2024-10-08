import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner } from '../components/Spinner';

export const Home = () => {
  const [countries, setCountries] = useState([]);
console.log(countries)
  useEffect(() => {
    // Obtener la lista de países desde la API
    axios.get(`${import.meta.env.VITE_API_URL}/available`)
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto p-2 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold m-4">Welcome</h1>
        <h2 className="text-3xl m-4">Select a country from the list</h2>
      </div>
      <section className="container mx-auto p-2 flex flex-col justify-center items-center">
        {countries.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countries.map((country) => (
              <li key={country.Code} className="border p-4 shadow-lg text-center">
                <Link to={`/country/${country.countryCode}`} className="text-xl font-semibold">
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Spinner/>
        )}
      </section>
    </>
  );
};
