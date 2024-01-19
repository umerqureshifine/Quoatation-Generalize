const express = require("express");
const multer = require('multer');
const router = express.Router();

// const {Register,Allregister, Login,} = require('../controllers/UserController');
const {Quotation, GetQuotation, Quotationviaid, GetServices,  deleteQuotation, updateServices, Notes, getNotes, deleteNote, AddServices, addServices, deleteService, getnotes_text} = require('../controllers/UserController');
const { uploadImage,getHeaderImage, getFooterImage, deleteHeaderImage, deleteFooterImage, updateHeaderImage, updateFooterImage } = require("../controllers/imageController");
const upload = require("../controllers/fileUploadController");
const { uploadImages, header_footer_img, getHeaderFooterImages, get_header_footer, updateHeaderFooterImages } = require("../controllers/Header_Footer_Controller");



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         const imageFileName = Date.now() + '-' + file.originalname;
//         cb(null, imageFileName);
//     },
// });
// const upload = multer({ storage: storage });





router.put("/quotation/:quotationId",updateServices);
router.post("/quotation",Quotation);
router.delete("/quotation/:id",deleteQuotation);
router.post('/services/:id', addServices);
router.delete('/services/:serviceId', deleteService);
router.get("/quotation/:id",Quotationviaid);
router.get("/quotation",GetQuotation);
router.get("/services",GetServices);


router.post("/notes",Notes);
router.get('/notes/:quotationId', getNotes);
router.delete('/notes/:noteId', deleteNote);
router.get("/notes_data",getnotes_text);



router.post('/:quotationId/:imageType', upload.single('image'), uploadImage);
router.get('/:quotationId/header',getHeaderImage);
router.get('/:quotationId/footer',getFooterImage );
router.put('/header/:quotationId',upload.single('file'),updateHeaderImage );
router.put('/footer/:quotationId',upload.single('file'),updateFooterImage );
router.delete('/header/:quotationId',deleteHeaderImage );
router.delete('/footer/:quotationId',deleteFooterImage );





router.post('/upload-header-footer', upload.fields([{ name: 'header_img' }, { name: 'footer_img' }]),header_footer_img);
router.get('/header-footer-images',get_header_footer);








module.exports = router;