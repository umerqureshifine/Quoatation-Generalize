import React from 'react'
import Header from '../components/Header'
import Sider from '../components/Sider'
import Card from '../components/ReceptioinstDashboard/Card'
import Calendar from 'react-calendar'
import Form from '../components/ReceptioinstDashboard/Form'
import AppointTable from '../components/ReceptioinstDashboard/AppointTable'
import ClinicTable from '../components/ReceptioinstDashboard/ClinicTable'
import Doctor from '../components/ReceptioinstDashboard/Doctor'
import Calender1 from '../components/ReceptioinstDashboard/Calender1'
import styled from 'styled-components'

function Receptioinstdash() {
  return (
    <Wrapper>
   <Header/>
   
   <div className="row flex-nowrap">
    <div className="col-lg-1 col-1" id='sider'>
   <Sider/>
    </div>
    <div className="col-lg-11 mt-2" id='set'>
      <div className="row">
   <div className="col-lg-2">
    <Card/>
   </div>
   <div className="col-lg-4">
    <Form/>
   </div>
   
   <div className="col-lg-3">

  <Doctor/>
</div>
 
   <div className="col-lg-3">

    <Calender1/>
</div>
  <div className="col-lg-12">
    <AppointTable/>
  </div>


  </div>
   </div>
   </div>
   
   
      
    </Wrapper>
  )
}

export default Receptioinstdash
const Wrapper=styled.div`
#set{

  margin-left: -4.5rem;
@media screen and (max-width: 768px) {
  margin-left: 1.5rem;
}
  @media screen and (min-width: 1020px) and (max-width: 1600px) {
    margin-left: -1.9rem;
  }
}

#sider{
  height: 62rem;
  

}
`



