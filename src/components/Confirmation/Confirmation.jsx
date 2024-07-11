import React from 'react';
import './confirmation.css';
// import CircularProgress from '@mui/material/CircularProgress';

const Confirmation = ({ formData }) => {
  return (
    <div className="confirmation-container">
      <h2>Confirmation</h2>
      <div className="form-data">
        {/* <CircularProgress /> */}
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="form-data-item">
            <span className="form-data-key">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</span>
            <span className="form-data-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Confirmation;
