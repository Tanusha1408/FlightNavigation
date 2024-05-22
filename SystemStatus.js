// src/components/SystemStatus.js
import React from 'react';
import { Section } from '../Style';

function SystemStatus({ systemData }) {
  const status = systemData.data[0].live ? 'Operational' : 'Offline';
  
  return (
    <Section>
      <h2>System Status</h2>
      <p>GPS: {status}</p>
      <p>Altimeter: {status}</p>
      <p>Radar: {status}</p>
    </Section>
  );
}

export default SystemStatus;
