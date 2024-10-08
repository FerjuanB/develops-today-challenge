// src/components/PopulationChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar las escalas y los elementos necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const PopulationChart = ({ populationData }) => {
  // Prepara los datos para la gráfica
  const labels = populationData.map(data => data.year); // Extrae los años
  const populations = populationData.map(data => data.value); // Extrae los valores de población

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Población a lo largo del tiempo',
        data: populations,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Población Histórica</h2>
      <Line data={data} />
    </div>
  );
};
