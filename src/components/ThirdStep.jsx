import React, { useContext, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { multistepContext } from '../StepContext';

const ThirdStep = () => {
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
        <h1>How are you planning to use Eden?</h1>
        <h3>You can always change this later</h3>

        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {['For myself', 'With my team'].map((type) => (
            <Card
              key={type}
              onClick={() => handleSelect(type)}
              sx={{
                border: selectedOption === type ? '2px solid #1976d2' : '1px solid #ccc',
                cursor: 'pointer',
                width: 250,
                transition: '0.3s',
              }}
            >
              <CardContent>
                <Typography variant="h6" align="center">{type}</Typography>
                <Typography variant="body2" align="center">
                  {type === 'For myself'
                    ? 'Write better. Think more clearly. Stay organized.'
                    : 'Bring your team together and build collective knowledge.'}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <br />
        <Button onClick={() => setStep(2)} variant="contained">Back</Button>
        <br />
         <Button onClick={() => setStep(4)} variant="contained">Next</Button>
        {/* <Button
          onClick={submitData}
          variant="contained"
          disabled={!selectedOption}
        >
          Create!!
        </Button> */}
      </div>
    </div>
  );
};

export default ThirdStep;
