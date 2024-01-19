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

  const fetchFooterImage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/${id}/footer`
      );

      if (response.status === 200) {
        // Assuming your response.data structure contains the image URL
        setFooterImagePath(response.data[0]?.file_path);
        console.log("Footer Image URL:", footerImagePath);
      }
    } catch (error) {
      console.error("Error fetching footer image:", error);
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
          navigate(`/`);
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
    fetchHeaderImage();
    fetchFooterImage();
  }, []);

  return (
    <>
    <Header/>
    <div className="">
    <button className="btn btn-success mt-2 mx-3" onClick={handleChangeHeaderFooter}>
            {" "}
          
             Change Header
        
          </button></div>


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

<button className="btn btn-success mt-2 mx-3 mb-2">
            {" "}
            <Link to="/" className="text-white">
              {" "}
              <i className="bi bi-arrow-return-left mx-1"></i>Back
            </Link>
          </button>

      <Wrapper>
        <div className="container-fluid">
         
          <button
            className="btn btn-success mx-3"
            onClick={() => setIsUpdateMode(true)}
          >
            Update
          </button>
          {isUpdateMode && (
            <UpdateServicesForm
              quotationId={id}
              onUpdateSuccess={handleUpdateSuccess}
              onUpdateError={handleUpdateError}
            />
          )}
          <button className="btn btn-primary mx-2" onClick={handleAddServices}>
            Add Serrvices
          </button>
          <div className="container-fluid">
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Service Type</th>
                  <th>Service Description</th>
                  <th>Actual Price</th>
                  <th>Offer Price</th>  
                 
                  <th>Subscription</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((q, index) => (
                  <tr key={q.id}>
                    <td
                      className="text-center"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      {index + 1}
                    </td>
                    <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {q.service_type}
                    </td>
                    <td> {q.service_description}</td>
                    <td className="th">{q.actual_price}/-</td>
                    <td className="th">{q.offer_price}/-</td>
                    <td  className="th"> {q.subscription_frequency}</td>

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
                <tr>
                  <td colSpan="3" className="th">
                    Total Amount
                  </td>
                  <td className="th">{totalActualPrice}/-</td>
                  <td className="th">{totalOfferPrice}/-</td>
                  <td className="th"></td>
                  <td className="th"></td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-outline-danger" onClick={handleDelete}>
              Delete
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
          <button className="btn btn-primary" onClick={handleAddNotes}>
            Add Notes
          </button>
          <button className="btn btn-danger mx-2" onClick={handleDeleteNotes}>
            Delete Notes
          </button>
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
          <div className="container-fluid ">
            <table className="table table-bordered mt-3">
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
                  <td>For TDS Payment : DOAGuru IT Solutions</td>
                  <td>HDFC0000224</td>
                  <td>50200074931981</td>
                </tr>
                {/* Other payment details */}
              </tbody>
            </table>
          </div>
          <button className="btn btn-danger" onClick={handlePrintPage}>
            Print_Page
          </button>
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

      <Footer />
      <button className="btn btn-success mt-2 mx-3" onClick={handleChangeHeaderFooter}>

           
             Change Footer
         
          </button>
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
