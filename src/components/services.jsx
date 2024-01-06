import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Dự án thiết kế tiêu biểu</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <div className="service-frame">
                  <img src={d.icon} style={{  backgroundRepeat: "no-repeat", width: "-webkit-fill-available", borderRadius: "inherit" }}></img>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
