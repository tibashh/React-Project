import React from 'react';
import { Link } from 'react-router-dom';

const MoveToPage = ({ selectedOption, onBack }) => {
  return (
    <div>
      <div className="body2">
        <h1> {selectedOption}</h1>
      </div>
      <div >
        <Link  className="button" to="/" onClick={onBack}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default MoveToPage;
