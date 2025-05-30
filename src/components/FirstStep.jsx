import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multistepContext } from '../StepContext';

const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multistepContext);

  const isFormValid =
    userData.firstName?.trim() !== '' && userData.displayName?.trim() !== '';

  return (
    <div className="d-fl-center fl-column" style={{ gap: '24px', width: '100%', maxWidth: '400px' }}>
      <div style={{ fontSize: '24px', fontWeight: '700' }}>
        Welcome! First things first...
      </div>
      <div style={{ fontSize: '16px', color: 'grey' }}>
        You can always change them later
      </div>

      
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontWeight: '500', fontSize: '14px' }}>Full Name</label>
        <TextField
          fullWidth
          variant="outlined"
          value={userData.firstName || ''}
          placeholder='Enter your full name'
          onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
          error={userData.firstName?.trim() === ''}
          helperText={userData.firstName?.trim() === '' ? 'Full Name is required' : ''}
          sx={{
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#624ADD',  
      },
    },
  }}
        />
      </div>

     
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontWeight: '500', fontSize: '14px' }}>Display Name</label>
        <TextField
          fullWidth
          variant="outlined"
          placeholder='Enter your display name'
          value={userData.displayName || ''}
          onChange={(e) => setUserData({ ...userData, displayName: e.target.value })}
          error={userData.displayName?.trim() === ''}
          helperText={userData.displayName?.trim() === '' ? 'Display Name is required' : ''}
                    sx={{
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#624ADD',  
      },
    },
  }}
          
        />
      </div>

      {/* Button */}
      <Button
        className="primary-btn"
        onClick={() => setStep(2)}
        variant="contained"
        disabled={!isFormValid}
         sx={{
    width: '100%',
    mt: 2,
    textTransform: 'none',       
    borderRadius: '12px',       
    padding: '10px 16px',
    fontWeight: '300',
    fontSize: '16px',
  }}
      >
        Create Workspace
      </Button>
    </div>
  );
};

export default FirstStep;
