import React, { useState } from 'react';
import Button from '../components/Button';

interface LanguageProps {
  russianText: string;
  englishText: string;
}

const LanguageChange: React.FC<LanguageProps> = ({ russianText, englishText }) => {
  const [language, setLanguage] = useState('rus'); 

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  let displayedText;
  if (language === 'rus') {
    displayedText = russianText;
  } else {
    displayedText = englishText;
  }

  return (
    <div style={{padding:'1rem'}} >
      
      
      
      <Button style={{ background: language === 'rus' ? 'lightGray' : 'rgba(30, 208, 6, 0.316)',color: language === 'rus' ? 'white' : 'green',width:'40px'}} onClick={() => handleLanguageChange('eng')}>eng</Button>
      <Button style={{ background: language === 'rus' ? 'rgba(30, 208, 6, 0.316)' : 'lightGray',color: language === 'rus' ? 'green' : 'white',width:'40px'}} onClick={() => handleLanguageChange('rus')}>rus</Button>
      <hr style={{margin:'2rem'}}/>
      <h2 style={{color:'rgba(0, 0, 0, 0.604)',font: '1.3em "Fira Sans", sans-serif',lineHeight: '1.5'}}>{displayedText}</h2>
      
      
    </div>
  );
};

export default LanguageChange;