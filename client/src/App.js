import React from "react";
import { Route, Routes } from "react-router-dom";
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
import Set_Header_Footer from "./pages/Set_Header_Footer";


 
function App() {
  
  return (
    <>


<Routes>
       
<Route path="/" element={<QuotationForm1 />} />
        <Route path="/final-quotation/:id" element={<Final_quotation />} />
        <Route path="/update/:id" element={<UpdateServicesForm />} />
        <Route path="/print/:id" element={<Print_Page />} />
        <Route path="/quotationlist" element={<QuotationList />} />
        <Route path="/createnotes/:id" element={<CreateNotes />} />
        <Route path="/deletenotes/:id" element={<DeleteNotes />} />
        <Route path="/addservices/:id" element={<AddServices />} />
        <Route path="/addimage/:quotationId/:imageType" element={<AddImageComponent />} />
        <Route path="/set-header-footer/:id" element={<Set_Header_Footer />} />


        
        



        



      </Routes>
 


     
    </>
  );
}

export default App;
