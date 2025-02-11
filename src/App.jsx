import { motion } from "framer-motion";
import { useState } from "react";
import CardFront from "./components/CardFront";
import CardInside from "./components/CardInside";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-pink-200">
      <motion.div
        className="relative w-64 h-80 flex items-center justify-center"
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? <CardFront /> : <CardInside />}
      </motion.div>
    </div>
  );
}
