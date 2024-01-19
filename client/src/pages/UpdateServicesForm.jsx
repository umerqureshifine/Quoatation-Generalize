
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateServicesForm = ({ quotationId, onUpdateSuccess, onUpdateError }) => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/api/quotation/${quotationId}`);
      setServices(response.data);

    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:9000/api/quotation/${quotationId}`, {
        services,

      });
      

      if (response.data.success) {
        console.log('Services updated successfully');
        onUpdateSuccess();
      }
      
    } catch (error) {
      console.error('Error updating services:', error);
      onUpdateError();
    }
  };

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  useEffect(() => {
    fetchServices();
  }, [quotationId]);

  return (
    <div className="container">
       <div className='form-control'>
      {/* Form components for updating services */}
      {services.map((service, index) => (
        <div key={index}>
          <div className="row">
          <div className="col-lg-3">
          <label className="form-check-label">
            Service Type:
            <input
            className='form-control'
              type="text"
              value={service.service_type}
              onChange={(e) => handleServiceChange(index, 'service_type', e.target.value)}
             
            />
          </label>
          </div>
          <div className="col-lg-5">

          <label className="form-check-label">
            Service Description:
            <textarea
             rows="3" cols="90"
              className="form-control"
              value={service.service_description}
              onChange={(e) => handleServiceChange(index, 'service_description', e.target.value)}
            />
          </label>
          </div>

          <div className="col-lg-2">

          <label className="form-check-label">
            Actual Price:
            <input
             className="form-control"
              type="number"
              value={service.actual_price}
              onChange={(e) => handleServiceChange(index, 'actual_price', parseFloat(e.target.value))}
            />
          </label>
          </div>


          <div className="col-lg-2">
          <label className="form-check-label">
            Offer Price:
            <input
              className="form-control"
              type="number"
              value={service.offer_price}
              onChange={(e) => handleServiceChange(index, 'offer_price', parseFloat(e.target.value))}
            />
          </label>
          </div>
          </div>
        </div>
      ))}
<button className='btn btn-success' onClick={(e) => handleUpdate(e)}>Update Services</button>

    </div>
    </div>
   
  );
};

export default UpdateServicesForm;
