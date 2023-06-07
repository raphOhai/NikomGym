import React from "react";

export const Cards = ({image}) => {
  return (
    <>
      <div className="centerText">
        <div>
          <div className="imagePading">
            <img className="responsive" src={image} alt="" />
          </div>

          <div className="absoluteRecDiv"></div>
        </div>
      </div>
    </>
  );
};
