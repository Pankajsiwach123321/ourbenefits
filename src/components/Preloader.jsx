import React from "react";

const Preloder = () => {
  return (
    <div className=" min-vh-100 d-flex justify-content-center align-items-center position-fixed top-0  z-3 bg-white w-100">
      <div id="preloader">
        <div id="loader"></div>
      </div>
    </div>
  );
};

export default Preloder;
