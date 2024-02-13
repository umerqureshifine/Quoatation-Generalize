

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logout from "./Logout";
import { Redirect } from 'react-router-dom';
import UserLogin from "./UserLogin";
import { useSelector } from "react-redux";

const QuotationForm1 = () => {
  const navigate = useNavigate();
  const [quotationName, setQuotationName] = useState("");
  const [serviceslist, setServiceslist] = useState([]);
  const [services, setServices] = useState([
   
    {
      service_type: "",
      service_name: "",
      service_description: "",
      actual_price: null,
      offer_price: null,
      subscription_frequency:"",
    },
  ]);
  const [otherServices, setOtherServices] = useState(Array(services.length).fill(""));
  const [subscriptionFrequencies, setSubscriptionFrequencies] = useState([
    "Yearly",
    "Monthly",
    "Quarterly",
    "Half Yearly",
    "One Time",
    "Weekly",
  ]);

  const userName = useSelector(state => state.auth.user.id);


  


  // const handleServiceChange = (index, field, value) => {
  //   const newServices = [...services];
  //   newServices[index][field] = value;
  //   setServices(newServices);
  // };
  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
  
    if (field === 'service_type' && value === 'Complimentary') {
      // If the service type is 'Complimentary', disable the offer price and set it to 0
      newServices[index]['offer_price'] = 0;
    }
  
    if (field === 'offer_price' && newServices[index].service_type === 'Complimentary') {
      // If the service type is 'Complimentary', set offer price to 0 and disable the input
      newServices[index][field] = 0;
    } else if (field === 'offer_price' && value > newServices[index].actual_price) {
      // If offer price is greater than actual price, set it to actual price and alert
      alert("Offer price cannot be greater than actual price");
      newServices[index][field] = newServices[index].actual_price;
    } else {
      // Otherwise, update the field normally
      newServices[index][field] = value;
    }

    

    setServices(newServices);
  };


  const addService = () => {
    setServices([
      ...services,
      {
        service_type: "",
        service_name: "",
        service_description: "",
        actual_price: null,
        offer_price: null,
        subscription_frequency:"",
      },
    ]);
  };

  const removeService = (index) => {
    const newServices = [...services];
    newServices.splice(index, 1);
    setServices(newServices);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    

  //   try {
  //     const response = await axios.post("http://localhost:9000/api/quotation", {
  //       quotation_name: quotationName,
  //       services: services.map((service) => ({
  //         service_type: service.service_type,
  //         service_description: service.service_description,
  //         actual_price: service.actual_price,
  //         offer_price: service.offer_price,
  //       })),
  //     });

  //     console.log("Quotation added successfully:", response.data);

  //     navigate(`/final-quotation/${response.data.quotation.id}`);

     
  //   } catch (error) {
  //     console.error(
  //       "Error adding quotation:",
  //       error.response?.data || error.message
  //     );

    
  //   }
  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const servicesToSave = services.map((service) => {
  //       return {
  //         service_type: service.service_type === "Other Service" ? otherService : service.service_type,
  //         service_description: service.service_description,
  //         actual_price: service.actual_price,
  //         offer_price: service.offer_price,
  //       };
  //     });
  
  //     const response = await axios.post("http://localhost:9000/api/quotation", {
  //       quotation_name: quotationName,
  //       services: servicesToSave,
  //     });
  
  //     console.log("Quotation added successfully:", response.data);
  
  //     navigate(`/final-quotation/${response.data.quotation.id}`);
  //   } catch (error) {
  //     console.error(
  //       "Error adding quotation:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const servicesToSave = services.map((service) => {
        return {
          service_name:
            service.service_name === "Other Service"
              ? otherServices[services.indexOf(service)]
              : service.service_name,
          service_type: service.service_type,
          service_description: service.service_description,
          actual_price: service.actual_price,
          offer_price: service.offer_price,
          subscription_frequency: service.subscription_frequency,
        };
      });
  
      const response = await axios.post("http://localhost:9000/api/quotation", {
        quotation_name: quotationName,
        services: servicesToSave,
        user_id : userName
      });
  
      console.log("Quotation added successfully:", response.data);
  
      navigate(`/final-quotation/${response.data.quotation.id}`);
    } catch (error) {
      console.error(
        "Error adding quotation:",
        error.response?.data || error.message
      );
    }
  };
  
  

  const getServicelist = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/services`);
      console.log(res.data.services);
      setServiceslist(res.data.services);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getServicelist();
  }, []);

  const handleChange = (e, index) => {
    const newServices = [...services];
    newServices[index]["service_name"] = e.target.value;
    setServices(newServices);
  };

  const handleOtherServiceChange = (index, value) => {
    const newOtherServices = [...otherServices];
    newOtherServices[index] = value;
    setOtherServices(newOtherServices);
  };

  return (
    <Wrapper>
      <div className="container mt-5">
    
    
        <div className="row">
          
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="row p-2">
            <div className="col-lg-3">  <UserLogin/></div>
        
            <div className="col-lg-8 ">    <h5 className="mb-4 text-center">
              Quotation Generlize:
              <button  className="btn btn-success mx-3 float-end">
              <Link to='/quotationlist' className="text-white text-decoration-none">Quotation List</Link>
            </button>
            </h5></div>
            <div className="col-lg-1 "> <Logout/></div>

            </div>






            
    
        

        
           
            <div className="col-12 mb-3">
              <input
                type="text"
                className="form-control text-center"
                id="quotationName"
                name="quotation_name"
                placeholder="Quotation Name"
                value={quotationName}
                onChange={(e) => setQuotationName(e.target.value)}
                required
              />
            </div>
{/* 
            {services.map((service, index) => (
              <div key={index}>
                <div className="row">
                  <h6>Service {index + 1}</h6>

                  <div className="col-lg-2">
            <label className="form-check-label">
              Subscription Frequency:
              <select
                className="form-select"
                id={`subscriptionFrequency${index}`}
                name="subscription_frequency"
                onChange={(e) =>
                  handleServiceChange(index, "subscription_frequency", e.target.value)
                }
                value={service.subscription_frequency}
                required
              >
                <option value="" disabled>
                  Select Subscription Frequency
                </option>
                {subscriptionFrequencies.map((frequency, key) => (
                  <option key={key} value={frequency}>
                    {frequency}
                  </option>
                ))}
              </select>
            </label>
          </div>

<div className="col-lg-2">
        <label className="form-check-label">
          Services:
          {service.service_type === "Other Service" ? (
            <input
              type="text"
              className="form-control"
              value={otherServices[index]}
              onChange={(e) => handleOtherServiceChange(index, e.target.value)}
              required
            />
          ) : (
            <select
              className="form-select"
              id={`serviceType${index}`}
              name="service_type"
              onChange={(e) => handleChange(e, index)}
              value={service.service_type}
              required
            >
              <option value="" disabled>
                Select Service Type
              </option>
              {serviceslist.map((item, key) => (
                <option key={key} value={item.service_name}>
                  {item.service_name}
                </option>
              ))}
              <option value="Other Service">Other Service</option>
            </select>
          )}
        </label>
      </div>




                  <div className="col-lg-4">
                    <label className="form-check-label">
                      Service Description:
                      <textarea
                        required
                        rows="3"
                        cols="90"
                        value={service.service_description}
                        className="form-control"
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "service_description",
                            e.target.value
                          )
                        }
                      />
                    </label>
                  </div>
                  <div className="col-lg-2">
                    <label className="form-check-label">
                      Actual Price:
                      <input
                        type="number"
                        className="form-control"
                        value={service.actual_price}
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "actual_price",
                            parseFloat(e.target.value)
                          )
                        }
                        required
                      />
                    </label>
                  </div>
                  <div className="col-lg-2">
                    <label className="form-check-label">
                      Offer Price:
                      <input
                        type="number"
                        className="form-control"
                        value={service.offer_price}
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "offer_price",
                            parseFloat(e.target.value)
                          )
                        }
                        required
                      />
                    </label>
                  </div>
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-danger float-end"
                      onClick={() => removeService(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))} */}

{services.map((service, index) => (
              <div key={index}>
                <div className="row g-3">
                  <h6>Service {index + 1}</h6>
                  {/* <label>Service Type:</label>
                  <input
                    type="text"
                    value={service.service_type}
                    onChange={(e) =>
                      handleServiceChange(index, "service_type", e.target.value)
                    }
                    required
                  /> */}
                  <div className="col-lg-12">
  <label className="form-check-label">
    Service Type:
    <select
      className="form-select"
      id={`serviceType${index}`}
      name="service_type"
      onChange={(e) => handleServiceChange(index, "service_type", e.target.value)}
      value={service.service_type}
      required
    >
      <option value="" disabled>
        Select Service Type
      </option>
      <option value="Paid">Paid Service</option>
      <option value="Complimentary">Complimentary Service</option>
      {/* Add other service types as needed */}
    </select>
  </label>
</div>

                  <div className="col-lg-2">
                    <label className="form-check-label">
                      Subscription:
                      <select
                        className="form-select"
                        id={`subscriptionFrequency${index}`}
                        name="subscription_frequency"
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "subscription_frequency",
                            e.target.value
                          )
                        }
                        value={service.subscription_frequency}
                        required
                      >
                        <option value="" disabled>
                          Select Subscription Frequency
                        </option>
                        {subscriptionFrequencies.map((frequency, key) => (
                          <option key={key} value={frequency}>
                            {frequency}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="col-lg-2">
                    <label className="form-check-label">
                      Service Name:
                      {service.service_name === "Other Service" ? (
                        <input
                          type="text"
                          className="form-control"
                          value={otherServices[index]}
                          onChange={(e) =>
                            handleOtherServiceChange(index, e.target.value)
                          }
                          required
                        />
                      ) : (
                        <select
                          className="form-select"
                          id={`servicename${index}`}
                          name="service_name"
                          onChange={(e) => handleChange(e, index)}
                          value={service.service_name}
                          required
                        >
                          <option value="" disabled>
                            Select Service Type
                          </option>
                          {serviceslist.map((item, key) => (
                            <option key={key} value={item.service_name}>
                              {item.service_name}
                            </option>
                          ))}
                          <option value="Other Service">Other Service</option>
                        </select>
                      )}
                    </label>
                  </div>

                  <div className="col-lg-4">
                    <label className="form-check-label">
                      Service Description:
                      <textarea
                        required
                        rows="3"
                        cols="90"
                        value={service.service_description}
                        className="form-control"
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "service_description",
                            e.target.value
                          )
                        }
                      />
                    </label>
                  </div>
                  <div className="col-lg-2">
                    <label className="form-check-label">
                      Actual Price:
                      <input
                        type="number"
                        className="form-control"
                        value={service.actual_price}
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "actual_price",
                            parseFloat(e.target.value)
                          )
                        }
                        required
                      />
                    </label>
                  </div>
                  <div className="col-lg-2">
                    <label className="form-check-label">
                      Offer Price:
                      <input
                        type="number"
                        className="form-control"
                        value={service.offer_price}
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "offer_price",
                            parseFloat(e.target.value)
                          )
                        }
                        required
                      />
                    </label>
                  </div>
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-danger float-end mb-3"
                      onClick={() => removeService(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-success"
              onClick={addService}
            >
              Add Service
            </button>

            <button type="submit" className="btn btn-success mx-3">
              Submit
            </button>
           
          </form>
          
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Add your styles here */
`;

export default QuotationForm1;




