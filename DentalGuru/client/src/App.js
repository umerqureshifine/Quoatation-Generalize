import React from 'react'
import Receptionistdash from './pages/Receptioinstdash'
import Sider from './components/Sider'
import PatientProfile from './pages/PatientProfile'
import Header from './components/Header'
import Section1 from './components/ReceptioinstDashboard/Card'
import Calendar from 'react-calendar'
import Calender1 from './components/ReceptioinstDashboard/Calender1'
import {  Route, Routes } from 'react-router-dom'
import AllPatient from './pages/AllPatient'
import AppointmentSection from './pages/AppointmentSection'
import EditPopup from './components/Appointment/EditPopup'
import ModifyPopup from './components/Appointment/ModifyPopup'
import DeletePopup from './components/Appointment/DeletePopup'
import BillSection from './pages/BillSection'
import DoctorSection from './pages/DoctorSection'
import Doctorprofile from './components/DoctorSection/Doctorprofile'
import VideoSection from './pages/VideoSection'
import LabSection from './pages/LabSection'
import ReportSection from './pages/ReportSection'
import NewPatient from './pages/NewPatient'

function App() {
  return (
    <div>
       <div style={{ overflow: "hidden" }}>
     
   <Routes>
    <Route path='/' Component={Receptionistdash}/>
    <Route path='/all_patient' Component={AllPatient}/>
    <Route path='/patient_profile' Component={PatientProfile}/>
    <Route path='/appointment' Component={AppointmentSection}/>
    <Route path='/edit_appointment' Component={EditPopup}/>
    <Route path='/modify_appointment' Component={ModifyPopup}/>
    <Route path='/delete_appointment' Component={DeletePopup}/>
    <Route path='/bill_section' Component={BillSection}/>
    <Route path='/doctor_section' Component={DoctorSection}/>
    <Route path='/doctor_profile' Component={Doctorprofile}/>
    <Route path='/video' Component={VideoSection}/>
    <Route path='/lab' Component={LabSection}/>
    <Route path='/report' Component={ReportSection}/>
    <Route path='/new_patient' Component={NewPatient}/>
    
   </Routes>
      
      </div>
    </div>
  )
}

export default App
