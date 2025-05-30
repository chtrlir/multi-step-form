import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multistepContext } from '../StepContext';

const SecondStep = () => {
    const { setStep, userData, setUserData } = useContext(multistepContext);
    const [errors, setErrors] = useState({ workName: '', workUrl: '' });

    const validateName = (value) => {
        if (!value.trim()) return 'Workspace Name is required';
        return '';
    };

    const validateUrl = (value) => {
        if (!value.trim()) return 'Workspace URL is required';
        try {
            new URL(value.trim());
            return '';
        } catch {
            return 'Enter a valid URL (https://…)';
        }
    };

    const handleChange = (field, value) => {
        setUserData({ ...userData, [field]: value });
        const error = field === 'workName' ? validateName(value) : validateUrl(value);
        setErrors((prev) => ({ ...prev, [field]: error }));
    };

    const handleNext = () => {
        const nameErr = validateName(userData.workName || '');
        const urlErr = validateUrl(userData.workUrl || '');
        if (nameErr || urlErr) {
            setErrors({ workName: nameErr, workUrl: urlErr });
        } else {
            setStep(3);
        }
    };

    const isFormValid =
        !validateName(userData.workName || '') &&
        !validateUrl(userData.workUrl || '');

    const buttonStyles = {
        width: '100%',
        mt: 2,
        textTransform: 'none',
        borderRadius: '12px',
        padding: '10px 16px',
        fontWeight: '300',
        fontSize: '16px',
        background: '#624ADD',
    };

    return (
        <div className="d-fl-center fl-column" style={{ gap: 24, width: '100%', maxWidth: 500 }}>

            <div style={{ fontSize: '24px', fontWeight: '700' }}>
                Let’s set up home for all your work
            </div>
            <div style={{ fontSize: '16px', color: 'grey' }}>
                You can always create another workspace later
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontWeight: '500', fontSize: '14px' }}>Workspace Name</label>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your workspace name"
                    value={userData.workName || ''}
                    onChange={(e) => handleChange('workName', e.target.value)}
                    error={!!errors.workName}
                    helperText={errors.workName}
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
                <label style={{ fontWeight: '500', fontSize: '14px' }}>Workspace URL</label>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your workspace url"
                    value={userData.workUrl || ''}
                    onChange={(e) => handleChange('workUrl', e.target.value)}
                    error={!!errors.workUrl}
                    helperText={errors.workUrl}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#624ADD',
                            },
                        },
                    }}
                />
            </div>
            {/* 
            <TextField
                fullWidth
                label="Workspace URL"
                variant="outlined"
                value={userData.workUrl || ''}
                onChange={(e) => handleChange('workUrl', e.target.value)}
                error={!!errors.workUrl}
                helperText={errors.workUrl}
            /> */}

            <div style={{ display: 'flex', gap: 12, width: '100%' }}>
                {/* <Button
          variant="contained"
          onClick={() => setStep(1)}
          sx={{ ...buttonStyles }}
        >
          Back
        </Button> */}
                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!isFormValid}
                    sx={{ ...buttonStyles, opacity: isFormValid ? 1 : 0.5 }}
                >
                    Create Workspace
                </Button>
            </div>
        </div>
    );
};

export default SecondStep;
