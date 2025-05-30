import React, { useContext, useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { multistepContext } from '../StepContext';

const ThirdStep = () => {
    const { setStep, userData, setUserData } = useContext(multistepContext);
    const [error, setError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        setIsFormValid(!!userData.usageType);
        if (userData.usageType) {
            setError('');
        }
    }, [userData.usageType]);

    const handleSelect = (type) => {
        setUserData({ ...userData, usageType: type });
    };

    const handleNext = () => {
        if (!userData.usageType) {
            setError('Please select an option');
        } else {
            setError('');
            setStep(4);
        }
    };

    const buttonStyles = {
        width: '100%',
        mt: 2,
        textTransform: 'none',
        borderRadius: '12px',
        padding: '10px 16px',
        fontWeight: '300',
        fontSize: '16px',
        background: '#624ADD',
        color: '#fff',
        '&.Mui-disabled': {
            backgroundColor: '#ccc',
            color: '#666',
        },
    };

    return (
        <div
            className="d-fl-center fl-column"
            style={{ gap: '24px', width: '100%', maxWidth: '500px' }}
        >
            <div style={{ fontSize: '24px', fontWeight: '700' }}>
                How are you planning to use Eden?
            </div>
            <div style={{ fontSize: '16px', color: 'grey' }}>
                You can always change this later
            </div>

            <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
                {['For myself', 'With my team'].map((type) => (
                    <Card
                        key={type}
                        onClick={() => handleSelect(type)}
                        sx={{
                            border:
                                userData.usageType === type
                                    ? '2px solid #624ADD'
                                    : '1px solid #ccc',
                            cursor: 'pointer',
                            width: 250,
                            transition: '0.3s',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" align="center">
                                {type}
                            </Typography>
                            <Typography variant="body2" align="center">
                                {type === 'For myself'
                                    ? 'Write better. Think more clearly. Stay organized.'
                                    : 'Bring your team together and build collective knowledge.'}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {error && (
                <Typography color="error" sx={{ mt: 1 }}>
                    {error}
                </Typography>
            )}

            <div style={{ display: 'flex', gap: 12, marginTop: 24, width: '100%' }}>
                {/* <Button
          variant="contained"
          onClick={() => setStep(2)}
          sx={buttonStyles}
        >
          Back
        </Button> */}
                <Button
                    onClick={handleNext}
                    disabled={!isFormValid}
                    variant="contained"
                    sx={buttonStyles}
                >
                    Create Workspace
                </Button>
            </div>
        </div>
    );
};

export default ThirdStep;
