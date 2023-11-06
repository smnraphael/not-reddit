import React from 'react';
import './Spinner.css';

function Spinner() {
  return (
    <div className="spinner d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Spinner;
