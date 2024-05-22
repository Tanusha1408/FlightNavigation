// src/components/FlightRoute.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Section } from '../Style';

function FlightRoute({ routeData }) {
  const data = {
    labels: routeData.labels,
    datasets: [
      {
        label: 'Flight Path',
        data: routeData.path,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <Section>
      <h2>Optimal Flight Route</h2>
      <Line data={data} />
    </Section>
  );
}

export default FlightRoute;

