import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  const openEmailPopup = () => {
    setIsEmailPopupOpen(true);
  };

  const closeEmailPopup = () => {
    setIsEmailPopupOpen(false);
  };

  return (
    <>
      <div className="bg-black text-white p-6 rounded-lg flex flex-col md:flex-row items-center justify-between w-screen" style={{ boxShadow: '0px 0px 40px rgba(0, 255, 0, 0.5)' }}> {/* Updated box-shadow to make it bigger */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">Télécharger Notre fiche</h2>
          <h3 className="text-xl font-semibold">Moritsoft</h3>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <button
            id="downloadButton"
            onClick={openEmailPopup}
            className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-zinc-200"
          >
            Télécharger le fichier <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </button>
        </div>
      </div>
      {isEmailPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Entrer votre email</h2>
            <input type="email" placeholder="Votre email" className="border p-2 rounded-lg w-full mb-4" />
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeEmailPopup}
                className="bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-700"
              >
                Envoyer
              </button>
              <button
                onClick={closeEmailPopup}
                className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
