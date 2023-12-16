import React from "react";

export const Team = (props) => {
  return (
    <div id="grid" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>{props.title}</h2>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {props.data ? (
            props.data.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="col-md-3 col-sm-6 grid-item"
              >
                <div className="thumbnail">
                  <div className="center-cropped">
                    <img src={item.img} alt={item.title} className="grid-img" />
                  </div>
                  <div className="caption">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};
