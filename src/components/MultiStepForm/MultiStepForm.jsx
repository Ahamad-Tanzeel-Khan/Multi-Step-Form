import React, { useState, useEffect } from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import AddressInfo from '../AddressInfo/AddressInfo';
import Confirmation from '../Confirmation/Confirmation';
import Navigation from '../Navigation/Navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./multistepform.css"
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


const MultiStepForm = () => {
    
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const notify = (err) => toast.error(err,{
        autoClose: 2000,
        theme: "dark",
        pauseOnHover: false,
    });
  
    useEffect(() => {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);
  
    const handleNext = () => {
      const currentErrors = validateStep(step);
      if (Object.keys(currentErrors).length === 0) {
        setStep(step + 1);
      } else {
        setErrors(currentErrors);
      }
    };
  
    const handleBack = () => setStep(step - 1);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
          navigate('/checkout');
        }, 5000);
    };
  
    const validateStep = (step) => {
      const newErrors = {};
      if (step === 1) {
        if (!formData.firstname){
            newErrors.firstname = 'First Name is required';
            notify(newErrors.firstname)
        }
        if (!formData.lastname){
            newErrors.lastname = 'Last Name is required';
            notify(newErrors.lastname)
        }
        if (!formData.email) {
          newErrors.email = 'Email is required';
          notify(newErrors.email)
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email address is invalid';
          notify(newErrors.email)
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required'
            notify(newErrors.phone)
        };
      } else if (step === 2) {
        if (!formData.address1){
            newErrors.address1 = 'Address Line 1 is required';
            notify(newErrors.address1)
        }
        if (!formData.city){ 
            newErrors.city = 'City is required';
            notify(newErrors.city)
        }
        if (!formData.state){ 
            newErrors.state = 'State is required';
            notify(newErrors.state)
        }
        if (!formData.zip) {
            newErrors.zip = 'Zip Code is required';
            notify(newErrors.zip)
        }
      }
      return newErrors;
    };
  
    const renderStep = () => {
      switch (step) {
        case 1:
          return <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />;
        case 2:
          return <AddressInfo formData={formData} handleChange={handleChange} errors={errors} />;
        case 3:
          return <Confirmation formData={formData} />;
        default:
          return null;
      }
    };
  
    return (
        <>
            <div style={{position: 'absolute'}}>
                <ToastContainer limit={4}/>
            </div>
            <div className='glass temp'>
                <h1>Multi-Step Form</h1>
                <p>Please fill out the following information to register</p>
                <p>STEP {step} OF 3</p>
                {loading ? (
                    <>
                        <CircularProgress />
                    </>
                ) : (
                    <>
                    {renderStep()}
                    <Navigation
                        step={step}
                        handleNext={handleNext}
                        handleSubmit={handleSubmit}
                        handleBack={handleBack}
                        isFirstStep={step === 1}
                        isLastStep={step === 3}
                    />
                    </>
                )}
            </div>
        </>
    );
  };
  
  export default MultiStepForm;