import React, { useEffect, useState } from 'react'
import img from '../images/5.png'
import axios from 'axios';
function Header() {
  const [headerImage, setHeaderImage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/header-footer-images');

        if (response.status === 200) {
          const { header_img} = response.data;

          // Update state with image URLs
          setHeaderImage(header_img);
          
        } else {
          console.error('Error fetching header and footer images:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching header and footer images:', error.message);
      }
    };

    // Fetch images on component mount
    fetchImages();
  }, []);
  return (
    <>
    <div className="">
    <div >
       
        <img src={headerImage} alt="Header" style={{ maxWidth: '100%' }} />
      </div>
     
    </div>
   
    
    
    </>
  )
}

export default Header