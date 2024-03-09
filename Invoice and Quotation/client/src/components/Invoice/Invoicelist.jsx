import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import { useSelector } from "react-redux";

const Invoicelist = () => {
  const [invoice, setInvoice] = useState([]);
  const UserId = useSelector(state => state.auth.user.id);

  useEffect(() => {
    const fetchinvoice = async () => {
      try {
        const response = await axios.get(`https://quotation.queuemanagementsystemdg.com/api/invoice-data/${UserId}`);
        setInvoice(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching invoice:", error);
      }
    };

    fetchinvoice();
  }, [UserId]);
  
   
  const handleDelete = async (id) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this invoice?"
    );

    if (isConfirmed) {
      try {
        const response = await axios.delete(
          `https://quotation.queuemanagementsystemdg.com/api/invoice/${id}`
        );

        if (response.status === 200) {
          console.log("Invoice deleted successfully");
          window.location.reload();
        }
      } catch (error) {
        console.error("Error deleting invoice:", error);
      }
    }
  };

  const handleCopyInvoice = async (invoiceId) => {
    try {
      const response = await axios.post(`https://quotation.queuemanagementsystemdg.com/api/copy-invoice/${invoiceId}`);
      console.log(response.data.message);
      window.location.reload();
    } catch (error) {
      console.error("Error copying invoice:", error);
      // Handle the error, show an error message, or perform any necessary actions
    }
  };

  return (
    <div className="container mt-4">
      <h2>List of Invoice</h2>
      <div className="" style={{ maxHeight: "700px", overflowY: "auto" }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Invoice Name</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoice.map((invoice, index) => (
              <tr key={invoice.invoice_id}>
                <td>{index + 1}</td>
                <td>{invoice.invoice_name}</td>
                <td>{moment(invoice.created_date).format('DD/MM/YYYY')}</td>
                <td>
                <Link to={`/final-invoice/${invoice.invoice_id}`}>
                    <button className="btn btn-success m-1">View</button>
                  </Link>
                <Link to={`/update-invoice-name/${invoice.invoice_id}`}>
                    <button className="btn btn-secondary m-1">Edit</button>
                  </Link>
                <button className="btn btn-danger mx-sm-0 mx-lg-2 m-1" onClick={() => handleDelete(invoice.invoice_id)}>Delete</button>
                <button className="btn btn-primary m-1" onClick={() => handleCopyInvoice(invoice.invoice_id)}>Copy</button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/" className="text-white">
        <button className='btn btn-success mt-4 mb-3'>
          <i className="bi bi-arrow-return-left mx-1"></i>Back
        </button>
      </Link>
    </div>
  );
};

export default Invoicelist;