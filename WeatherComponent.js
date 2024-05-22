// src/components/WeatherComponent.js
import React from 'react';
import { Section } from '../Style';

function WeatherComponent({ weatherData }) {
  return (
    <Section>
      <h2>Weather Conditions</h2>
      <p>Temperature: {weatherData.temperature.value} °C</p>
      <p>Visibility: {weatherData.visibility.value} km</p>
      <p>Wind Speed: {weatherData.windSpeed.value} km/h</p>
    </Section>
  );
}

export default WeatherComponent;
