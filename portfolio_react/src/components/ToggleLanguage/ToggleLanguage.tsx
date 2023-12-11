import ukImage from '../../../public/uk.png';
import franceImage from '../../../public/france.png';
import './ToggleLanguage.css'

interface ToggleButtonProps {
    toggleLangue: any;
    langue: string;
};

export const ToggleLanguage = ({ toggleLangue, langue }: ToggleButtonProps) => {

    const getImage = () => {
        if (langue === 'fr')
            return ukImage;
        else
            return franceImage;
    }

    return (
        <button className='btn-toogle-lang' onClick={toggleLangue}>
            <img className='btn-toogle-lang-img' src={getImage()} alt="Drapeau" />
        </button>
    );
};