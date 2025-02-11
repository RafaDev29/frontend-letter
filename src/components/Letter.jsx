import React from "react";
import "../components/Letter.css";

const Letter = ({ isVisible }) => {
  return (
    <div className={`letter ${isVisible ? "visible" : ""}`}>
      <div className="letter-content">
        <div className="letter-paper">
          <div className="letter-header">Te Vi</div>
          <div className="letter-text">
            Te vi llegar, y sentí en mi pecho un fuerte latir, te vi bailar, y
            en ese momento supe que eras para mí. Te vi y no supe qué decir, me
            diste vueltas en la mente. Ahora no puedo dormir sin recordarte.
          </div>
          <div className="letter-signature">Destino en Ti...</div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
