




import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DisplayCompanyData from './Footer';
import Header from './Header';
import Footer from './Footer';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Set_Header_Footer() {
  const { id } = useParams();
  
  const [headerImage, setHeaderImage] = useState(null);
  const [footerImage, setFooterImage] = useState(null);
  const [companyNameBranch, setCompanyNameBranch] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountIFSC, setAccountIFSC] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const navigate = useNavigate();
  const UserId = useSelector(state => state.auth.user.id);



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
      formData.append('user_id', UserId);
      formData.append('company_name', companyNameBranch);
      formData.append('company_name_account_name',accountName);
      formData.append('company_name_account_ifsc',accountIFSC);
      formData.append('company_name_account_number',accountNumber);
      formData.append('company_address',companyAddress);

      const response = await axios.post('http://localhost:9000/api/upload-header-footer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('Company data and images uploaded successfully');
      
        navigate(`/print/${id}`); // Replace with your actual route

      } else {
        console.error('Error uploading company data and images:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading company data and images:', error.message);
    }
  };

  
  

  return (
    <Wrapper>
     <div className='container-fluid'>
      <h1>Image Upload and Company Data</h1>
      <Link to={`/print/${id}`} className="btn btn-success mx-3 float-end">
      <i className="bi bi-arrow-return-left mx-1"></i>   Final Quotation
            </Link>
    
      <label className="form-check-label" >
        Header Image :
        <input type="file" className="form-control  mb-2"  accept="image/*" onChange={handleHeaderImageChange} />
      </label>
      <br />
      <label className="form-check-label">
        Footer Image :
        <input type="file" className="form-control mb-2"  accept="image/*" onChange={handleFooterImageChange} />
      </label>
      <br />
      <label className='form-check-label'>
        Company  Name :
        <input
          type='text'
          className='form-control mb-2'
          value={companyNameBranch}
          onChange={(e) => setCompanyNameBranch(e.target.value)}
        />
      </label>
      <br />
      
      <label className='form-check-label '>
        Company Address :
        <input
          type='text'
          className='form-control mb-2'
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        />

      </label>
      <br />
        <h6>Company  Name Payment Detail :-</h6>
      
      <label className='form-check-label'>
        Account Name :
        <input
          type='text'
          className='form-control mb-2'
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />

      </label>

      <label className='form-check-label mx-lg-2 '>
        IFSC Code :
        <input
          type='text'
          className='form-control mb-2'
          value={accountIFSC}
          onChange={(e) => setAccountIFSC(e.target.value)}
        />

      </label>
      <label className='form-check-label '>
        Account Number :
        <input
          type='text'
          className='form-control mb-2'
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />

      </label>
     
      <br />
      <button className='btn btn-success' onClick={handleUpload}>Upload</button>

      
    </div>
{/* <div className="" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>

    <Header/>
</div>

<div className="" style={{ border: '1px solid #cccccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
<Footer/>

</div> */}
  
    
    </Wrapper>
   
    
  );
}

export default Set_Header_Footer;



const Wrapper =  styled.div`
img{
  width: -webkit-fill-available;
  

}
`
