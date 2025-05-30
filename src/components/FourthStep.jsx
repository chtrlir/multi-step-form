import React, { useContext, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { multistepContext } from '../StepContext';

const FourthStep = () => {
  const { setStep, userData, setUserData } = useContext(multistepContext);
  const [selectedOption, setSelectedOption] = useState(userData.usageType || '');

  const handleSelect = (type) => {
    setSelectedOption(type);
    setUserData({ ...userData, usageType: type });
  };

  const submitData = () => {
    if (!selectedOption) return;
    
    console.log('Form Submitted:', userData);
   
  };

  return (
    <div>
      <div className="d-fl-center fl-column">
        <h1>Congratulations, {userData["firstName"]} !</h1>
        <h3>You have completed onboarding, you can start using Eden</h3>

       
        <br />
        <Button onClick={() => setStep(2)} variant="contained">Back</Button>
        <br />
      
        <Button
          onClick={submitData}
          variant="contained"
          disabled={!selectedOption}
        >
          Create!!
        </Button>
      </div>
    </div>
  );
};

export default FourthStep;
