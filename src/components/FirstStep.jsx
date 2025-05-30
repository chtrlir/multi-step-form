import React, {useContext} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multistepContext } from '../StepContext';
const FirstStep = () => {
    const {setStep, userData, setUserData} = useContext(multistepContext);
  return (
    <div className='d-fl-center fl-column'>
        <h1>Welcome!! First Things First</h1>
        <h3>You can always change them later</h3>
       <TextField id="standard-basic" value={userData['firstName']} onChange={(e)=> setUserData({...userData,'firstName': e.target.value})} label="Full Name" variant="standard" />
       <br />
       <TextField id="standard-basic"  value={userData['displayName']} onChange={(e)=> setUserData({...userData,'displayName': e.target.value})} label="Display Name" variant="standard" />
       <br />
      <Button onClick={()=> setStep(2)} variant="contained">Create Workspace</Button>

    </div>
  )
}

export default FirstStep
