/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import pic1 from "../assets/Untitled1.jpg";
const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
        Lorem ipsum dolor sit amet consectetur 
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Moritsoft
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Contacter Nous
          </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: pic1
 },
  {
    id: 2,
    src: pic1
  },
  {
    id: 3,
    src: pic1
  },
  {
    id: 4,
    src: pic1
  },
  {
    id: 5,
    src: pic1
  },
  {
    id: 6,
    src: pic1
 },
  {
    id: 7,
    src: pic1
  },
  {
    id: 8,
    src: pic1
  },
  {
    id: 9,
    src: pic1
  },
  {
    id: 10,
    src: pic1
  },
  {
    id: 11,
    src: pic1
  },
  {
    id: 12,
    src: pic1
  },
  {
    id: 13,
    src: pic1
  },
  {
    id: 14,
    src: pic1
  },
  {
    id: 15,
    src: pic1
  },
  {
    id: 16,
    src: pic1
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;