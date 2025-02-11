import React, { useState } from "react";
import Envelope from "./components/Envelope";
import Letter from "./components/Letter";
import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Pequeño retraso para que la carta aparezca después de que el sobre se abra
      setTimeout(() => {
        setShowLetter(true);
      }, 500);
    }
  };

  return (
    <div className="app-container">
      <Envelope isOpen={isOpen} onClick={handleEnvelopeClick} />
      <Letter isVisible={showLetter} />
    </div>
  );
}