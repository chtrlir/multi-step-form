import { useState } from 'react'
import './App.css'
import HorizontalLinearStepper from './components/HorizontalLinearStepper.jsx'
import FirstStep from './components/FirstStep.jsx'
import SecondStep from './components/SecondStep.jsx'
import ThirdStep from './components/ThirdStep.jsx'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
function App() {

const showStep = (id) =>{
switch(id){
  case 1 :
   return <FirstStep />
  case 2: 
  return <SecondStep />
  case 3 :
   return <ThirdStep />
    default:
    return  <FirstStep />  
}

}

  return (
    <div> 
    <h1 className='d-fl-center'>Eden</h1>
    {/* <HorizontalLinearStepper className='d-fl-center'/> */}
    <Stepper  activeStep="1" orientation='horizontal'>
      <Step>
         <StepLabel></StepLabel>
      </Step>
      <Step>
         <StepLabel></StepLabel>
      </Step>
      <Step>
         <StepLabel></StepLabel>
      </Step>
     
    
    </Stepper>
     {showStep(2)}
    {/* <FirstStep />
    <SecondStep />
    <ThirdStep /> */}
    </div>
  )
}

export default App
