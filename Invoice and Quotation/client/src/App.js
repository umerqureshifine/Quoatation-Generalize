




import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Print_Page from "./pages/Print_Page";
import QuotationForm1 from './pages/QuotationForm1';
import Final_quotation from "./pages/Final_quotation";
import UpdateServicesForm from "./pages/UpdateServicesForm";
import QuotationList from "./pages/QuotationList";
import NotesTable from "./pages/NotesTable";
import CreateNotes from "./pages/CreateNotes";
import DeleteNotes from "./pages/DeleteNotes";
import AddServices from "./pages/AddServices";
import ImageUploadComponent from "./pages/AddImageComponent";
import AddImageComponent from "./pages/AddImageComponent";
import CreateCompanyProfile from "./pages/CreateCompanyProfile";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Reviews from "./pages/Reviews";
import DeleteCompanydata from "./pages/DeleteCompanydata";
import MainUpdateCompanyData from "./pages/MainUpdateCompanyData";
import UpdateCompanyData from "./pages/UpdateCompanyData";
import UpdateQuotationName from "./pages/UpdateQuotationName";
import UpdateNotes from './pages/UpdateNotes';
import CreateServicelist from "./pages/CreateServicelist";
import DeleteServiceName from "./pages/DeleteServiceName";
import UpdateServiceList from "./pages/UpdateServiceList";

import CreateInvoice from "./components/Invoice/CreateInvoice";
import Invoicelist from "./components/Invoice/Invoicelist";
import EditInvoiceName from "./components/Invoice/EditInvoiceName";
import FinalInvoice from "./components/Invoice/FinalInvoice";
import QuotationInvoice from "./components/Invoice/QuotationInvoice";
import AddInvoiceServices from "./components/Invoice/AddInvoiceServices";
import ReviewInvoice from "./components/Invoice/ReviewInvoice";
import PrintInvoice from './components/Invoice/PrintInvoice';
import CreateInvoiceProfile from "./components/Invoice/CreateInvoiceProfile";


 
function App() {

  const user = useSelector(state => state.auth.user);
  
  return (
    <>



<Routes>
  
       
          {/* <Route path="/quotation-form" element={<QuotationForm1 />} /> */}
   
          <Route path="/quotation-form" element={user ? <QuotationForm1 /> : <Navigate to="/" />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={user? <CreateCompanyProfile />:<Login/>} />

        <Route path="/final-quotation/:id" element={user ? <Final_quotation/>: <Navigate to="/" />} />
        <Route path="/update/:id" element={user ?<UpdateServicesForm />: <Navigate to="/" />} />
        <Route path="/print/:id" element={user ?<Print_Page />: <Navigate to="/" />} />
        <Route path="/quotationlist" element={user ? <QuotationList />: <Navigate to="/" />}/>
        <Route path="/createnotes/:id" element={user ? <CreateNotes />: <Navigate to="/" />}/>
        <Route path="/deletenotes/:id" element={user ? <DeleteNotes />: <Navigate to="/" />} />
        <Route path="/addservices/:id" element={user ? <AddServices />: <Navigate to="/" />} />
        <Route path="/addimage/:quotationId/:imageType" element={<AddImageComponent />} />
        <Route path="/create-company-profile" element={user ? <CreateCompanyProfile />: <Navigate to="/" />}  />
        <Route path="/review/:id" element={user ? <Reviews />: <Navigate to="/" />} />
        <Route path="/deletecompanydata/:id" element={user ? <DeleteCompanydata />: <Navigate to="/" />} />
        <Route path="/mainupdatecompanydata/:id" element={user ? <MainUpdateCompanyData />: <Navigate to="/" />} />
        <Route path="/updatecompanydata/:id" element={user ? <UpdateCompanyData />: <Navigate to="/" />} />
        <Route path="/update-quotation-name/:id" element={user ? <UpdateQuotationName />: <Navigate to="/" />} />
        <Route path="/update-notes/:id" element={user ? <UpdateNotes />: <Navigate to="/" />} />
        <Route path="/create-servicelist" element={user ? <CreateServicelist />: <Navigate to="/" />} />
        <Route path="/delete-servicename" element={user ? <DeleteServiceName />: <Navigate to="/" />} />
        <Route path="/update-servicename" element={user ? <UpdateServiceList />: <Navigate to="/" />} />
        
        <Route path="/create-invoice" element={user ? <CreateInvoice />: <Navigate to="/" />} />
        <Route path="/invoicelist" element={user ? <Invoicelist />: <Navigate to="/" />} />
        <Route path="/update-invoice-name/:id" element={user ? <EditInvoiceName />: <Navigate to="/" />} />
        <Route path="/final-invoice/:id" element={user ? <FinalInvoice/>: <Navigate to="/" />} />
        <Route path="/quotation-invoice/:id" element={user ? <QuotationInvoice/>: <Navigate to="/" />} />
        <Route path="/addservicesinvoice/:id" element={user ? <AddInvoiceServices/>: <Navigate to="/" />} />
        <Route path="/review-invoice/:id" element={user ? <ReviewInvoice />: <Navigate to="/" />} />
        <Route path="/print-invoice/:id" element={user ?<PrintInvoice />: <Navigate to="/" />} />

        <Route path="/invoice-profile" element={user ?<CreateInvoiceProfile />: <Navigate to="/" />} />


        
        



        



      </Routes>
 


     
    </>
  );
}

export default App;
