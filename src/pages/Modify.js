import React from 'react';

function Modify({ onClose }) {
  return (
    <div className="mod">
      <p>test</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modify;
