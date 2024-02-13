


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";

// const AddServices = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [quotationName, setQuotationName] = useState('');
//   const [serviceslist, setServiceslist] = useState([]);
//   const [otherServices, setOtherServices] = useState(['']);
//   const [services, setServices] = useState([
//     {
//       service_type: "",
//       service_name: "",
//       service_description: "",
//       actual_price: null,
//       offer_price: null,
//       subscription_frequency: "",
//     },
//   ]);
//   const [subscriptionFrequencies, setSubscriptionFrequencies] = useState([
//     "Yearly",
//     "Monthly",
//     "Quarterly",
//     "One Time",
//     "Weekly",
//   ]);


//   const handleServiceChange = (index, field, value) => {
//     const newServices = [...services];
//     // newServices[index][field] = value;
     
//     if (field === 'service_type' && value === 'Complimentary') {
//       // If the service type is 'Complimentary', disable the offer price and set it to 0
//       newServices[index]['offer_price'] = 0;
//     }
  
//     if (field === 'offer_price' && newServices[index].service_type === 'Complimentary') {
//       // If the service type is 'Complimentary', set offer price to 0 and disable the input
//       newServices[index][field] = 0;
//     } else if (field === 'offer_price' && value > newServices[index].actual_price) {
//       // If offer price is greater than actual price, set it to actual price and alert
//       alert("Offer price cannot be greater than actual price");
//       newServices[index][field] = newServices[index].actual_price;
//     } else {
//       // Otherwise, update the field normally
//       newServices[index][field] = value;
//     }
//     setServices(newServices);
//   };

//   const addService = () => {
//     setServices([
//       ...services,
//       {
//         service_type: "",
//         service_name: "",
//         service_description: "",
//         actual_price: null,
//         offer_price: null,
//         subscription_frequency: "",
//       },
//     ]);
//   };

//   const removeService = (index) => {
//     const newServices = [...services];
//     newServices.splice(index, 1);
//     setServices(newServices);
//   };

//   const handleOtherServiceChange = (index, value) => {
//     const newOtherServices = [...otherServices];
//     newOtherServices[index] = value;
//     setOtherServices(newOtherServices);
//   };



//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const servicesToSave = services.map((service, index) => {
//         // return {
//         //   service_type:
//         //     service.service_type === 'Other Service'
//         //       ? otherServices[index]
//         //       : service.service_type,
//         //   service_description: service.service_description,
//         //   actual_price: service.actual_price,
//         //   offer_price: service.offer_price,
//         //   subscription_frequency: service.subscription_frequency,
//         // };
//         return {
//           service_name:
//             service.service_name === "Other Service"
//               ? otherServices[index]
//               : service.service_name,
//           service_type: service.service_type,
//           service_description: service.service_description,
//           actual_price: service.actual_price,
//           offer_price: service.offer_price,
//           subscription_frequency: service.subscription_frequency,
//         };
//       });

//       const response = await axios.post(
//         `http://localhost:9000/api/services/${id}`,
//         {
//           quotation_name: quotationName,
//           services: servicesToSave,
//         }
//       );

//       console.log('Services added successfully:', response.data);

//       navigate(`/final-quotation/${id}`);
//     } catch (error) {
//       console.error(
//         'Error adding services:',
//         error.response?.data || error.message
//       );
//     }
//   };

//   const getQuotationName = async () => {
//     try {
//       const response = await axios.get(`http://localhost:9000/api/quotation/${id}`);
//       setQuotationName(response.data[0].quotation_name);
//       console.log(response);
//     } catch (error) {
//       console.log('Error fetching quotation name:', error);
//     }
//   };

//   const getServicelist = async () => {
//     try {
//       const res = await axios.get(`http://localhost:9000/api/services`);
//       setServiceslist(res.data.services);
//     } catch (error) {
//       console.log('Error fetching services list:', error);
//     }
//   };

//   useEffect(() => {
//     getQuotationName();
//     getServicelist();
//   }, [id]);

//   const handleChange = (e, index) => {
//     const newServices = [...services];
//     newServices[index]['service_name'] = e.target.value;
//     setServices(newServices);
//   };

//   return (

//     <Wrapper>
//       <div className="container mt-3">
//       <div className="row">
//         <form className="form-control" onSubmit={handleSubmit}>
//           <h5 className="mb-4 text-center">
//             Add Services to Quotation: {quotationName}
//             <Link to={`/final-quotation/${id} `} className="btn btn-success mx-3 mt-4 mb-2 float-end">
//               Final Quotation
//             </Link>
//           </h5>

