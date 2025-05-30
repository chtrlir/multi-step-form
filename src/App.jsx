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
import DisplayData from './components/DisplayData.jsx'


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
    <div className='d-fl-center fl-column g-24'> 
    <h1 style={{marginTop:'10%', gap:'8px !important' }} className='d-fl-center'>
      <i style={{color:'#624ADD'}}className="fa-brands fa-envira"></i> <span style={{fontSize:'32px', fontWeight:'500'}}><b>Eden</b></span></h1>
    {/* <HorizontalLinearStepper className='d-fl-center'/> */}
   
    <Stepper style={{width:'420px', margin:'0 auto'}} activeStep={currentStep - 1} orientation='horizontal'>
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

   {finalData.length > 0 ? <DisplayData />: ''} 
    </div>
  )
}

export default App
