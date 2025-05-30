import { useContext, useState } from 'react'
import './App.css'
import HorizontalLinearStepper from './components/HorizontalLinearStepper.jsx'
import FirstStep from './components/FirstStep.jsx'
import SecondStep from './components/SecondStep.jsx'
import ThirdStep from './components/ThirdStep.jsx'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { multistepContext } from './StepContext.jsx'
import FourthStep from './components/FourthStep.jsx'


function App() {
const {currentStep, finalData} = useContext(multistepContext);

const showStep = (id) =>{
switch(id){
  case 1 :
   return <FirstStep />
  case 2: 
  return <SecondStep />
  case 3 :
   return <ThirdStep />
    case 4 :
   return <FourthStep />
    default:
    return  <FirstStep />  
}

}

  return (
    <div> 
    <h1 className='d-fl-center'>Eden</h1>
    {/* <HorizontalLinearStepper className='d-fl-center'/> */}
    <Stepper  activeStep={currentStep - 1} orientation='horizontal'>
      <Step>
         <StepLabel></StepLabel>
      </Step>
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
     {showStep(currentStep)}
    {/* <FirstStep />
    <SecondStep />
    <ThirdStep /> */}
    </div>
  )
}

export default App
