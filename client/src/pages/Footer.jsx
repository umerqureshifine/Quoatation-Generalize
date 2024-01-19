import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Footer() {
  
  const [footerImage, setFooterImage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/header-footer-images');

        if (response.status === 200) {
          const { footer_img } = response.data;

          // Update state with image URLs
        
          setFooterImage(footer_img);
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
    <div>
    
  
      <div  >
      
        <img src={footerImage} alt="Footer" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
}

export default Footer;
