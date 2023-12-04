import React, { useState } from 'react';
import ukImage from '../../../public/uk.png';
import franceImage from '../../../public/france.png';

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
        <button onClick={toggleLangue}><img src={getImage()} alt="Drapeau" style={{ width: '50px', height: '50px' }} /></button>
    );
  };
  
  export default ToggleButton;