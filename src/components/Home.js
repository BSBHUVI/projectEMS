import React, { useEffect, useState }  from 'react'
import './Home.css'
import { useMyAuthContext } from '../Context/AuthenticationContext'
import Card from './Card'



function Home() {
const {allUsers} =useMyAuthContext()
const [employeeCount,setEmployeeCount]=useState(0)
const [adminCount,setAdminCount]=useState(0)

useEffect(()=>{
  const NumberOfAdmims=allUsers.filter((val)=>val?.role==="admin")
  setAdminCount(NumberOfAdmims?.length)
  },[allUsers])


useEffect(()=>{
const NumberOfEmployees=allUsers.filter((val)=>val?.role==="employee")
setEmployeeCount(NumberOfEmployees?.length)
},[allUsers])
   return (
    <>
    <div className='HomeContainer'>
 
    <div className="dashboard">
    <div>
<div className="line">
  <p>Work Units</p>
  <div></div>
</div>
<div className="cardConatiner">
<Card Count={employeeCount} Role={"Employee"}/>
<Card Count={adminCount} Role={"Admin"}/>
<Card Count={4} Role={"Departments"}/>

</div>
</div>


    </div>

    
 
   </div>
    </>
  )
}

export default Home
