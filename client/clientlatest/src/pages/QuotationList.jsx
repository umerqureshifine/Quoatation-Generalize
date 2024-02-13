// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const QuotationList = () => {
//   const [quotations, setQuotations] = useState([]);

//   useEffect(() => {
//     // Fetch your list of quotations from your API
//     const fetchQuotations = async () => {
//       try {
//         const response = await axios.get("http://localhost:9000/api/quotation");
//         setQuotations(response.data);
//       } catch (error) {
//         console.error("Error fetching quotations:", error);
//       }
//     };

//     fetchQuotations();
//   }, []);

//   return (
//     <div>
//       <h2>List of Quotations</h2>
//       <ul className="list-group">
//         {quotations.map((quotation) => (
//           <li key={quotation.id} class="list-group-item">
//             <span>{quotation.quotation_name}</span>
//             <Link to={`/final-quotation/${quotation.id}`}>
//               <button className="btn btn-success">View</button>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default QuotationList;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import moment from 'moment'
// import { useSelector } from "react-redux";

// const QuotationList = () => {
//   const [quotations, setQuotations] = useState([]);
//   const companyId = useSelector(state => state.auth.user.id);

//   useEffect(() => {
//     // Fetch your list of quotations from your API
//     const fetchQuotations = async () => {
//       try {
//         const response = await axios.get(`http://localhost:9000/api/quotation/${companyId}`);
//         setQuotations(response.data);
//         console.log(quotations);
//       } catch (error) {
//         console.error("Error fetching quotations:", error);
//       }
//     };

//     fetchQuotations();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>List of Quotations</h2>
//       <div className="" style={{ maxHeight: "700px", overflowY: "auto" }}>
        
//         <table className="table table-bordered" >
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Quotation Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {quotations.map((quotation,index) => (
//             <tr key={quotation.quotation_id}>
//               <td>{index+1}</td>
//               <td>{quotation.quotation_name}</td>
//               <td>{ moment(quotation.created_date).format('DD/MM/YYYY')}</td>
//               <td>
//                 <Link to={`/final-quotation/${quotation.quotation_id}`}>
//                   <button className="btn btn-success">View</button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
//       <Link to="/" className="text-white"> <button className='btn btn-success mt-4 mb-3' > <i className="bi bi-arrow-return-left mx-1"></i>Back</button></Link>
      
//     </div>
//   );
// };

// export default QuotationList;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment'
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
                {/* <td>{quotation.company_id}</td> */}
                <td>
                  <Link to={`/final-quotation/${quotation.quotation_id}`}>
                    <button className="btn btn-success m-1">View</button>
                  </Link>
                
                  <button className="btn btn-danger mx-sm-0 mx-lg-2 m-1 " onClick={() => handleDelete(quotation.quotation_id)}>Delete</button>

                 

                  <Link to={`/update-quotation-name/${quotation.quotation_id}`}>
                    <button className="btn btn-secondary m-1">Edit</button>
                  </Link>
                
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
