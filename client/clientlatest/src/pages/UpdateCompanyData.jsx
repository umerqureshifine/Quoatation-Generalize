import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

function UpdateCompanyData({ companyId }) {
  const { id } = useParams();
  const navigate = useNavigate()
  const [headerImage, setHeaderImage] = useState(null);
  const [footerImage, setFooterImage] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountIFSC, setAccountIFSC] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [idcompany, setIdCompany] = useState('');
  const [userId, setUserId] = useState('');
  const [selectedFileHeader, setSelectedFileHeader] = useState(false);
  const [selectedFileFooter, setSelectedFileFooter] = useState(false);
  


  const location = useLocation();
  const { company } = location.state;
  console.log(company);

  useEffect(() => {
    // Fetch existing data from the API
    const fetchCompanyData = async () => {
      try {
        const response = await axios.post('https://quotation.queuemanagementsystemdg.com/api/company-header-footer', {
          company_name: company
        });
        
        if (response.status === 200) {
          const companyData = response.data;
        

        // Set input field values with the fetched data
        setIdCompany(companyData.id)
        setUserId(companyData.user_id)
        setCompanyName(companyData.company_name);
        setAccountName(companyData.company_name_account_name);
        setAccountIFSC(companyData.company_name_account_ifsc);
        setAccountNumber(companyData.company_name_account_number);
        setCompanyAddress(companyData.company_address);
     
        } else {
          console.error('Error Company Data:', response.statusText);
        }
       
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCompanyData();
  },[company] );


  const handleHeaderImageChange = (e) => {
    setHeaderImage(e.target.files[0]);
    setSelectedFileHeader(true);
  };

  const handleFooterImageChange = (e) => {
    setFooterImage(e.target.files[0]);
    setSelectedFileFooter(true);
  };

  const handleUpload = async (e) => {
   
    try {
      if (!selectedFileHeader) {
        // Handle the case where no file is selected
        
        alert('No file selected Header');
        return;
      }
      if (!selectedFileFooter) {

        
        // Handle the case where no file is selected
        
        alert('No file selected Footer');
        return;
      }
      const formData = new FormData();
      formData.append('header_img', headerImage);
      formData.append('footer_img', footerImage);
      formData.append('user_id', userId);
      formData.append('company_name', companyName);
      formData.append('company_name_account_name', accountName);
      formData.append('company_name_account_ifsc', accountIFSC);
      formData.append('company_name_account_number', accountNumber);
      formData.append('company_address', companyAddress);

   

      const response = await axios.put(`https://quotation.queuemanagementsystemdg.com/api/companydata/${idcompany}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      

      if (response.status === 200) {
        console.log('Header and footer images updated successfully');
        // Add any additional logic here after successful update
      navigate(`/print/${id}`)
      } else {
        console.error('Error updating header and footer images:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating header and footer images:', error.message);
    }
  };

  return (
    <div className='container-fluid mt-3'>
      <h2>Update Company Data </h2>
      <label className=' form-label'>
        Header Image:
        <input className="form-control" type="file" accept="image/*" onChange={handleHeaderImageChange} />
      </label>
      <br />
      <label className=' form-label'>
        Footer Image:
        <input className="form-control" type="file" accept="image/*" onChange={handleFooterImageChange} />
      </label>
  <br />
      <label className=' form-label'>
        Company Name:
        <input className="form-control" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </label>
      <br />
      <label className=' form-label'>
        Company Address:
        <input className="form-control" type="text" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} />
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
   

     

      <button className="btn btn-success" onClick={handleUpload}>Update Company Data</button>
      <Link to={`/print/${id}`} className="btn btn-primary mx-2">
        Back
      </Link>
    </div>
  );
}

export default UpdateCompanyData;
