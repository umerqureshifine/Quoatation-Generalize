const { db } = require('../db');
const path = require('path');





const header_footer_img = async (req, res) => {
try {
  // Check if req.files exists and has properties header_img and footer_img
  if (!req.files || !req.files.header_img || !req.files.footer_img) {
    return res.status(400).json({ error: 'Both header_img and footer_img are required' });
  }

  const { header_img, footer_img } = req.files;


  const headerImagePath = 'http://localhost:9000/uploads/' + header_img[0].filename;
  const footerImagePath = 'http://localhost:9000/uploads/' + footer_img[0].filename;


 

  // Insert header and footer images with the associated company_id
  const insertHeaderFooterImages = await new Promise((resolve, reject) => {
    const sqlImages = 'INSERT INTO quotation_header_footer ( header_img, footer_img) VALUES ( ?, ?)';
    const values = [ headerImagePath, footerImagePath];

    db.query(sqlImages, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

  res.status(201).json({ success: true, message: ' Header and Footer images uploaded successfully' });
} catch (error) {
  console.error('Error uploading company data and header/footer images:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
};


// const get_header_footer = async(req,res)=>{


//   try {
//     // Fetch header and footer images
//     const result = await new Promise((resolve, reject) => {
//       const sql = 'SELECT * FROM quotation_header_footer';
//       db.query(sql, (err, result) => {
//         if (err) {
//           console.error('Error fetching header and footer images:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });

//     if (result.length === 0) {
//       return res.status(404).json({ error: 'Header and footer images not found' });
//     }

//     const images = result[0];
//     res.status(200).json(images);

//   } catch (error) {
//     console.error('Error fetching header and footer images:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

const get_header_footer = async (req, res) => {
  try {
    // Fetch header and footer images in descending order by id
    const result = await new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM quotation_header_footer ORDER BY id DESC';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error fetching header and footer images:', err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (result.length === 0) {
      return res.status(404).json({ error: 'Header and footer images not found' });
    }

    const images = result[0];
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching header and footer images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};









module.exports = { header_footer_img, get_header_footer}
