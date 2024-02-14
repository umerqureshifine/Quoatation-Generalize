import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import UpdateServicesForm from "./UpdateServicesForm";
import UpdateHeaderImageForm from "./UpdateHeaderImageForm";
import UpdateFooterImageForm from "./UpdatFooterImageForm";
import Footer from "./Footer";

function Final_quotation() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quotations, setQuotations] = useState([]);
  const [quotationName, setQuotationName] = useState("");
  const [totalActualPrice, setTotalActualPrice] = useState(0);
  const [totalOfferPrice, setTotalOfferPrice] = useState(0);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [notes, setNotes] = useState([]);
  const [footerImagePath, setFooterImagePath] = useState("");
  const [headerImagePath, setHeaderImagePath] = useState("");
  const [isUpdateHeaderMode, setIsUpdateHeaderMode] = useState(false);
  const [isUpdateFooterMode, setIsUpdateFooterMode] = useState(false);

  const fetchQuotations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/quotation/${id}`
      );

      if (response.status === 200) {
        setQuotationName(response.data[0].quotation_name);
        setQuotations(response.data);

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
      }
    } catch (error) {
      console.error("Error fetching quotations:", error);
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/api/notes/${id}`);

      if (response.status === 200) {
        setNotes(response.data);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };



  const handlePrintPage = () => {
    navigate(`/print/${id}`);
  };

  const handleDelete = async () => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this quotation?"
    );

    if (isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:9000/api/quotation/${id}`
        );

        if (response.status === 200) {
          console.log("Quotation deleted successfully");
          navigate(`/quotation-form`);
        }
      } catch (error) {
        console.error("Error deleting quotation:", error);
      }
    }
  };

  const handleUpdateSuccess = () => {
    console.log("Services updated successfully");
    setIsUpdateMode(false);
    window.location.reload();
  };

  const handleUpdateError = () => {
    console.error("Error updating services");
    // Handle error, e.g., show an error message or update state
  };

  const handleAddNotes = () => {
    navigate(`/createnotes/${id}`);
  };

  const handleDeleteNotes = () => {
    navigate(`/deletenotes/${id}`);
  };

  const handleAddServices = () => {
    navigate(`/addservices/${id}`);
  };
  const handleDeleteService = async (serviceId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this row data?"
    );

    if (isConfirmed) {
      try {
        // Make an API call to delete the service
        const response = await axios.delete(
          `http://localhost:9000/api/services/${serviceId}`
        );

        if (response.status === 200) {
          console.log("Service deleted successfully");
          // You can perform additional actions after successful deletion
          window.location.reload();
        }
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };
  const handleDeleteHeaderImage = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this Header"
    );
    if (isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:9000/api/header/${id}`
        );

        if (response.status === 200) {
          console.log("Header image deleted successfully");
          window.location.reload();
        }
      } catch (error) {
        console.error("Error deleting header image:", error);
      }
    }
  };
  const handleDeleteFooterImage = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this Footer"
    );
    if (isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:9000/api/footer/${id}`
        );

        if (response.status === 200) {
          console.log("Footer image deleted successfully");
          window.location.reload();
        }
      } catch (error) {
        console.error("Error deleting Footer image:", error);
      }
    }
  };

  const handleAddHeaderImage = () => {
    navigate(`/addimage/${id}/header`);
  };

  const handleAddFooterImage = () => {
    navigate(`/addimage/${id}/footer`);
  };

  const handleChangeHeaderFooter = () => {
    navigate(`/set-header-footer/${id}`);
  };

  useEffect(() => {
    fetchQuotations();
    fetchNotes();
   
  }, []);

  const filterServicesByType = (type) => {
    return quotations.filter((q) => q.service_type === type);
  };
  const handleReview = () => {
    navigate(`/review/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
    {/* <Header/> */}
    {/* <div className="">
    <button className="btn btn-success mt-2 mx-3" onClick={handleChangeHeaderFooter}>
            {" "}
          
          Add Company
        
          </button></div> */}


      {/* <div className="container-fluid">
        <div className="mt-3 mb-3">
          {isUpdateHeaderMode ? (
            <UpdateHeaderImageForm
              quotationId={id}
              onBack={() => setIsUpdateHeaderMode(false)}
            />
          ) : (
            <>
              <div className="mt-3 mb-3">
                <img
                  src={headerImagePath}
                  alt="header not found"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <button
                className="btn btn-primary mx-2"
                onClick={handleAddHeaderImage}
              >
                Add Header Image
              </button>

              <button
                className="btn btn-primary mx-2"
                onClick={() => setIsUpdateHeaderMode(true)}
              >
                Update Header Image
              </button>
              <button
                className="btn btn-danger mx-2"
                onClick={handleDeleteHeaderImage}
              >
                Delete Header Image
              </button>
            </>
          )}
        </div>
      </div> */}


      <Wrapper>
        <div className="container-fluid">
         <div className="container-fluid mt-4">

            {" "}
            <Link to="/quotation-form" className="text-white btn btn-success mt-2 mx-3 mb-2 w-25">
              {" "}
              <i className="bi bi-arrow-return-left mx-1"></i>Back
            </Link>
         
          <button
            className="btn btn-success mx-3 w-25"
            onClick={() => setIsUpdateMode(true)}
          >
            Update Services
          </button>
          {isUpdateMode && (
            <UpdateServicesForm
              quotationId={id}
              onUpdateSuccess={handleUpdateSuccess}
              onUpdateError={handleUpdateError}
            />
          )}
          <button className="btn  btn-secondary mx-2 w-25" onClick={handleAddServices}>
            Add Serrvices
          </button></div>
          
          <div className="container-fluid">
            
            <div className="container-fluid mt-3">
            <h4>Paid Services</h4>
            <div className="" style={{ maxHeight: "700px", overflowY: "auto" }}>
            <table className="table table-bordered ">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Service Name</th>
                  <th>Service Description</th>
                  <th>Actual Price(INR)</th>
                  <th>Offer Price(INR)</th>
                  <th>Subscription</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filterServicesByType("Paid").map((q, index) => (
                  <tr key={q.id}>
                    <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {index + 1}
                    </td>
                    <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {q.service_name}
                    </td>
                    <td>{q.service_description}</td>
                    <td className="th">{q.actual_price}</td>
                    <td className="th">{q.offer_price}</td>
                    <td className="th"> {q.subscription_frequency}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteService(q.service_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>

          {/* Complimentary Services */}
          <div className="container-fluid mt-3">
            <h4>Complimentary Services</h4>
            <div className="" style={{ maxHeight: "700px", overflowY: "auto" }}>
            <table className="table table-bordered ">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Service Name</th>
                  <th>Service Description</th>
                  <th>Actual Price(INR)</th>
                  <th>Offer Price(INR)</th>
                  <th>Subscription</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filterServicesByType("Complimentary").map((q, index) => (
                  <tr key={q.id}>
                    <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {index + 1}
                    </td>
                    <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {q.service_name}
                    </td>
                    <td>{q.service_description}</td>
                    <td className="th">{q.actual_price}</td>
                    <td className="th">{q.offer_price}</td>
                    <td className="th"> {q.subscription_frequency}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteService(q.service_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>

            {/* <button className="btn btn-outline-danger" onClick={handleDelete}>
              Delete
            </button> */}
              <button className="btn btn-success  mx-3" onClick={handleReview}>
        Reviews
      </button>

   

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
          </div>
          <div className="container-fluid">
          <button className="btn btn-primary " onClick={handleAddNotes}>
            Add Notes
          </button>
          <button className="btn btn-danger mx-2" onClick={handleDeleteNotes}>
            Delete Notes
          </button>

      <div className=""> <button className="btn btn-danger mt-2" onClick={handlePrintPage}>
            Print_Page
          </button>
          </div>
         </div>
        </div>
        {/* <div className="container-fluid">
        <div className="mt-3 mb-3">
          {isUpdateFooterMode ? (
            <UpdateFooterImageForm
              quotationId={id}
              onBack={() => setIsUpdateHeaderMode(false)}
            />
          ) : (
            <>
              <div className="mt-3 mb-3">
                <img
                  src={footerImagePath}
                  alt="footer not found"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <button
                className="btn btn-primary mx-2"
                onClick={handleAddFooterImage}
              >
                Add Footer Image
              </button>

              <button
                className="btn btn-primary mx-2"
                onClick={() => setIsUpdateFooterMode(true)}
              >
                Update Footer Image
              </button>
              <button
                className="btn btn-danger mx-2"
                onClick={handleDeleteFooterImage}
              >
                Delete Footer Image
              </button>
            </>
          )}
        </div>
        </div> */}
      </Wrapper>

  
      {/* <button className="btn btn-success mt-2 mx-3 mb-3" onClick={handleChangeHeaderFooter}>

           
             Change Footer
         
          </button> */}
    </>
  );
}

export default Final_quotation;

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
  li {
    font-weight: bold;
    font-size: 1rem;
  }
`;
