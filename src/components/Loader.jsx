import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <div className="fixed z-50 inset-0 flex justify-center items-center">
        <div className="absolute inset-0 bg-gray-300 bg-opacity-50"></div>
        <RotatingLines
          Color="grey"
          strokeWidth="3"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </>
  );
}

export default Loader;
