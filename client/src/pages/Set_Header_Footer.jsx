




import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DisplayCompanyData from './Footer';
import Header from './Header';
import Footer from './Footer';
import { Link, useNavigate, useParams } from "react-router-dom";

function Set_Header_Footer() {
  const { id } = useParams();
  
  const [headerImage, setHeaderImage] = useState(null);
  const [footerImage, setFooterImage] = useState(null);
  const navigate = useNavigate();



  const handleHeaderImageChange = (e) => {
    setHeaderImage(e.target.files[0]);
  };

  const handleFooterImageChange = (e) => {
    setFooterImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
    
      formData.append('header_img', headerImage);
      formData.append('footer_img', footerImage);

      const response = await axios.post('http://localhost:9000/api/upload-header-footer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('Company data and images uploaded successfully');
        window.location.reload();
        navigate(`/final-quotation/${id}`); // Replace with your actual route

      } else {
        console.error('Error uploading company data and images:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading company data and images:', error.message);
    }
  };

  
  

  return (
    <>
     <div className='container-fluid'>
      <h1>Image Upload and Company Data</h1>
      <Link to={`/final-quotation/${id}`} className="btn btn-success mx-3 float-end">
      <i className="bi bi-arrow-return-left mx-1"></i>   Final Quotation
            </Link>
    
      <label className="form-check-label" >
        Header Image:
        <input type="file" className="form-control  mb-2"  accept="image/*" onChange={handleHeaderImageChange} />
      </label>
      <br />
      <label className="form-check-label">
        Footer Image:
        <input type="file" className="form-control mb-2"  accept="image/*" onChange={handleFooterImageChange} />
      </label>
      <br />
      <button className='btn btn-success' onClick={handleUpload}>Upload</button>

      
    </div>
<div className="" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>

    <Header/>
</div>

<div className="" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
<Footer/>

</div>
  
    
    </>
   
    
  );
}

export default Set_Header_Footer;




