import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css"
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <img className='background' src='/assets/background.jpg' alt='background' />
            <div className='outer-container'>
              <div className='main-container'>
                <MultiStepForm />
              </div>
            </div>
          </>
        }/>
        <Route path="/checkout" element={<><Checkout /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;