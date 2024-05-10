import React from 'react'
import "./Home.css"
import Nav from './Nav';

function Home() {
  return (
    <div className='body'>
      <Nav/>
    
      <h1 className='head'>Welcome<br></br>to<br></br>Food Page</h1>
    </div>
  )
}

export default Home;