import React, { Fragment } from "react";

const Rank = ({ name, entries }) => {
  return (
    <Fragment>
      <div>
        <div className="white f3">{`${name}, your current entry count is...`}</div>
        <div className="white f1">{entries}</div>
      </div>
    </Fragment>
  );
};

export default Rank;
