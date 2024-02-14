



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import moment from 'moment'
// import { useSelector } from "react-redux";

// const QuotationList = () => {
//   const [quotations, setQuotations] = useState([]);
//   const UserId = useSelector(state => state.auth.user.id);


//   useEffect(() => {
//     const fetchQuotations = async () => {
//       try {
//         const response = await axios.get(`http://localhost:9000/api/quotation-data/${UserId}`);
//         setQuotations(response.data);
//         console.log(response);
//       } catch (error) {
//         console.error("Error fetching quotations:", error);
//       }
//     };

//     fetchQuotations();
//   }, [UserId]);
  
//   const handleDelete = async (id) => {
//     // Display a confirmation dialog
//     const isConfirmed = window.confirm(
//       "Are you sure you want to delete this quotation?"
//     );

//     if (isConfirmed) {
//       try {
//         const response = await axios.delete(
//           `http://localhost:9000/api/quotation/${id}`
//         );

//         if (response.status === 200) {
//           console.log("Quotation deleted successfully");
//           window.location.reload();
//         }
//       } catch (error) {
//         console.error("Error deleting quotation:", error);
//       }
//     }
//   };


//   return (
//     <div className="container mt-4">
//       <h2>List of Quotations</h2>
//       <div className="" style={{ maxHeight: "700px", overflowY: "auto" }}>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Quotation Name</th>
//               <th>Created Date</th>
             
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {quotations.map((quotation, index) => (
//               <tr key={quotation.quotation_id}>
//                 <td>{index + 1}</td>
//                 <td>{quotation.quotation_name}</td>
//                 <td>{moment(quotation.created_date).format('DD/MM/YYYY')}</td>
//                 {/* <td>{quotation.company_id}</td> */}
//                 <td>
//                   <Link to={`/final-quotation/${quotation.quotation_id}`}>
//                     <button className="btn btn-success m-1">View</button>
//                   </Link>
                
//                   <button className="btn btn-danger mx-sm-0 mx-lg-2 m-1 " onClick={() => handleDelete(quotation.quotation_id)}>Delete</button>

                 

//                   <Link to={`/update-quotation-name/${quotation.quotation_id}`}>
//                     <button className="btn btn-secondary m-1">Edit</button>
//                   </Link>
                
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Link to="/" className="text-white">
//         <button className='btn btn-success mt-4 mb-3'>
//           <i className="bi bi-arrow-return-left mx-1"></i>Back
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default QuotationList;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import { useSelector } from "react-redux";

const QuotationList = () => {
  const [quotations, setQuotations] = useState([]);
  const UserId = useSelector(state => state.auth.user.id);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/quotation-data/${UserId}`);
        setQuotations(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching quotations:", error);
      }
    };

    fetchQuotations();
  }, [UserId]);
  
  const handleDelete = async (id) => {
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
          window.location.reload();
        }
      } catch (error) {
        console.error("Error deleting quotation:", error);
      }
    }
  };

  const handleCopyQuotation = async (quotationId) => {
    try {
      const response = await axios.post(`http://localhost:9000/api/copy-quotation/${quotationId}`);
      console.log(response.data.message);
      window.location.reload();
    } catch (error) {
      console.error("Error copying quotation:", error);
      // Handle the error, show an error message, or perform any necessary actions
    }
  };

  return (
    <div className="container mt-4">
      <h2>List of Quotations</h2>
      <div className="" style={{ maxHeight: "700px", overflowY: "auto" }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Quotation Name</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {quotations.map((quotation, index) => (
              <tr key={quotation.quotation_id}>
                <td>{index + 1}</td>
                <td>{quotation.quotation_name}</td>
                <td>{moment(quotation.created_date).format('DD/MM/YYYY')}</td>
                <td>
                  <Link to={`/final-quotation/${quotation.quotation_id}`}>
                    <button className="btn btn-success m-1">View</button>
                  </Link>
                  <button className="btn btn-danger mx-sm-0 mx-lg-2 m-1" onClick={() => handleDelete(quotation.quotation_id)}>Delete</button>
                  <Link to={`/update-quotation-name/${quotation.quotation_id}`}>
                    <button className="btn btn-secondary m-1">Edit</button>
                  </Link>
                  <button className="btn btn-primary m-1" onClick={() => handleCopyQuotation(quotation.quotation_id)}>Copy</button>
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

export default QuotationList;
