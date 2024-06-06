import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMotionValue, animate } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const SHADOW_COLORS = ["rgba(30, 103, 198, 0.5)", "rgba(221, 51, 92, 0.5)", "rgba(255, 255, 255, 0.5)", "rgba(106, 90, 205, 0.5)", "rgba(50, 205, 50, 0.5)"];

const cards = [
  { id: 1, title: 'Pack spécial PARA', description: 'Gestion commerciale complète, Gestion de compte avec fidélité et promotions, Gestion des commandes et livraisons et expéditions, Livraison rapide pour éviter erreurs et délais supplémentaires, Interface de caisse française et arabe' },
  { id: 2, title: 'Pack spécial Librairie', description: 'Gestion de la rentrée scolaire, Gestion des Stocks par code barre et code supplémentaire, Gestion des achats et des commandes et des livraisons et des expéditions, Localisation des articles par rayon et ligne et caisse et étagère, Interface de caisse française et arabe' },
  { id: 3, title: 'Pack spécial Boutique', description: 'Suivi des ventes rapides par scan de code à barres, Gestion des prix par code barre et taille et couleur et saison, Multi dépôt et multi magasins, Gestion des paiements par carte et chèque et espèces, Interface de caisse française et arabe' },
  { id: 4, title: 'Pack spécial Restaurant et Snack & Boulangerie', description: 'Suivi des ventes Textiles & des services avec Clé USB, Gestion des stocks et des services avec Clé USB, Gestion des achats et des commandes, des livraisons et des expéditions, Gestion des articles par rayon et ligne et caisse et étagère, Interface de caisse française et arabe' },
  { id: 5, title: 'Fidupack - Spécial Fiduciaire', description: 'Logiciel pour les normes fiscales, Edition des journaux comptables, Traitement complet de la paie, Pack EDI intégré, Gestion des alertes de factures et de TVA' },
  { id: 6, title: 'Pack EDI - Télédeclarations', description: 'Atlas EDI TVA, Atlas EDI Liasse, Atlas EDI IR, Une Demi Journée de formation offerte, Assistance technique est assurée' },
];

const CardSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const color = useMotionValue(COLORS_TOP[0]);
  const [shadowColor, setShadowColor] = useState(SHADOW_COLORS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextColorIndex = (COLORS_TOP.indexOf(color.get()) + 1) % COLORS_TOP.length;
      animate(color, COLORS_TOP[nextColorIndex], {
        duration: 10,
        ease: "easeInOut",
      });
    }, 10000); // Change color every 10 seconds

    return () => clearInterval(interval);
  }, [color]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShadowColor((prevColor) => {
        const nextShadowColorIndex = (SHADOW_COLORS.indexOf(prevColor) + 1) % SHADOW_COLORS.length;
        return SHADOW_COLORS[nextShadowColorIndex];
      });
    }, 3000); // Change shadow color every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setVisibleCards(cards.slice(currentIndex, currentIndex + 3));
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + cards.length) % cards.length);
  };

  const renderDescriptionWithIcons = (description) => {
    return description.split(',').map((phrase, index) => {
      return (
        <div key={index} className="flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> {/* Icon */}
          <span>{phrase.trim()}</span>
        </div>
      );
    });
  };

  return (
    <motion.section
      style={{ backgroundImage: `radial-gradient(125% 125% at 0% 30%, #020617 50%, ${color.get()})` }}
      className="relative min-h-screen flex flex-col items-center justify-center w-full overflow-hidden"
    >
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full sparkle"
          style={{ top: Math.random() * 100 + '%', left: Math.random() * 100 + '%' }}
        />
      ))}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button onClick={handlePrev} className="p-4 bg-gray-800 rounded-full shadow-md text-white text-2xl">
          &#9664; {/* Left Arrow */}
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full max-w-6xl px-4 space-x-4">
        <AnimatePresence>
          {visibleCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full sm:w-1/2 lg:w-1/3 h-auto p-6 bg-white rounded-lg flex flex-col justify-center items-center mb-8"
              style={{ 
                originX: 0.5, 
                originY: 0.5, 
                rotate: (card.id % 2 === 0) ? -2 : 2,
                boxShadow: `0 4px 10px ${shadowColor}`
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-800">{card.title}</h2>
              <div className="mt-4 text-base text-gray-800 space-y-2">
                {renderDescriptionWithIcons(card.description)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <button onClick={handleNext} className="p-4 bg-gray-800 rounded-full shadow-md text-white text-2xl">
          &#9654; {/* Right Arrow */}
        </button>
      </div>
    </motion.section>
  );
};

export default CardSection;
