import React, { Fragment } from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <Fragment>
      <div className="">
        <p className="f3">{"This magic brain will detect faces in your pictures. Give it a try!"}</p>
      </div>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" placeholder="Enter image's URL" onChange={onInputChange} />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ImageLinkForm;
