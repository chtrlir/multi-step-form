import React, { createContext, useState } from 'react';

export const multistepContext = createContext();

const StepContext = ({ children }) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  const [finalData, setFinalData] = useState([]);
  const [editId, setEditId] = useState(null); 

  const submitData = () => {
    if (editId !== null) {
    
      const updated = finalData.map(item =>
        item.id === editId ? { ...userData, id: editId } : item
      );
      setFinalData(updated);
      setEditId(null); 
         alert('Edited successfully');
    } else {
      
      const newId = finalData.length > 0 ? finalData[finalData.length - 1].id + 1 : 1;
      setFinalData([...finalData, { ...userData, id: newId }]);
    }

    setUserData({});
    setStep(1);
  };

  
  const editData = (id) => {
    const record = finalData.find(item => item.id === id);
    if (record) {
      setUserData(record);
      setEditId(id);
      setStep(1); 
     
    }
  };

  const deleteData = (id) => {
    const filtered = finalData.filter(item => item.id !== id);
    setFinalData(filtered);
    alert('Deleted Successfully')
  };

  return (
    <multistepContext.Provider
      value={{
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
        editData,
        deleteData,
      }}
    >
      {children}
    </multistepContext.Provider>
  );
};

export default StepContext;
