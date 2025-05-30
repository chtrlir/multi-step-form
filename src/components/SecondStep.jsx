import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multistepContext } from '../StepContext';
const SecondStep = () => {
      const {setStep, userData, setUserData} = useContext(multistepContext);
  return (
    <div>
       <div className='d-fl-center fl-column'>
        <h1>Lets set up home for all your work</h1>
        <h3>You can always create another workspace later</h3>
       <TextField id="standard-basic" value={userData['workName']} onChange={(e)=> setUserData({...userData,'workName': e.target.value})} label="Workspace Name" variant="standard" />
       <br />
       <TextField id="standard-basic"  value={userData['workUrl']} onChange={(e)=> setUserData({...userData,'workUrl': e.target.value})} label="Workspace URL" variant="standard" />
       <br />
      <Button onClick={()=> setStep(1)} variant="contained">Back</Button>       
       <br />
      <Button  className='primary-btn' onClick={()=> setStep(3)} variant="contained">Create Workspace</Button>

    </div>
    </div>
  )
}

export default SecondStep
