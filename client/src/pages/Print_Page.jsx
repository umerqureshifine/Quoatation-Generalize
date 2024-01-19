import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import moment from "moment";
import Header from "./Header";
import Footer from "./Footer";


function Print_Page() {

  const { id } = useParams();
  const [quotations, setQuotations] = useState([]);
  const [quotationDate, setQuotationDate] = useState(""); // New state to store quotation name
  const [totalActualPrice, setTotalActualPrice] = useState(0);
  const [totalOfferPrice, setTotalOfferPrice] = useState(0);
  const [monthlyActualPriceTotal, setMonthlyActualPriceTotal] = useState(0); 
  const [monthlyOfferPriceTotal, setMonthlyOfferPriceTotal] = useState(0); 
  const [oneTimeActualPriceTotal, setTimeOneActualPriceTotal] = useState(0); 
  const [oneTimeOfferPriceTotal, setTimeOneOfferPriceTotal] = useState(0);
  const [yearlyActualPriceTotal, setYearlyActualPriceTotal] = useState(0); 
  const [yearlyOfferPriceTotal, setYearlyOfferPriceTotal] = useState(0); 
  const [quarterlyActualPriceTotal, setQuarterlyActualPriceTotal] = useState(0); 
  const [quarterlyOfferPriceTotal, setQuarterlyOfferPriceTotal] = useState(0);
  const [halfyearlyActualPriceTotal, sethalfYearlyActualPriceTotal] = useState(0); 
  const [halfyearlyOfferPriceTotal, sethalfYearlyOfferPriceTotal] = useState(0);
  const [weeklyActualPriceTotal, setWeeklyActualPriceTotal] = useState(0); 
  const [weeklyOfferPriceTotal, setWeeklyOfferPriceTotal] = useState(0)
 
 
  const [notes, setNotes] = useState([]); 
  const [footerImagePath, setFooterImagePath] = useState("");
  const [headerImagePath, setHeaderImagePath] = useState("");

  const fetchQuotations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/quotation/${id}`
      );

      if (response.status === 200) {
        setQuotationDate(response.data[0].created_date); // Set the quotation name
        setQuotations(response.data);
         console.log(response);

        // Calculate totals
        const actualPriceTotal = response.data.reduce(
          (total, q) => total + q.actual_price,
          0
        );
        const offerPriceTotal = response.data.reduce(
          (total, q) => total + q.offer_price,
          0
        );

        setTotalActualPrice(actualPriceTotal);
        setTotalOfferPrice(offerPriceTotal);

          // Calculate separate totals
        const monthlyactualPriceTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "Monthly" ? total + q.actual_price : total),
          0
        );
        
                  const monthlyofferPriceTotal = response.data.reduce(
                  (total, q) => (q.subscription_frequency === "Monthly" ? total + q.offer_price : total),
                  0
                );

        const  actualPriceoneTimeTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "One Time" ? total + q.actual_price : total),
          0
        );

        const  ofterPriceoneTimeTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "One Time" ? total + q.offer_price : total),
          0
        );

        const  actualPriceYearlyTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "Yearly" ? total + q.actual_price : total),
          0
        );

        const  ofterPriceYearlyTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "Yearly" ? total + q.offer_price : total),
          0
        );

        const  actualPriceQuarterlyTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "Quarterly" ? total + q.actual_price : total),
          0
        );

        const  ofterPriceQuarterlyTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "Quarterly" ? total + q.offer_price : total),
          0
        );

        const  actualPriceHalfyearlyTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "Halfyearly" ? total + q.actual_price : total),
          0
        );

        const  ofterPriceHalfyearlyTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "Halfyearly" ? total + q.offer_price : total),
          0
        );

        
        const  actualPriceWeeklyTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "Weekly" ? total + q.actual_price : total),
          0
        );

        const  ofterPriceWeeklyTotal = response.data.reduce(
          (total, q) => (q.subscription_frequency === "Weekly" ? total + q.offer_price : total),
          0
        );


        

        


        setMonthlyActualPriceTotal(monthlyactualPriceTotal);
        setMonthlyOfferPriceTotal(monthlyofferPriceTotal);
        setTimeOneActualPriceTotal(actualPriceoneTimeTotal);
        setTimeOneOfferPriceTotal(ofterPriceoneTimeTotal);
        setYearlyActualPriceTotal(actualPriceYearlyTotal);
        setYearlyOfferPriceTotal(ofterPriceYearlyTotal);
        setQuarterlyActualPriceTotal(actualPriceQuarterlyTotal);
        setQuarterlyOfferPriceTotal(ofterPriceQuarterlyTotal);
        sethalfYearlyActualPriceTotal(actualPriceHalfyearlyTotal);
        sethalfYearlyOfferPriceTotal(ofterPriceHalfyearlyTotal);
        setWeeklyActualPriceTotal(actualPriceWeeklyTotal)
        setWeeklyOfferPriceTotal(ofterPriceWeeklyTotal)

       
      }
    } catch (error) {
      console.error("Error fetching quotations:", error);
    }
  };
  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/notes/${id}`
      );

      if (response.status === 200) {
        setNotes(response.data);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
  const fetchHeaderImage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/${id}/header`
      );

      if (response.status === 200) {
        // Assuming your response.data structure contains the image URL
        setHeaderImagePath(response.data[0]?.file_path);
        console.log("Footer Image URL:", headerImagePath);
      }
    } catch (error) {
      console.error("Error fetching footer image:", error);
    }
  };



  const handlePrintPage = () => {
    
  
    window.print();
  
  };
 


  
  useEffect(() => {
    fetchQuotations();
    fetchNotes();
    
   
  }, []); 

  return (
    <>



  
  

      <Wrapper>
      <Link to={`/final-quotation/${id}`} className="btn btn-success mx-1 mt-3 mb-2 btn-print ">
<i className="bi bi-arrow-return-left mx-1"></i>   Final Quotation
            </Link>
            <Header/>



    
        <div className="">
          <td style={{ fontSize: "1rem", fontWeight: "bold" }}>Date: { moment(quotationDate).format('DD/MM/YYYY')}</td>
        
                <h5 className=" fw-bold">Monthly Services</h5>
                {monthlyActualPriceTotal > 0 && (
  <div className="">
    <h5 className="fw-bold">Monthly Services</h5>
    <table className="table table-bordered mt-1">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Service Type</th>
          <th>Service Description</th>
          <th>Actual Price</th>
          <th>Offer Price</th>
        </tr>
      </thead>
      <tbody>
        {quotations
          .filter((q) => q.subscription_frequency === "Monthly")
          .map((q, index) => (
            <tr key={q.id}>
              <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                {index + 1}
              </td>
              <td style={{ fontSize: "1rem", fontWeight: "bold" }}>{q.service_type}</td>
              <td>{q.service_description}</td>
              <td className="th">{q.actual_price}/-</td>
              <td className="th">{q.offer_price}/-</td>
            </tr>
          ))}
        <tr>
          <td colSpan="3" className="th">
            Total Monthly Amount
          </td>
          <td className="th">{monthlyActualPriceTotal}/-</td>
          <td className="th">{monthlyOfferPriceTotal}/-</td>
        </tr>
      </tbody>
    </table>
  </div>
)}

{oneTimeActualPriceTotal > 0 && (
  <div className=" mt-3">
    <h5 className="fw-bold">One Time Services</h5>
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Service Type</th>
          <th>Service Description</th>
          <th>Actual Price</th>
          <th>Offer Price</th>
        </tr>
      </thead>
      <tbody>
        {quotations
          .filter((q) => q.subscription_frequency === "One Time")
          .map((q, index) => (
            <tr key={q.id}>
              <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                {index + 1}
              </td>
              <td style={{ fontSize: "1rem", fontWeight: "bold" }}>{q.service_type}</td>
              <td>{q.service_description}</td>
              <td className="th">{q.actual_price}/-</td>
              <td className="th">{q.offer_price}/-</td>
            </tr>
          ))}
        <tr>
          <td colSpan="3" className="th">
            Total One Time Amount
          </td>
          <td className="th">{oneTimeActualPriceTotal}/-</td>
          <td className="th">{oneTimeOfferPriceTotal}/-</td>
        </tr>
      </tbody>
    </table>
  </div>
)}

{yearlyActualPriceTotal > 0 && (
  <div className=" mt-3">
    <h5 className="fw-bold">Yearly Services</h5>
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Service Type</th>
          <th>Service Description</th>
          <th>Actual Price</th>
          <th>Offer Price</th>
        </tr>
      </thead>
      <tbody>
        {quotations
          .filter((q) => q.subscription_frequency === "Yearly")
          .map((q, index) => (
            <tr key={q.id}>
              <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                {index + 1}
              </td>
              <td style={{ fontSize: "1rem", fontWeight: "bold" }}>{q.service_type}</td>
              <td>{q.service_description}</td>
              <td className="th">{q.actual_price}/-</td>
              <td className="th">{q.offer_price}/-</td>
            </tr>
          ))}
        <tr>
          <td colSpan="3" className="th">
            Total Yearly Amount
          </td>
          <td className="th">{yearlyActualPriceTotal}/-</td>
          <td className="th">{yearlyOfferPriceTotal}/-</td>
        </tr>
      </tbody>
    </table>
  </div>
)}

{quarterlyActualPriceTotal > 0 && (
  <div className=" mt-3">
    <h5 className="fw-bold">Quarterly Services</h5>
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Service Type</th>
          <th>Service Description</th>
          <th>Actual Price</th>
          <th>Offer Price</th>
        </tr>
      </thead>
      <tbody>
        {quotations
          .filter((q) => q.subscription_frequency === "Quarterly")
          .map((q, index) => (
            <tr key={q.id}>
              <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                {index + 1}
              </td>
              <td style={{ fontSize: "1rem", fontWeight: "bold" }}>{q.service_type}</td>
              <td>{q.service_description}</td>
              <td className="th">{q.actual_price}/-</td>
              <td className="th">{q.offer_price}/-</td>
            </tr>
          ))}
        <tr>
          <td colSpan="3" className="th">
            Total Quarterly Amount
          </td>
          <td className="th">{quarterlyActualPriceTotal}/-</td>
          <td className="th">{quarterlyOfferPriceTotal}/-</td>
        </tr>
      </tbody>
    </table>
  </div>
)}

{halfyearlyActualPriceTotal > 0 && (
  <div className=" mt-3">
    <h5 className="fw-bold">Half Yearly Services</h5>
    <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Service Type</th>
                  <th>Service Description</th>
                  <th>Actual Price</th>
                  <th>Offer Price</th>
                  
                </tr>
              </thead>
              <tbody>
                {quotations
                  .filter((q) => q.subscription_frequency === "Half Yearly")
                  .map((q, index) => (
                    <tr key={q.id}>
                      <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        {index + 1}
                      </td>
                      <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        {q.service_type}
                      </td>
                      <td>{q.service_description}</td>
                      <td className="th">{q.actual_price}/-</td>
                      <td className="th">{q.offer_price}/-</td>
                     
                    </tr>
                  ))}
                <tr>
                  <td colSpan="3" className="th">
                    Total Half Yearly Amount 
                  </td>
                  <td className="th">{halfyearlyActualPriceTotal}/-</td>
                  <td className="th">{halfyearlyOfferPriceTotal}/-</td>
                    
                </tr>
              </tbody>
            </table>
  </div>
)}

{weeklyActualPriceTotal > 0 && (
  <div className=" mt-3">
    <h5 className="fw-bold">Weekly Services</h5>
    <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Service Type</th>
                  <th>Service Description</th>
                  <th>Actual Price</th>
                  <th>Offer Price</th>
                  
                </tr>
              </thead>
              <tbody>
                {quotations
                  .filter((q) => q.subscription_frequency === "Weekly")
                  .map((q, index) => (
                    <tr key={q.id}>
                      <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        {index + 1}
                      </td>
                      <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        {q.service_type}
                      </td>
                      <td>{q.service_description}</td>
                      <td className="th">{q.actual_price}/-</td>
                      <td className="th">{q.offer_price}/-</td>
                     
                    </tr>
                  ))}
                <tr>
                  <td colSpan="3" className="th">
                    Total Half Yearly Amount 
                  </td>
                  <td className="th">{weeklyActualPriceTotal}/-</td>
                  <td className="th">{weeklyOfferPriceTotal}/-</td>
                    
                </tr>
              </tbody>
            </table>
  </div>
)}
      </div>
         

<div className="note mt-3">
          <h5 className=" fw-bold">Notes:-</h5>

              <ul>
                {notes.map((note) => (
                  <li key={note.id}>
                    {note.note_text}
                    <p>{note.additional_info}</p>
                  </li>
                ))}
              </ul>
            </div>
        <div className="container-fluid mt-2">
          <h4>Payment Conditions for website Development</h4>
          <table className="table table-bordered mt-3">
            <thead>
              <tr>

                <th colSpan="4" className="th ">
                Payment Installment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>60%</td>
                <td>On placement of order</td>
               
              </tr>
              <tr>
                <td>40%</td>
                <td>Before Go live</td>
                
              </tr>
              {/* Other payment details */}
            </tbody>
          </table>
        </div>
        <div className="container-fluid mt-2">
          <h4>Payment Conditions for SEO, SMO and SMM</h4>
          <table className="table table-bordered mt-3">
            <thead>
              <tr>

                <th colSpan="4" className="th ">
                Payment Installment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100%</td>
                <td>On placement of order</td>
               
              </tr>
            
              {/* Other payment details */}
            </tbody>
          </table>
        </div>

        <div className="container-fluid">
          <table className="table table-bordered mt-1">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th colSpan="3" className="th text-center">
                  Payment Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>For Payment (with GST18%) : DOAGuru InfoSystems</td>
                <td>SBIN0004677</td>
                <td>38666325192</td>
              </tr>
              <tr>
                <td>2</td>
                <td>For TDS Payment : DOAGuru IT Solutions </td>
                <td>HDFC0000224 </td>
                <td>50200074931981</td>
              </tr>

              <tr></tr>
            </tbody>
          </table>
        </div>
    
        <button className="btn btn-danger mb-3 float-end mx-2  btn-print" onClick={handlePrintPage}>
            Print_Page
          </button>
          <div className="footimage ">
      <Footer /></div>
      </Wrapper>


      
     
             
    </>
  );
}

export default Print_Page;
const Wrapper = styled.div`
  th {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .table {
    border: black;
  }
  .th {
    font-weight: bold;
    font-size: 1.2rem;
  }
  li{
    font-weight:bold;
    font-size: 1rem;

  }

  .btn-print{
    @media print{
      display: none;
    }
  } 

  .footimage {
    @media print{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    
    }
  }

`;




  {/* <table className="table table-bordered mt-3">
            <thead>
              <tr>
              <th>Sr.No</th>
                <th>Service Type</th>
                <th>Service Description</th>
                <th>Actual Price</th>
                <th>Offer Price</th>
                <th>Subscription</th>
              </tr>
            </thead>
            <tbody>
              {quotations.map((q, index) => (
                <tr key={q.id}>
                  <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>{index + 1}</td>
                  <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {q.service_type}
                  </td>
                  <td>{q.service_description}</td>
                  <td className="th">{q.actual_price}/-</td>
                  <td className="th">{q.offer_price}/-</td>
                  <td  className="th"> {q.subscription_frequency}</td>
                 

                </tr>
              ))}
              <tr>
                <td colSpan="3" className="th">
                  Total Amount
                </td>
                <td className="th">{totalActualPrice}/-</td>
                <td className="th">{totalOfferPrice}/-</td>
                <td></td>
              </tr>
            </tbody>
          </table> */}