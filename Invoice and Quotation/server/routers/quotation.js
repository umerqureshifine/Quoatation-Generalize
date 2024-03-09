const express = require("express");
const multer = require('multer');
const router = express.Router();

// const {Register,Allregister, Login,} = require('../controllers/UserController');
const {Quotation, GetQuotation, Quotationviaid, GetServices,  deleteQuotation, updateServices, Notes, getNotes, deleteNote, addServices, deleteService, getnotes_text, UpdateQuotationName, CopyQuotationData, GetQuotationName, updateNote} = require('../controllers/UserController');
const { uploadImage,getHeaderImage, getFooterImage, deleteHeaderImage, deleteFooterImage, updateHeaderImage, updateFooterImage } = require("../controllers/imageController");
const upload = require("../controllers/fileUploadController");
const { uploadImages, header_footer_img, getHeaderFooterImages, get_header_footer, updateHeaderFooterImages, fetchcompanyname, company_name_header_footer, deleteCompanydata, CompanyDataUpload, updateCompanyData } = require("../controllers/Header_Footer_Controller");
const { register, login } = require("../controllers/UserRegitrationlLogin");
const { createServiceList, getServicelist, deleteServicename, updateServiceList } = require("../controllers/ServicesList");
const { createInvoice, getInvoice, deleteInvoice, UpdateInvoiceName, GetInvoiceName, invoiceserviceid, deleteServiceInvoice, addServicesInvoice, updateServicesInvoice, getInvoiceiddata, getInvoiceAddress, CompanyIncoiceData, fetchcompanyinvoicename, company_name_invoice_data, CopyInvoiceData } = require("../controllers/InvoiceController");



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



router.post("/register",register );
router.post("/login",login );

router.put("/quotation/:quotationId",updateServices);
router.post("/quotation",Quotation);
router.delete("/quotation/:id",deleteQuotation);
router.post('/services/:id', addServices);
router.delete('/services/:serviceId', deleteService);
router.get("/quotation/:id",Quotationviaid);
// router.get("/quotation",GetQuotation);
router.get("/quotation-data/:UserId", GetQuotation);
router.put("/quotation-data/:quotationId", UpdateQuotationName);
router.post("/copy-quotation/:quotationId", CopyQuotationData);
router.get("/quotation-name/:quotationId", GetQuotationName);

router.get("/services",GetServices);


router.post("/notes",Notes);
router.get('/notes/:quotationId', getNotes);
router.delete('/notes/:noteId', deleteNote);
router.get("/notes_data",getnotes_text);
router.put('/notes', updateNote);




// router.post('/:quotationId/:imageType', upload.single('image'), uploadImage);
// router.get('/:quotationId/header',getHeaderImage);
// router.get('/:quotationId/footer',getFooterImage );
// router.put('/header/:quotationId',upload.single('file'),updateHeaderImage );
// router.put('/footer/:quotationId',upload.single('file'),updateFooterImage );
// router.delete('/header/:quotationId',deleteHeaderImage );
// router.delete('/footer/:quotationId',deleteFooterImage );





router.post('/upload-header-footer', upload.fields([{ name: 'header_img' }, { name: 'footer_img' }]),CompanyDataUpload);
router.get('/header-footer-images/company-names/:UserId',fetchcompanyname);
router.post('/company-header-footer',company_name_header_footer);
router.post('/companydata',deleteCompanydata);
router.put('/companydata/:id',upload.fields([{ name: 'header_img' }, { name: 'footer_img' }]),updateCompanyData);


router.post('/create-servicelist/:userId',createServiceList);
router.get('/servicelist/:userId',getServicelist);
router.delete('/servicelist/:serviceId',deleteServicename);
router.put('/servicelist',updateServiceList);

router.post('/create-invoice',createInvoice);
router.get("/invoice-data/:UserId", getInvoice);
router.delete("/invoice/:id",deleteInvoice);
router.put("/invoice-data/:invoiceId", UpdateInvoiceName);
router.get("/invoice-name/:invoiceId", GetInvoiceName);
router.get("/invoice/:id",invoiceserviceid);
router.get("/invoice-address/:id",getInvoiceAddress);
router.delete('/invoice-service/:serviceId', deleteServiceInvoice);
router.post('/add-invoice-services/:id', addServicesInvoice);
router.put("/invoice/:invoiceId",updateServicesInvoice);
router.post('/upload-invoice-profile', upload.fields([{ name: 'logo' }]),CompanyIncoiceData);
router.get('/company-invoice-names/:UserId',fetchcompanyinvoicename);
router.post('/company-invoice-data',company_name_invoice_data);
router.post("/copy-invoice/:invoiceId", CopyInvoiceData);



















module.exports = router;