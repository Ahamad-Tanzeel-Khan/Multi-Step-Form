import React from 'react';
import "./personalinfo.css"

const PersonalInfo = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2>Personal Information</h2>
        <div className='inp-main-container'>
            <div className='name-inp-container'>
                <div className='inp-container'>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder='Enter your first name'
                        autoComplete='off'
                        value={formData.firstname}
                        onChange={handleChange}
                        style={{ borderColor: errors.firstname ? 'red' : '' }}
                    />
                </div>
                <div className='inp-container'>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        placeholder='Enter your last name'
                        autoComplete='off'
                        value={formData.lastname}
                        onChange={handleChange}
                        style={{ borderColor: errors.lastname ? 'red' : '' }}
                    />
                </div>
            </div>
            <div className='inp-container'>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder='Enter your email address'
                    autoComplete='off'
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: errors.email ? 'red' : '' }}
                />
            </div>
            <div className='inp-container'>
                <label>Phone</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder='Enter your phone number'
                    autoComplete='off'
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ borderColor: errors.phone ? 'red' : '' }}
                />
            </div>
        </div>
    </div>
  );
};

export default PersonalInfo;
