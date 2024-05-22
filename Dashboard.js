import React, { useState } from 'react';
import WeatherComponent from './WeatherComponent';
import SystemStatus from './SystemStatus';
import AlertComponent from './AlertComponent';
import { Container, Title, Section } from '../Style';

function Dashboard() {
  const [weatherData] = useState({
    temperature: 25,
    humidity: 60,
    windSpeed: 10,
    // Add more weather data properties as needed
  });

  const [systemStatus] = useState({
    flights: [
      { flightNumber: 'ABC123', status: 'On Time' },
      { flightNumber: 'DEF456', status: 'Delayed' },
      // Add more simulated flight statuses
    ],
    // Add more system status properties as needed
  });

  const [alerts] = useState([
    { id: 1, message: 'NOTAM - Runway 22L closed for maintenance' },
    { id: 2, message: 'NOTAM - Airspace restriction in area XYZ' },
    // Add more simulated alerts
  ]);

  return (
    <Container>
      <Title>Flight Navigation Dashboard</Title>
      <Section>
        <WeatherComponent weatherData={weatherData} />
      </Section>
      <Section>
        <SystemStatus systemData={systemStatus} />
      </Section>
      <Section>
        <AlertComponent alerts={alerts} />
      </Section>
    </Container>
  );
}

export default Dashboard;
