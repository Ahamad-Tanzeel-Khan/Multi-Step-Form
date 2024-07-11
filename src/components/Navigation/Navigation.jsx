import React from 'react';
import "./navigation.css"

const Navigation = ({ step, handleSubmit, handleNext, handleBack, isFirstStep, isLastStep }) => {
  return (
    <div className='btn-container'>

      {!isFirstStep ? (
            <button className='btn' onClick={handleBack}>Back</button>
        ) : (
            <button className='btn' style={{cursor: "no-drop", color: "#a1a1a1", background: "#cba2f1"}} disabled onClick={handleBack}>Back</button>
        )}

      {!isLastStep ? (
        <button className="btn" onClick={handleNext}>Next</button>
      ) : (
        <button onClick={handleSubmit} className='btn' type="submit">Submit</button>
      )}
    </div>
  );
};

export default Navigation;
