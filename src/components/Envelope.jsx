import React from 'react';
import './Envelope.css';

const Envelope = ({ isOpen, onClick }) => {
  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="envelope-wrapper">
        <div className="flap"></div>
        <div className="envelope-body">
          {/* Sello de cera en la punta de la carta */}
          {!isOpen && <div className="seal">💌</div>}
        </div>
      </div>
    </div>
  );
};

export default Envelope;
