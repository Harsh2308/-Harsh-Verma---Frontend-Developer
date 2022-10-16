import React from 'react'
import Capsule from '../Images/Capsule.jpg'

function Header() {
  return (
    <div className='container' style={{display:"flex",flexWrap:"wrap",maxWidth:"100%",margin:'auto',padding:"20px",backgroundImage: `url(${Capsule})`, backgroundSize: '100% 100%',backgroundRepeat: 'no-repeat' ,backgroundPosition: 'center', height: '500px',alignItems:"center"}}>
            <div>
            <h3 style={{maxWidth:'32%',wordWrap:'break-word',textAlign:'center',color:'white'}}>The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond.</h3>
            <div>
            <button style={{width:'70px',height: '45px',fontSize:'20px',borderRadius: "20px",cursor:'pointer'}}>Watch</button>
            </div>
        </div>
    </div>
  )
}

export default Header