import React, { Fragment } from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Fragment>
      <div className="ma4 mt0 ">
        <Tilt className="Tilt br2 shadow-2 pointer" options={{ max: 55 }} style={{ height: 120, width: 120 }}>
          <div className="Tilt-inner pa3">
            <img alt="Logo" style={{ paddingTop: "5px" }} src={brain}></img>
          </div>
        </Tilt>
      </div>
    </Fragment>
  );
};

export default Logo;
