import React, { useContext, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { multistepContext } from '../StepContext';

const FourthStep = () => {
  const { setStep, userData, setUserData,submitData } = useContext(multistepContext);
 
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
         className='primary-btn'
        >   
         Launch Eden
        </Button>
      </div>
    </div>
  );
};

export default FourthStep;
