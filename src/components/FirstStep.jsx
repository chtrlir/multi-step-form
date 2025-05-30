import React, { useContext, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multistepContext } from '../StepContext';

const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multistepContext);
  const [errors, setErrors] = useState({ firstName: '', displayName: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (field, value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'This field is required';
    if (!/^[A-Za-z\s]+$/.test(trimmed)) return 'Only letters and spaces are allowed';
    return '';
  };

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });

    const err = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleNext = () => {
    const fnError = validateField('firstName', userData.firstName || '');
    const dnError = validateField('displayName', userData.displayName || '');

    if (fnError || dnError) {
      setErrors({ firstName: fnError, displayName: dnError });
    } else {
      setErrors({ firstName: '', displayName: '' });
      setStep(2);
    }
  };

  useEffect(() => {
    const firstNameError = validateField('firstName', userData.firstName || '');
    const displayNameError = validateField('displayName', userData.displayName || '');
    const allValid = !firstNameError && !displayNameError;
    setIsFormValid(allValid);
  }, [userData.firstName, userData.displayName]);

  return (
    <div className="d-fl-center fl-column" style={{ gap: '24px', width: '100%', maxWidth: '500px' }}>
      <div style={{ fontSize: '24px', fontWeight: '700' }}>
        Welcome! First things first...
      </div>
      <div style={{ fontSize: '16px', color: 'grey' }}>
        You can always change them later
      </div>

      {/* Full Name */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontWeight: '500', fontSize: '14px' }}>Full Name</label>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your full name"
          value={userData.firstName || ''}
          onChange={(e) => handleChange('firstName', e.target.value)}
          error={!!errors.firstName}
          helperText={errors.firstName}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#624ADD',
              },
            },
          }}
        />
      </div>

      {/* Display Name */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontWeight: '500', fontSize: '14px' }}>Display Name</label>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your display name"
          value={userData.displayName || ''}
          onChange={(e) => handleChange('displayName', e.target.value)}
          error={!!errors.displayName}
          helperText={errors.displayName}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#624ADD',
              },
            },
          }}
        />
      </div>

      {/* Next Button */}
      <Button
        onClick={handleNext}
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
          background: '#624ADD',
          opacity: isFormValid ? 1 : 0.5 ,
          '&.Mui-disabled': {
            backgroundColor: '#ccc',
            color: '#fff',
          },
        }}
      >
        Create Workspace
      </Button>
    </div>
  );
};

export default FirstStep;
