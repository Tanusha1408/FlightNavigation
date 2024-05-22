// src/components/AlertComponent.js
import React from 'react';
import { Alert } from '../Style';

function AlertComponent({ Alerts }) {
  return (
    <div>
      <h2>Real-Time Alerts</h2>
      {Alerts.map((alert, index) => (
        <Alert key={index}>{alert.text}</Alert>
      ))}
    </div>
  );
}

export default AlertComponent;
