import React from "react";
import SpaceX from "../Images/SpaceX.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "space-around",
        flexWrap:"wrap",
        alignItems:'center'
      }}
    >
      <div style={{width:"25%"}} >
        <img style={{width:"100%"}} src={SpaceX} alt="Not Found"></img>
      </div>
      <div>
        <h3>Menu</h3>
        <ul style={{ listStyle: "none" }}>
        <Link><li>Menu 1</li></Link>
        <Link><li>Menu 2</li></Link>
        <Link><li>Menu 3</li></Link>
        <Link><li>Menu 4</li></Link>
        </ul>
      </div>
      <div>
        <h3>Menu</h3>
        <ul style={{ listStyle: "none" }}>
        <Link><li>Menu 1</li></Link>
        <Link><li>Menu 2</li></Link>
        <Link><li>Menu 3</li></Link>
        <Link><li>Menu 4</li></Link>
        </ul>
      </div>
      <div>
        <h3>Menu</h3>
        <ul style={{ listStyle: "none" }}>
        <Link><li>Menu 1</li></Link>
        <Link><li>Menu 2</li></Link>
        <Link><li>Menu 3</li></Link>
        <Link><li>Menu 4</li></Link>
        </ul>
      </div>
      <div>
      <Link to="/instagram"><InstagramIcon color="primary"/></Link>
      <Link to="/facebook"><FacebookIcon color="primary" /></Link>
      <Link to="/whatsapp"><WhatsAppIcon color="primary"/></Link>
      </div>
      
    </div>
  );
}

export default Footer;
