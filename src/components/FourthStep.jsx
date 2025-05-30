import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { multistepContext } from '../StepContext';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FourthStep = () => {
    const { setStep, userData, submitData } = useContext(multistepContext);

    return (
        <div className="d-fl-center fl-column" style={{ gap: '24px', width: '100%', maxWidth: '500px', textAlign: 'center' }}>

            <CheckCircleOutlineIcon sx={{ fontSize: 60, color: '#624ADD' }} />

            <div style={{ fontSize: '24px', fontWeight: '700' }}>
                Congratulations, {userData.firstName}!
            </div>

            <div style={{ fontSize: '16px', color: 'grey' }}>
                You have completed onboarding. You can start using Eden!
            </div>

            <div style={{ width: '100%', marginTop: '24px' }}>
                <Button
                    onClick={submitData}
                    variant="contained"
                    sx={{
                        width: '100%',
                        mt: 2,
                        textTransform: 'none',
                        borderRadius: '12px',
                        padding: '10px 16px',
                        fontWeight: '300',
                        fontSize: '16px',
                        background: '#624ADD',
                        color: '#fff',
                    }}
                >
                    Launch Eden
                </Button>
            </div>

        </div>
    );
};

export default FourthStep;
