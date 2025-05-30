import React, { useState } from 'react';
import App from './App'

export const multistepContext = React.createContext();
const StepContext = () => {
    const [currentStep,setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData,setFinalData] = useState([]);
  return (
    <div>
      <multistepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>
    <App></App>
      </multistepContext.Provider>
    </div>
  )
}

export default StepContext
