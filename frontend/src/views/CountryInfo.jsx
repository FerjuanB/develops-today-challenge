import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {PopulationChart} from '../components/PopulationChart';

export const CountryInfo = () => {
  const { countryCode } = useParams();
  console.log(countryCode)
  const [countryInfo, setCountryInfo] = useState(null);
    console.log(countryInfo)
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/${countryCode}`)
      .then(response => {
        setCountryInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching country info:', error);
      });
  }, [countryCode]);

  return (
    <div className="container mx-auto p-4">
      {countryInfo ? (
        <>
          <h1 className="text-4xl font-bold">{countryInfo.commonName}</h1>
          <img src={countryInfo.flagUrl} alt={`${countryInfo.name} flag`} className="my-4 w-32 h-auto" />
          <div className=' flex mx-auto flex-col justify-center items-center'>
            <h2 className="text-2xl font-semibold">Países Fronterizos</h2>
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
            <h2 className="text-2xl font-semibold mt-6">Población Histórica</h2>
            <PopulationChart populationData={countryInfo.populationData} />
              </div>
        </>
      ) : (
        <p>Cargando información del país...</p>
      )}
    </div>
  );
};
