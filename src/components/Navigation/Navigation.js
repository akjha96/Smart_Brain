import React, { Fragment } from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <Fragment>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p onClick={() => onRouteChange("signout")} className="f3 link dim black underline pa3 pointer">
            Sign Out
          </p>
        </nav>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p onClick={() => onRouteChange("signin")} className="f3 link dim black underline pa3 pointer">
            Sign In
          </p>
          <p onClick={() => onRouteChange("register")} className="f3 link dim black underline pa3 pointer">
            Register
          </p>
        </nav>
      </Fragment>
    );
  }
};

export default Navigation;
