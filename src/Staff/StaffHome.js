import React from 'react'
import "./StaffHome.css"
import StaffNav from './StaffNav';
// import Nav from './Nav';

function StaffHome() {
  return (
    <div>
      <StaffNav/>
    <div className='body1'>
      {/* <Nav/> */}
    
      <h1 className='head1'>Welcome<br></br>to<br></br>Staff Page</h1>
    </div>
    </div>
  )
}

export default StaffHome;