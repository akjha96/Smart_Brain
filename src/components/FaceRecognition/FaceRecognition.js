import React, { Fragment } from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <Fragment>
      <div className="center ma">
        <div className="absolute mt2">
          <img id="inputimage" alt="Uploaded item" src={imageUrl} width="500px" height="auto" />
          <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default FaceRecognition;
