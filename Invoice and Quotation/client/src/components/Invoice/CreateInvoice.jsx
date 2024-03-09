import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import UserLogin from "../../pages/UserLogin";
import Logout from "../../pages/Logout";

const CreateInvoice = () => {
  const userId = useSelector((state) => state.auth.user.id);
  const navigate = useNavigate();
  const [invoiceName, setInvoiceName] = useState("");
  const [invoiceAddress, setInvoiceAddress] = useState("");
  const [invoiceAdvancePayment, setInvoiceAdvancePayment] = useState("");
  const [serviceslist, setServiceslist] = useState([]);
  const [services, setServices] = useState([
    {
      service_type: "",
      service_name: "",
      actual_price: null,
      offer_price: null,
      subscription_frequency: "",
    },
  ]);
  const [otherServices, setOtherServices] = useState(
    Array(services.length).fill("")
  );
  const [subscriptionFrequencies, setSubscriptionFrequencies] = useState([
    "Yearly",
    "Monthly",
    "Quarterly",
    "Half Yearly",
    "One Time",
    "Weekly",
  ]);

  const [paymentmode, setpaymentmode] = useState([]);

  const userName = useSelector((state) => state.auth.user.id);

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];

    if (field === "service_type" && value === "Complimentary") {
      // If the service type is 'Complimentary', disable the offer price and set it to 0
      newServices[index]["offer_price"] = 0;
    }

    if (
      field === "offer_price" &&
      newServices[index].service_type === "Complimentary"
    ) {
      // If the service type is 'Complimentary', set offer price to 0 and disable the input
      newServices[index][field] = 0;
    } else if (
      field === "offer_price" &&
      value > newServices[index].actual_price
    ) {
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
          actual_price: service.actual_price,
          offer_price: service.offer_price,
          subscription_frequency: service.subscription_frequency,
        };
      });

      const response = await axios.post(
        "https://quotation.queuemanagementsystemdg.com/api/create-invoice",
        {
          invoice_name: invoiceName,
          invoice_address: invoiceAddress,
          payment_mode: paymentmode,
          advance_payment: invoiceAdvancePayment,
          services: servicesToSave,
          user_id: userName,
        }
      );

      console.log("Invoice added successfully:", response.data);

      navigate(`/final-invoice/${response.data.invoice.id}`);
    } catch (error) {
      console.error(
        "Error adding quotation:",
        error.response?.data || error.message
      );
    }
  };

  const getServicelist = async () => {
    try {
      const res = await axios.get(
        `https://quotation.queuemanagementsystemdg.com/api/servicelist/${userId}`
      );
      console.log(res.data);
      setServiceslist(res.data);
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

  const handleCreateServices = () => {
    navigate(``);
  };

  return (
    <Wrapper>
      <Link
        to={`/create-company-profile`}
        className="btn btn-success mt-3 mx-2"
      >
        <i className="bi bi-arrow-return-left"></i> Back
      </Link>
      <div className="container mt-5">
        <div className="row ">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="row g-2  p-2">
              <div className="col-lg-3  ">
                {" "}
                <UserLogin />
              </div>

              <div className="col-lg-6 text-lg-center text-sm-start ">
                {" "}
                <h5 className="mb-4 ">Invoice Generation System :</h5>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-success ">
                  <Link
                    to="/invoicelist"
                    className="text-white text-decoration-none"
                  >
                    Invoice List
                  </Link>
                </button>
              </div>
              <div className="col-lg-1  ">
                {" "}
                <Logout />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 mb-3">
                <input
                  type="text"
                  className="form-control text-center"
                  id="invoiceName"
                  name="invoice_name"
                  placeholder="Invoice Name"
                  value={invoiceName}
                  onChange={(e) => setInvoiceName(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-3">
                <select
                  className="form-select"
                  id={`paymentMode`}
                  name="payment_mode"
                  onChange={(e) => setpaymentmode(e.target.value)}
                  value={paymentmode}
                  required
                >
                  <option value="" disabled>
                    Select Payment Mode
                  </option>
                  <option value="Payment Cheque">Payment Cheque</option>
                  <option value="Net Banking">Net Banking</option>
                  <option value="UPI">UPI</option>
                  <option value="Cash">Cash</option>
                  {/* Add other Payment Modes as needed */}
                </select>
              </div>
              <div className="col-lg-3 mb-3">
                <input
                  type="number"
                  className="form-control text-center"
                  id="invoiceAdvancePayment"
                  name="advance_payment"
                  placeholder="Invoice Advance Payment"
                  value={invoiceAdvancePayment}
                  onChange={(e) => setInvoiceAdvancePayment(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-3 mb-3">
                <textarea
                  type="text"
                  className="form-control text-center"
                  id="invoiceName"
                  name="invoice_address"
                  placeholder="Invoice Address"
                  value={invoiceAddress}
                  onChange={(e) => setInvoiceAddress(e.target.value)}
                  required
                />
              </div>
            
            </div>

            {services.map((service, index) => (
              <div key={index}>
                <div className="row  gap-2">
                  <h6>Service {index + 1}</h6>

                  <div className="col-lg-2">
                    <label className="form-check-label">
                      Service Type:
                      <select
                        className="form-select"
                        id={`serviceType${index}`}
                        name="service_type"
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "service_type",
                            e.target.value
                          )
                        }
                        value={service.service_type}
                        required
                      >
                        <option value="" disabled>
                          Select Service Type
                        </option>
                        <option value="Paid">Paid Service</option>
                        <option value="Complimentary">
                          Complimentary Service
                        </option>
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
                  <div className="col-lg-1 mt-3 mx-lg-4 mx-sm-1 p-1 ">
                    <button
                      type="button"
                      className="btn btn-danger  "
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
              className="btn btn-success mt-3"
              onClick={addService}
            >
              Add Service
            </button>

            <button type="submit" className="btn btn-success mx-3 mt-3 ">
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

export default CreateInvoice;
