const { db } = require('../db');






const CompanyDataUpload= async (req, res) => {
try {
  // Check if req.files exists and has properties header_img and footer_img
  if (!req.files || !req.files.header_img || !req.files.footer_img) {
    return res.status(400).json({ error: 'Both header_img and footer_img are required' });
  }

  const { header_img, footer_img } = req.files;
  const { user_id,company_name,company_name_account_name,company_name_account_ifsc,company_name_account_number,company_address } = req.body; 


  const headerImagePath = 'http://localhost:9000/uploads/' + header_img[0].filename;
  const footerImagePath = 'http://localhost:9000/uploads/' + footer_img[0].filename;


 

  // Insert header and footer images with the associated company_id
  const insertHeaderFooterImages = await new Promise((resolve, reject) => {
    const sqlImages = 'INSERT INTO quotation_header_footer ( header_img, footer_img, user_id,company_name,company_name_account_name,company_name_account_ifsc,company_name_account_number,company_address) VALUES ( ?,?,?,?,?,?,?,?)';
    const values = [ headerImagePath, footerImagePath,user_id,company_name,company_name_account_name,company_name_account_ifsc,company_name_account_number,company_address ];

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

const company_name_header_footer = async (req, res) => {
  try {
    const {company_name} = req.body;
    console.log(company_name);
    const result = await new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM quotation_header_footer WHERE company_name = ?';
      console.log(sql);
      db.query(sql, [company_name], (err, result) => {
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
    console.log(result);

    const images = result[0];
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching header and footer images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const fetchcompanyname = async(req,res) =>{
  try {
    const UserId = req.params.UserId;
    const query = 'SELECT * FROM quotation_header_footer WHERE user_id = ? '; // Query to retrieve unique company names
    
    db.query(query,[UserId] ,  (err, results) => {
      if (err) {
        console.error('Error fetching company names:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
       
        const companyNames = results.map(row => row.company_name); // Extract company names from the query results
        res.status(200).json(companyNames); // Send company names as JSON response
      }
    });
  } catch (error) {
    console.error('Error fetching company names:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteCompanydata = async (req, res) => {
  try {
    const {company_name} = req.body;

    // Implement logic to delete the service with the specified ID from your database
    const result = await new Promise((resolve, reject) => {
      db.query('DELETE FROM quotation_header_footer WHERE company_name = ?', [company_name], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Check if a row was affected to determine if the service was found and deleted
    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: 'Companydata deleted successfully' });
    } else {
      res.status(404).json({ error: 'Companydata not found' });
    }
  } catch (error) {
    console.error('Error deleting Companydata:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateCompanyData= async (req, res) => {
  try {
    // Check if req.files exists and has properties header_img and footer_img
    if (!req.files || !req.files.header_img || !req.files.footer_img) {
      return res.status(400).json({ error: 'Both header_img and footer_img are required' });
    }

    const { header_img, footer_img } = req.files;
    const { user_id, company_name, company_name_account_name, company_name_account_ifsc, company_name_account_number, company_address } = req.body;
    
    const headerImagePath = 'http://localhost:9000/uploads/' + header_img[0].filename;
    const footerImagePath = 'http://localhost:9000/uploads/' + footer_img[0].filename;

    // Update header and footer images with the associated company_id
    const updateHeaderFooterImages = await new Promise((resolve, reject) => {
      const sqlImages = `
        UPDATE quotation_header_footer 
        SET 
          header_img = ?,
          footer_img = ?,
          user_id = ?,
          company_name = ?,
          company_name_account_name = ?,
          company_name_account_ifsc = ?,
          company_name_account_number = ?,
          company_address = ?
        WHERE id = ? `;
      const values = [headerImagePath, footerImagePath, user_id, company_name, company_name_account_name, company_name_account_ifsc, company_name_account_number, company_address, req.params.id];

      db.query(sqlImages, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.status(200).json({ success: true, message: 'Header and Footer images updated successfully' });
  } catch (error) {
    console.error('Error updating company data and header/footer images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// const company_name_header_footer = async (req, res) => {
//   try {
//     // Fetch header and footer images in descending order by id

//     const company_name_branch = req.body;
//     const result = await new Promise((resolve, reject) => {
//       const sql = 'SELECT * FROM quotation_header_footer WHERE company_name_branch = ?';
//       db.query(sql, [company_name_branch], (err, result) => {
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

// const get_header_footer = async (req, res) => {
//   try {
//     const { UserId } = req.params; 
//     // Fetch header and footer images in descending order by id
//     const result = await new Promise((resolve, reject) => {
   
//       const sql = 'SELECT * FROM quotation_header_footer WHERE company_id = ? ORDER BY id DESC';
//       db.query(sql, [UserId], (err, result) => {
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









module.exports = { CompanyDataUpload, company_name_header_footer , fetchcompanyname ,deleteCompanydata,updateCompanyData }
