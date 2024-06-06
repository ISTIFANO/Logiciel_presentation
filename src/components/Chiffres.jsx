import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faChartLine, faMoneyBill, faFileAlt, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { AiFillCheckCircle } from "react-icons/ai";

export default function Chiffres() {
    return (
        <div className="w-screen bg-black text-white">
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-center mb-12">Fonctionnalités</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 animate-bounce">
                            <FontAwesomeIcon icon={faClock} size="2x" className="text-white" />
                        </div>
                        <p className="text-lg font-medium">Conformité règlementaire aux dispositions du C.G.T</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 animate-bounce">
                            <FontAwesomeIcon icon={faChartLine} size="2x" className="text-white" />
                        </div>
                        <p className="text-lg font-medium">Automatisation de la gestion de la paie mensuelle</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 animate-bounce">
                            <FontAwesomeIcon icon={faMoneyBill} size="2x" className="text-white" />
                        </div>
                        <p className="text-lg font-medium">Gestion complète de tous les éléments de la paie</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 animate-bounce">
                            <FontAwesomeIcon icon={faFileAlt} size="2x" className="text-white" />
                        </div>
                        <p className="text-lg font-medium">Édition automatique des bulletins de paie</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 animate-bounce">
                            <FontAwesomeIcon icon={faUserClock} size="2x" className="text-white" />
                        </div>
                        <p className="text-lg font-medium">Augmentation de la productivité et gain de temps pour les équipes RH et paie</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 animate-bounce">
                            <AiFillCheckCircle size="2x" className="text-white" />
                        </div>
                        <p className="text-lg font-medium">Augmentation de la productivité et gain de temps pour les équipes RH et paie</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
