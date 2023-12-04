import ukImage from '../../../public/uk.png';
import franceImage from '../../../public/france.png';
import './ToggleButton.css'

interface ToggleButtonProps{
    toggleLangue: any;
    langue: string
  }

const ToggleButton = ({toggleLangue, langue} : ToggleButtonProps) => {

    const getImage = () => {
        // Fonction pour obtenir le chemin de l'image en fonction de la langue
        return langue === 'en' ? franceImage : ukImage;
      };
  
    return (
        <button className='btn-toogle-lang' onClick={toggleLangue}><img className='btn-toogle-lang-img' src={getImage()} alt="Drapeau" /></button>
    );
  };
  
  export default ToggleButton;