//           {services.map((service, index) => (
//             <div key={index}>
//               <div className="row resp">
//                 <h6>Service {index + 1}</h6>
//                 <div className="col-lg-12">
//   <label className="form-check-label">
//     Service Type:
//     <select
//       className="form-select"
//       id={`serviceType${index}`}
//       name="service_type"
//       onChange={(e) => handleServiceChange(index, "service_type", e.target.value)}
//       value={service.service_type}
//       required
//     >
//       <option value="" disabled>
//         Select Service Type
//       </option>
//       <option value="Paid">Paid Service</option>
//       <option value="Complimentary">Complimentary Service</option>
//       {/* Add other service types as needed */}
//     </select>
//   </label>
// </div>
//                 <div className="col-lg-2">
//             <label className="form-check-label">
//               Subscription:
//               <select
//                 className="form-select"
//                 id={`subscriptionFrequency${index}`}
//                 name="subscription_frequency"
//                 onChange={(e) =>
//                   handleServiceChange(index, "subscription_frequency", e.target.value)
//                 }
//                 value={service.subscription_frequency}
//                 required
//               >
//                 <option value="" disabled>
//                   Select Subscription Frequency
//                 </option>
//                 {subscriptionFrequencies.map((frequency, key) => (
//                   <option key={key} value={frequency}>
//                     {frequency}
//                   </option>
//                 ))}
//               </select>
//             </label>
//           </div>
//                 {/* <div className="col-lg-2">
//                    <label className="form-check-label">
//                     Services:
//                     {service.service_type === 'Other Service' ? (
//                       <input
//                         type="text"
//                         className="form-control"
//                         value={otherServices[index]}
//                         onChange={(e) => handleOtherServiceChange(index, e.target.value)}
//                         required
//                       />
//                     ) : (
//                     //   <select
//                     //     className="form-select"
//                     //     id={`serviceType${index}`}
//                     //     name="service_type"
//                     //     onChange={(e) => handleChange(e, index)}
//                     //     value={service.service_type}
//                     //     required
//                     //   >
//                     //   <option selected disabled value="">
//                     //     Select Service Type
//                     //   </option>
//                     //   {serviceslist.map((item, key) => (
//                     //     <option key={key} value={item.service_name}>
//                     //       {item.service_name}
//                     //     </option>
//                     //   ))}
//                     //   <option value="Other Service">Other Service</option>
//                     // </select>
//                     <select
//                     className="form-select"
//                     id={`servicename${index}`}
//                     name="service_name"
//                     onChange={(e) => handleChange(e, index)}
//                     value={service.service_name}
//                     required
//                   >
//                     <option value="" disabled>
//                       Select Service Type
//                     </option>
//                     {serviceslist.map((item, key) => (
//                       <option key={key} value={item.service_name}>
//                         {item.service_name}
//                       </option>
//                     ))}
//                     <option value="Other Service">Other Service</option>
//                   </select>
//                      )}
//                   </label>
//                 </div> */}
//                 <div className="col-lg-2">
//                     <label className="form-check-label">
//                       Service Name:
//                       {service.service_name === "Other Service" ? (
//                         <input
//                           type="text"
//                           className="form-control"
//                           value={otherServices[index]}
//                           onChange={(e) =>
//                             handleOtherServiceChange(index, e.target.value)
//                           }
//                           required
//                         />
//                       ) : (
//                         <select
//                           className="form-select"
//                           id={`servicename${index}`}
//                           name="service_name"
//                           onChange={(e) => handleChange(e, index)}
//                           value={service.service_name}
//                           required
//                         >
//                           <option value="" disabled>
//                             Select Service Type
//                           </option>
//                           {serviceslist.map((item, key) => (
//                             <option key={key} value={item.service_name}>
//                               {item.service_name}
//                             </option>
//                           ))}
//                           <option value="Other Service">Other Service</option>
//                         </select>
//                       )}
//                     </label>
//                   </div>
//                 <div className="col-lg-4">
//                   <label className="form-check-label">
//                     Service Description:
//                     <textarea
//                       required
//                       rows="3"
//                       cols="90"
//                       value={service.service_description}
//                       className="form-control"
//                       onChange={(e) =>
//                         handleServiceChange(index, 'service_description', e.target.value)
//                       }
//                     />
//                   </label>
//                 </div>
//                 <div className="col-lg-2">
//                   <label className="form-check-label">
//                     Actual Price:
//                     <input
//                       type="number"
//                       className="form-control"
//                       value={service.actual_price}
//                       onChange={(e) =>
//                         handleServiceChange(index, 'actual_price', parseFloat(e.target.value))
//                       }
//                       required
//                     />
//                   </label>
//                 </div>
//                 <div className="col-lg-2">
//                   <label className="form-check-label">
//                     Offer Price:
//                     <input
//                       type="number"
//                       className="form-control"
//                       value={service.offer_price}
//                       onChange={(e) =>
//                         handleServiceChange(index, 'offer_price', parseFloat(e.target.value))
//                       }
//                       required
//                     />
//                   </label>
//                 </div>
//                 <div className="col-12">
//                   <button
//                     type="button"
//                     className="btn btn-danger float-end mb-2 mt-2"
//                     onClick={() => removeService(index)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <button type="button" className="btn btn-success mt-2 mb-2" onClick={addService}>
//             Add Service
//           </button>

//           <button type="submit" className="btn btn-success mx-3 mt-2 mb-2">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//     </Wrapper>
  
