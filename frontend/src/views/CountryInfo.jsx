import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { PopulationChart } from '../components/PopulationChart';
import { Spinner } from '../components/Spinner';

export const CountryInfo = () => {
  const { countryCode } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/${countryCode}`)
      .then(response => {
        setCountryInfo(response.data);
        setError(null); // Reinicia el estado de error si la llamada es exitosa
      })
      .catch(error => {
        console.error('Error fetching country info:', error);
        setError('Error fetching country information. Please try again later.'); // Establece un mensaje de error
      });
  }, [countryCode]);

  return (
    <div className="container mx-auto p-4">
      {error ? ( // Verifica si hay un error
        <div className="text-red-600 text-center">
          <h2 className="text-2xl font-semibold">Error</h2>
          <p>{error}</p>
          <Link to="/" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Back to Country List
          </Link>
        </div>
      ) : countryInfo ? (
        <>
          <div className='flex mx-auto flex-col justify-center items-center'>
            <h1 className="text-4xl font-bold">{countryInfo.commonName}</h1>
            <img src={countryInfo.flagUrl} alt={`${countryInfo.name} flag`} className="my-4 w-32 h-auto" />
          </div>
          <div className='flex mx-auto flex-col justify-center items-center'>
            <h2 className="text-2xl font-semibold">Border Countries</h2>
            <Link to="/" className="mt-4 inline-block  bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600">
            Back to Country List
          </Link>
            <ul className="list-disc pl-6">
              {countryInfo.borders.map((borderCountry, index) => (
                <li key={borderCountry.countryCode}>
                  <a href={`/country/${borderCountry.countryCode}`} className="text-blue-600">
                    {borderCountry.commonName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6">Historic Population</h2>
            <PopulationChart populationData={countryInfo.populationData} />
          </div>
          
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
