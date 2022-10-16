import { useEffect, useState } from "react";
import { apicalls } from "../Api/api";
import Capsule from "../Images/Capsule.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function SectionScroll() {
  const [data, setData] = useState([]);
  useEffect(() => {
    apicalls.itemcall().then((res) => {
      setData(res.data);
    });
  }, []);
  const renderSlides = () =>
    data.map((item) => (
        <div>
      <div style={{ display: "flex",flexWrap:"wrap", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "94%",
            //   maxWidth: "95%",
          }}
        >
          <div
            style={{ width: "95%", border: "2px solid black" }}
          >
            <img
              src={Capsule}
              alt="Not Found"
              style={{ width: "100%", height: "100%" }}
            ></img>
            <h1 style={{ textAlign: "center" }}>{item.capsule_serial}</h1>
            <p style={{ textAlign: "center" }}>{item.capsule_id}</p>
          </div>
        </div>
      </div>
      </div>
    ));
  return (
    <div style={{overflow:'hidden',marginTop:'50px',marginBottom:'50px'}}>
      <div style={{ textAlign: "center",marginBottom:"20px" }}>
        <h1 style={{marginBottom:"10px"}}>CAPSULE</h1>
        <h3>ALL PRODUCT</h3>
      </div>
      <Slider
        dots={false}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}

export default SectionScroll;