//   );
// };

// export default AddServices;

// const Wrapper = styled.div`
//  .resp{
//   width: 100%;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//   }
//  }
// `;



import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Addservices = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quotationName, setQuotationName] = useState('');
  const [serviceslist, setServiceslist] = useState([]);
  const [otherServices, setOtherServices] = useState(['']);
  const [services, setServices] = useState([
    {
      service_type: "",
      service_name: "",
      service_description: "",
      actual_price: null,
      offer_price: null,
      subscription_frequency: "",
    },
  ]);
  const [subscriptionFrequencies, setSubscriptionFrequencies] = useState([
    "Yearly",
    "Monthly",
    "Quarterly",
    "One Time",
    "Weekly",
  ]);


  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    // newServices[index][field] = value;
     
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
        subscription_frequency: "",
      },
    ]);
  };

  const removeService = (index) => {
    const newServices = [...services];
    newServices.splice(index, 1);
    setServices(newServices);
  };

  const handleOtherServiceChange = (index, value) => {
    const newOtherServices = [...otherServices];
    newOtherServices[index] = value;
    setOtherServices(newOtherServices);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const servicesToSave = services.map((service, index) => {
        // return {
        //   service_type:
        //     service.service_type === 'Other Service'
        //       ? otherServices[index]
        //       : service.service_type,
        //   service_description: service.service_description,
        //   actual_price: service.actual_price,
        //   offer_price: service.offer_price,
        //   subscription_frequency: service.subscription_frequency,
        // };
        return {
          service_name:
            service.service_name === "Other Service"
              ? otherServices[index]
              : service.service_name,
          service_type: service.service_type,
          service_description: service.service_description,
          actual_price: service.actual_price,
          offer_price: service.offer_price,
          subscription_frequency: service.subscription_frequency,
        };
      });

      const response = await axios.post(
        `http://localhost:9000/api/services/${id}`,
        {
          quotation_name: quotationName,
          services: servicesToSave,
        }
      );

      console.log('Services added successfully:', response.data);

      navigate(`/final-quotation/${id}`);
    } catch (error) {
      console.error(
        'Error adding services:',
        error.response?.data || error.message
      );
    }
  };

  const getQuotationName = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/api/quotation/${id}`);
      setQuotationName(response.data[0].quotation_name);
    } catch (error) {
      console.log('Error fetching quotation name:', error);
    }
  };

  const getServicelist = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/services`);
      setServiceslist(res.data.services);
    } catch (error) {
      console.log('Error fetching services list:', error);
    }
  };

  useEffect(() => {
    getQuotationName();
    getServicelist();
  }, [id]);

  const handleChange = (e, index) => {
    const newServices = [...services];
    newServices[index]['service_name'] = e.target.value;
    setServices(newServices);
  };

  return (

    <Wrapper>
      <div className="container mt-3">
      <div className="row">
        <form className="form-control" onSubmit={handleSubmit}>
          <h5 className="mb-4 text-center">
            Add Services to Quotation: {quotationName}
            <Link to={`/final-quotation/${id} `} className="btn btn-success mx-3 mt-4 mb-2 float-end">
              Final Quotation
            </Link>
          </h5>

          {services.map((service, index) => (
            <div key={index}>
              <div className="row resp">
                <h6>Service {index + 1}</h6>
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
                {/* <div className="col-lg-2">
                   <label className="form-check-label">
                    Services:
                    {service.service_type === 'Other Service' ? (
                      <input
                        type="text"
                        className="form-control"
                        value={otherServices[index]}
                        onChange={(e) => handleOtherServiceChange(index, e.target.value)}
                        required
                      />
                    ) : (
                    //   <select
                    //     className="form-select"
                    //     id={`serviceType${index}`}
                    //     name="service_type"
                    //     onChange={(e) => handleChange(e, index)}
                    //     value={service.service_type}
                    //     required
                    //   >
                    //   <option selected disabled value="">
                    //     Select Service Type
                    //   </option>
                    //   {serviceslist.map((item, key) => (
                    //     <option key={key} value={item.service_name}>
                    //       {item.service_name}
                    //     </option>
                    //   ))}
                    //   <option value="Other Service">Other Service</option>
                    // </select>
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
                </div> */}
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
                        handleServiceChange(index, 'service_description', e.target.value)
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
                        handleServiceChange(index, 'actual_price', parseFloat(e.target.value))
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
                        handleServiceChange(index, 'offer_price', parseFloat(e.target.value))
                      }
                      required
                    />
                  </label>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-danger float-end mb-2 mt-2"
                    onClick={() => removeService(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button type="button" className="btn btn-success mt-2 mb-2" onClick={addService}>
            Add Service
          </button>

          <button type="submit" className="btn btn-success mx-3 mt-2 mb-2">
            Submit
          </button>
        </form>
      </div>
    </div>
    </Wrapper>
  
  );
};

export default Addservices;

const Wrapper = styled.div`
 .resp{
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
 }
`;