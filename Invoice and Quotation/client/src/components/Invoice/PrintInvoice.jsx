import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import img from "../../images/itsolution.png";

import moment from "moment";
import { useSelector } from "react-redux";

function PrintInvoice() {
  const { id } = useParams();
  const [duration, setDuration] = useState(""); // Initialize with Monthly as default
  const [invoice, setInvoice] = useState([]);
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceName, setInvoiceName] = useState("");
  const [companyNames, setCompanyNames] = useState([]);
  const [invoiceAddress, setInvoiceAddress] = useState("");
  const [isInvoiceDuration, setIsInvoiceDuration] = useState(false); // Track if a in invoice duration is selected
  const UserId = useSelector((state) => state.auth.user.id);
  const [accountname, setAccountName] = useState("");
  const [accountIFSC, setAccountIFSC] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyCharges, setCompanyCharges] = useState("");
  const [companyBank, setCompanyBank] = useState("");
  const [companySelected, setCompanySelected] = useState("");
  const [editableInvoiceNumber, setEditableInvoiceNumber] = useState("");
const [editableInvoiceDate, setEditableInvoiceDate] = useState(null);
const [startInvoiceDate, setstartInvoiceDate] = useState(null);
const [endInvoiceDate, setendInvoiceDate] = useState(null);
const [paymentMode, setpaymentMode] = useState("");
const [advancePayment, setadvancePayment] = useState("");



  useEffect(() => {
    const fetchInvoiceAddress = async () => {
      try {
        const response = await axios.get(
          `https://quotation.queuemanagementsystemdg.com/api/invoice-address/${id}`
        );
        if (response.status === 200) {
          const { data } = response;
          setInvoiceAddress(data[0].invoice_address);
        setpaymentMode(data[0].payment_mode);
        setadvancePayment(data[0].advance_payment);
        
       
        
          
        } else {
          console.error("Failed to fetch invoice address");
        }
      } catch (error) {
        console.error("Error fetching invoice address:", error);
      }
    };

    fetchInvoiceAddress();
  }, [id]);

  const fetchInvoice = async () => {
    try {
      const response = await axios.get(
        `https://quotation.queuemanagementsystemdg.com/api/invoice/${id}`
      );
      if (response.status === 200) {
        setEditableInvoiceNumber(response.data[0].invoice_id);
       
        setInvoiceName(response.data[0].invoice_name);
        setInvoice(response.data);
      
   
      }
    } catch (error) {
      console.error("Error fetching invoice:", error);
    }
  };

  const handleDurationChange = (selectedDuration) => {
    setDuration(selectedDuration);
    setIsInvoiceDuration(true);
  };

  const renderServices = (subscriptionFrequency, serviceTypeTitle, selectedCompanyName) => {
    let actualPriceTotal = 0;
    let offerPriceTotal = 0;
    let cgstTotalActualPrice = 0;
    let cgstTotalOfferPrice = 0;
    let sgstTotalOfferPrice = 0;
    let sgstTotalActualPrice = 0;
    let advancePaymentAmount = advancePayment
    console.log(advancePayment);
   

    const services = invoice.filter(
      (q) =>
        q.subscription_frequency === subscriptionFrequency &&
        q.service_type === serviceTypeTitle
    );
  
    services.forEach((q) => {
      actualPriceTotal += q.actual_price;
      offerPriceTotal += q.offer_price;
    });
   
        // // Calculate the remaining amount after deducting advance payment
        // const remainingAmountActual = actualPriceTotal - advancePaymentAmount;
        // const remainingAmountOffer = offerPriceTotal - advancePaymentAmount;
  
    if (services.length > 0) {
      // Apply GST only for Doaguru Infosystems
      if (selectedCompanyName === "Doaguru Infosystems") {
        cgstTotalActualPrice = (actualPriceTotal * 9) / 100;
        sgstTotalActualPrice = (actualPriceTotal * 9) / 100;
        cgstTotalOfferPrice = (offerPriceTotal * 9) / 100;
        sgstTotalOfferPrice = (offerPriceTotal * 9) / 100;
      }
     
      if (selectedCompanyName === "Doaguru Infosystems IGST") {
        cgstTotalActualPrice = (actualPriceTotal * 18) / 100;
        cgstTotalOfferPrice = (offerPriceTotal * 18) / 100;
       

      }
      
  
      // Calculate the total payable amount
      const totalPayableAmountActual =
        actualPriceTotal + cgstTotalActualPrice + sgstTotalActualPrice;
      const totalPayableAmountOffer =
        offerPriceTotal + cgstTotalOfferPrice + sgstTotalOfferPrice;

   
      // Calculate the remaining amount after deducting advance payment
      const remainingAmountActual = totalPayableAmountActual - advancePaymentAmount;
      const remainingAmountOffer = totalPayableAmountOffer - advancePaymentAmount;

  
      return (
        <div className="mt-1">
          <h5 className="fw-bold">{`${serviceTypeTitle} Services - ${subscriptionFrequency}`}</h5>
          <div className="" style={{ maxHeight: "auto", overflowY: "auto" }}>
            <table className="table table-bordered" style={{ border: "black" }}>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Service Name</th>
                  <th>Actual Price(INR)</th>
                  <th>Offer Price(INR)</th>
                </tr>
              </thead>
              <tbody>
                {services.map((q, index) => (
                  <tr key={q.id}>
                    <td
                      className="text-center"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      {index + 1}
                    </td>
                    <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {q.service_name}
                    </td>
                    <td className="th">{q.actual_price}</td>
                    <td className="th">{q.offer_price}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="2" className="th">
                    Total {`${serviceTypeTitle} Amount`}
                  </td>
                  <td className="thbold">{actualPriceTotal}</td>
                  <td className="thbold">{offerPriceTotal}</td>
                </tr>
           
   
                
        
                {/* Render GST rows if the selected company is Doaguru Infosystems */}
                {selectedCompanyName === "Doaguru Infosystems IGST" && (
                  <>
                    <tr>
                      <td colSpan="2" className="th text-center">
                        IGST 18%
                      </td>
                      <td className="thbold1">{cgstTotalActualPrice}</td>
                      <td className="thbold1">{cgstTotalOfferPrice}</td>
                    </tr>
                
                    <tr>
                  <td colSpan="2" className="th">
                    Total Payable Amount
                  </td>
                  <td className="thbold">{totalPayableAmountActual}</td>
                  <td className="thbold">{totalPayableAmountOffer}</td>
                </tr>
                  </>
                )}
                 {selectedCompanyName === "Doaguru Infosystems" && serviceTypeTitle === "Paid" && (
                  <>
                    <tr>
                      <td colSpan="2" className="th text-center">
                        CGST 9%
                      </td>
                      <td className="thbold1">{cgstTotalActualPrice}</td>
                      <td className="thbold1">{cgstTotalOfferPrice}</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="th text-center">
                        SGST 9%
                      </td>
                      <td className="thbold1">{sgstTotalActualPrice}</td>
                      <td className="thbold1">{sgstTotalOfferPrice}</td>
                    </tr>
                    <tr>
                  <td colSpan="2" className="th">
                    Total Payable Amount
                  </td>
                  <td className="thbold">{totalPayableAmountActual}</td>
                  <td className="thbold">{totalPayableAmountOffer}</td>
                </tr>
                  </>
                )}

{serviceTypeTitle === "Paid" && (
                  <>
               <tr>
      <td colSpan="2" className="th">
        Advance Payment Deduction
      </td>
      <td className="thbold">{advancePaymentAmount}</td>
      <td className="thbold">{advancePaymentAmount}</td>
    </tr>
     <tr>
      <td colSpan="2" className="th">
        Remaining Amount
      </td>
      <td className="thbold">{remainingAmountActual}</td>
      <td className="thbold">{remainingAmountOffer}</td>
    </tr>
                  </>
                )}
                    
                
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  
  

  // Fetch company names from the backend
  const fetchCompanyNames = async () => {
    try {
      const response = await axios.get(
        `https://quotation.queuemanagementsystemdg.com/api/company-invoice-names/${UserId}`
      );
      if (response.status === 200) {
        setCompanyNames(response.data); // Assuming response.data is an array of company names
      } else {
        console.error("Failed to fetch company names");
      }
    } catch (error) {
      console.error("Error fetching company names:", error);
    }
  };

  const handleCompanyChange = async (selectedCompanyName) => {

    try {
      // Make a POST request to fetch data for the selected company
      const response = await axios.post(
        "https://quotation.queuemanagementsystemdg.com/api/company-invoice-data",
        {
          company_name: selectedCompanyName,
        }
      );

      if (response.status === 200) {
        const {
          logo,
          company_name_account_name,
          company_name_account_ifsc,
          company_name_account_number,
          company_address,
          charges,
          bank,
        } = response.data;

        // Update the component state with the fetched data
        setCompanyLogo(logo);
        setAccountName(company_name_account_name);
        setAccountIFSC(company_name_account_ifsc);
        setAccountNumber(company_name_account_number);
        setCompanyAddress(company_address);
        setCompanyCharges(charges);
        setCompanyBank(bank);
      } else {
        console.error("Error fetching company data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching company data:", error.message);
    }
    setCompanySelected(selectedCompanyName);
  };
 
  
  useEffect(() => {
    fetchInvoice();
    fetchCompanyNames();
  }, []);

  const handlePrintPage = () => {
    if ( !companySelected) {
      // If any of the required fields are not selected, prevent printing
      alert("Please select company name before printing.");
      return;
    }
    else if ( !editableInvoiceDate) {
      // If any of the required fields are not selected, prevent printing
      alert("Please select  date before printing.");
      return;
    }
    else if (!startInvoiceDate ) {
      // If any of the required fields are not selected, prevent printing
      alert("Please select  start date of duration before printing.");
      return;
    }
    else if (!endInvoiceDate ) {
      // If any of the required fields are not selected, prevent printing
      alert("Please select end date of duration before printing.");
      return;
    }
    else if (!isInvoiceDuration ) {
      // If any of the required fields are not selected, prevent printing
      alert("Please select  duration before printing.");
      return;
    }
  
  

  
 
  
    document.title = `Invoice of ${invoiceName}`;
    window.print();
    document.title = "Your Website Title";
  };
  
// Handle input changes for invoice number
const handleInvoiceNumberChange = (e) => {
  setEditableInvoiceNumber(e.target.value);
};

// Handle input changes for invoice date
const handleInvoiceDateChange = (e) => {
  setEditableInvoiceDate(e.target.value);
};
const handleStartInvoiceDateChange = (e) => {
  setstartInvoiceDate(e.target.value);
};
const handleEndInvoiceDateChange = (e) => {
  setendInvoiceDate(e.target.value);
};
  return (
    <Wrapper>
      <div className="">
      <Link
        to={`/final-invoice/${id}`}
        className="btn btn-success mx-1 mt-3 mb-2 btn-print w-25 "
      >
        <i className="bi bi-arrow-return-left mx-1 "></i> Back
      </Link>

             
             <Link
               to="/invoicelist"
               className="text-white text-decoration-none btn btn-success mt-2 float-end w-25 btn-print"
             >
               Invoice List
             </Link>
          </div>
     
      <div className="container">
        <button
          className="btn btn-success mb-3  mt-2  w-100 p-3   btn-print"
          onClick={handlePrintPage}
        >
          Print_Page
        </button>
      </div>

      
      <div className=" mt-5">
        <div className="mb-5">
          <h4 className="btn-print">Select Company Name</h4>
          <select
            className="form-select btn-print"
            onChange={(e) => handleCompanyChange(e.target.value)}
            required
          >
            <option value="">Select Company</option>
            {companyNames.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex">
          <div className="">
            <img
              src={companyLogo}
              height={200}
              width={200}
              alt=""
              style={{ marginTop: "-3rem" }}
            />
          </div>
          <div className="details" >
            <h6 style={{ lineHeight: "1.5rem", fontSize: "1rem" }}>
              {accountname} Address :- {companyAddress}
              <br /> Moblie Number:- 7000102121 <br />
              {companyCharges}
              <br /> Email Id :- info@doaguru.com
            </h6>
          </div>
        </div>
   
        <div className="d-flex justify-content-between  th">
  <div className="">Invoice No :- 
    <input
 className="borderremove th"
      value={editableInvoiceNumber}
      onChange={handleInvoiceNumberChange}
      
    />
  </div>
  <div className="">
    Invoice Date :- 
    <input
      className="borderremove date-input th"
      type="date"
      value={editableInvoiceDate}
      onChange={handleInvoiceDateChange}
      
    />
    
  </div>

  
</div>
<div className="d-flex justify-content-between th">
  <div className="th">
    Service Duration :- 
    <input
      className="borderremove1 date-input th"
      type="date"
      value={startInvoiceDate}
      onChange={handleStartInvoiceDateChange}
      
    />
     to
   
    <input
      className="borderremove1 date-input th mx-1"
      type="date"
      value={endInvoiceDate}
      onChange={handleEndInvoiceDateChange}
      
    />
    
  </div>
  <div className="">
    Payment Mode :- {paymentMode}
  </div>
</div>


        <div className="d-flex mt-3">
          <table class="table table-bordered" style={{ border: "black" }}>
            <thead>
              <tr>
                <th scope="col">
                  {" "}
                  <strong>BILL TO</strong>
                </th>
                <th scope="col">
                  {" "}
                  <strong>SHIP TO</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h6>{invoiceName}</h6>
                </td>
                <td>
                  {" "}
                  <h6>{invoiceName}</h6>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h6>{invoiceAddress}</h6>
                </td>
                <td>
                  {" "}
                  <h6>{invoiceAddress}</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
       
        {/* Duration selection dropdown */}

        <div>
        <h4 className="btn-print">Select Invoice Duration</h4>
          <select
            value={duration}
            className="form-select btn-print"
            onChange={(e) => handleDurationChange(e.target.value)}
          >
            <option value="">Select Duration</option>
            {Array.from(
              new Set(invoice.map((item) => item.subscription_frequency))
            ).map((duration, index) => (
              <option key={index} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>

        {/* Render service tables based on the selected duration */}
        {renderServices(duration, "Paid",companySelected)}
        {renderServices(duration, "Complimentary",companySelected)}
        <div className="d-flex justify-content-between">
          <div className="">
            <h6>Bank Details</h6>
            <ul className="">
              <li>Name : {accountname}</li>
              <li>IFSC Code : {accountIFSC} </li>
              <li>Account No : {accountNumber}</li>
              <li>Bank : {companyBank}</li>
            </ul>
          </div>
          <div className="">
            <p className=" mx-3 fw-medium" style={{marginTop:"8.5rem"}}>AUTHORISED SIGNATURE</p>
          </div>
        </div>
        <div className="container">
        <button
          className="btn btn-success mb-3  mt-2  w-100 p-3   btn-print"
          onClick={handlePrintPage}
        >
          Print_Page
        </button>
      </div>
      </div>
    </Wrapper>
  );
}

export default PrintInvoice;

const Wrapper = styled.div`
.th {
    font-weight: bold;
    font-size: 1rem;
  }
  li {
    font-weight: bold;
    font-size: 1rem;
    padding: 0.3rem;
  }
  .thbold {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .thbold1 {
    font-weight: bold;
    font-size: 1rem;
  }

  .btn-print {
    @media print {
      display: none;
    }
  }
  .borderremove{
    width: 5.5rem;
      @media print{
          border: none;
      }
      
    }
  .borderremove1{
    width: 6rem;
      @media print{
          border: none;
      }
      
    }
    .date-input::-webkit-calendar-picker-indicator {
        display: none;
       
    }
    .details {
      margin-left: 7rem;
      @media screen and (max-width: 768px){
        margin-left: 0.5rem;
      }
    }

`;
