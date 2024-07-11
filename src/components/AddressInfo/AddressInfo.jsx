import React from 'react';

const AddressInfo = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2>Address Information</h2>
      <div className='inp-main-container'>
        <div className='inp-container'>
            <label>Address Line 1</label>
            <input
                type="text"
                name="address1"
                value={formData.address1}
                placeholder='Enter address 1'
                onChange={handleChange}
                style={{ borderColor: errors.address1 ? 'red' : '' }}
            />
        </div>

        <div className='inp-container'>
            <label>Address Line 2</label>
            <input
                type="text"
                name="address2"
                placeholder='Enter address 2'
                value={formData.address2}
                onChange={handleChange}
            />
        </div>
        
        <div className='inp-container'>
            <label>State</label>
            <input
                type="text"
                name="state"
                placeholder='Enter your state'
                value={formData.state}
                onChange={handleChange}
                style={{ borderColor: errors.state ? 'red' : '' }}
            />
        </div>

        <div className='name-inp-container'>
            <div className='inp-container'>
                <label>City</label>
                <input
                    type="text"
                    name="city"
                    placeholder='Enter your city'
                    value={formData.city}
                    onChange={handleChange}
                    style={{ borderColor: errors.city ? 'red' : '' }}
                />
            </div>
            
            <div className='inp-container'>
                <label>Zip Code</label>
                <input
                    type="text"
                    name="zip"
                    placeholder='Enter your zip code'
                    value={formData.zip}
                    onChange={handleChange}
                    style={{ borderColor: errors.zip ? 'red' : '' }}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
