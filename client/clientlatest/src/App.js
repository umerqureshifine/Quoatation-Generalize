// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Print_Page from "./pages/Print_Page";
// import QuotationForm1 from './pages/QuotationForm1';
// import Final_quotation from "./pages/Final_quotation";
// import UpdateServicesForm from "./pages/UpdateServicesForm";
// import QuotationList from "./pages/QuotationList";
// import NotesTable from "./pages/NotesTable";
// import CreateNotes from "./pages/CreateNotes";
// import DeleteNotes from "./pages/DeleteNotes";
// import AddServices from "./pages/AddServices";
// import ImageUploadComponent from "./pages/AddImageComponent";
// import AddImageComponent from "./pages/AddImageComponent";
// import Set_Header_Footer from "./pages/Set_Header_Footer";
// import Registration from "./pages/Registration";
// import Login from "./pages/Login";


 
// function App() {

  
//   return (
//     <>


// <Routes>
  
       
//           <Route path="/quotation-form" element={<QuotationForm1 />} />
//           <Route path="/register" element={<Registration />} />
//           <Route path="/" element={<Login />} />

//         <Route path="/final-quotation/:id" element={<Final_quotation />} />
//         <Route path="/update/:id" element={<UpdateServicesForm />} />
//         <Route path="/print/:id" element={<Print_Page />} />
//         <Route path="/quotationlist" element={<QuotationList />} />
//         <Route path="/createnotes/:id" element={<CreateNotes />} />
//         <Route path="/deletenotes/:id" element={<DeleteNotes />} />
//         <Route path="/addservices/:id" element={<AddServices />} />
//         <Route path="/addimage/:quotationId/:imageType" element={<AddImageComponent />} />
//         <Route path="/set-header-footer/:id" element={<Set_Header_Footer />} />


        
        



        



//       </Routes>
 


     
//     </>
//   );
// }

// export default App;




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
import Set_Header_Footer from "./pages/Set_Header_Footer";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Reviews from "./pages/Reviews";
import DeleteCompanydata from "./pages/DeleteCompanydata";
import MainUpdateCompanyData from "./pages/MainUpdateCompanyData";
import UpdateCompanyData from "./pages/UpdateCompanyData";
import UpdateQuotationName from "./pages/UpdateQuotationName";


 
function App() {

  const user = useSelector(state => state.auth.user);
  
  return (
    <>



<Routes>
  
       
          {/* <Route path="/quotation-form" element={<QuotationForm1 />} /> */}
   
          <Route path="/quotation-form" element={user ? <QuotationForm1 /> : <Navigate to="/" />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={user? <QuotationForm1 />:<Login/>} />

        <Route path="/final-quotation/:id" element={user ? <Final_quotation/>: <Navigate to="/" />} />
        <Route path="/update/:id" element={user ?<UpdateServicesForm />: <Navigate to="/" />} />
        <Route path="/print/:id" element={user ?<Print_Page />: <Navigate to="/" />} />
        <Route path="/quotationlist" element={user ? <QuotationList />: <Navigate to="/" />}/>
        <Route path="/createnotes/:id" element={user ? <CreateNotes />: <Navigate to="/" />}/>
        <Route path="/deletenotes/:id" element={user ? <DeleteNotes />: <Navigate to="/" />} />
        <Route path="/addservices/:id" element={user ? <AddServices />: <Navigate to="/" />} />
        <Route path="/addimage/:quotationId/:imageType" element={<AddImageComponent />} />
        <Route path="/set-header-footer/:id" element={user ? <Set_Header_Footer />: <Navigate to="/" />}  />
        <Route path="/review/:id" element={user ? <Reviews />: <Navigate to="/" />} />
        <Route path="/deletecompanydata/:id" element={user ? <DeleteCompanydata />: <Navigate to="/" />} />
        <Route path="/mainupdatecompanydata/:id" element={user ? <MainUpdateCompanyData />: <Navigate to="/" />} />
        <Route path="/updatecompanydata/:id" element={user ? <UpdateCompanyData />: <Navigate to="/" />} />
        <Route path="/update-quotation-name/:id" element={user ? <UpdateQuotationName />: <Navigate to="/" />} />


        
        



        



      </Routes>
 


     
    </>
  );
}

export default App;
