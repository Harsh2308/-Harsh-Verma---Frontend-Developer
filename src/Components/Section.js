import React from "react";
import Capsule from "../Images/Capsule.jpg";

function Section() {
  return (
    <div style={{marginBottom:"50px",marginTop:'50px'}}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{marginBottom:"10px"}}>Section</h1>
        <h3>Capsule Details</h3>
      </div>
      <div style={{display:"flex",justifyContent:"center",marginTop:'20px',flexWrap:'wrap'}}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          width:"94%",
        //   maxWidth: "95%",
        }}
      >
        <div style={{width:"30%"}}>
          <img
            src={Capsule}
            alt="Not Found"
            style={{ width: "100%", height: "100%" }}
          ></img>
          <h1 style={{textAlign:'center',wordWrap:"break-word"}}>Subheader</h1>
          <p style={{textAlign:'center'}}>Lorem</p>
        </div>
        <div style={{width:"30%" }}>
          <img
            src={Capsule}
            alt="Not Found"
            style={{ width: "100%", height: "100%" }}
          ></img>
          <h1 style={{textAlign:'center',wordWrap:"break-word"}}>Subheader</h1>
          <p style={{textAlign:'center'}}>Lorem</p>
        </div>
        <div style={{width:"30%"}}>
          <img
            src={Capsule}
            alt="Not Found"
            style={{ width: "100%", height: "100%" }}
          ></img>
          <h1 style={{textAlign:'center',wordWrap:"break-word"}}>Subheader</h1>
          <p style={{textAlign:'center'}}>Lorem</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Section;
