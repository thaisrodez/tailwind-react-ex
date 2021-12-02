import React from "react";
import ImageOne from "../images/img1.jpeg";
import ImageTwo from "../images/img2.jpeg";

const Content = () => {
  return (
    <>
      <div className="card">
        <img
          src={ImageOne}
          alt="class"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Promo</h2>
          <p className="mb-2">Summer 2021</p>
        </div>
      </div>
      <div className="card">
        <img
          src={ImageTwo}
          alt="class"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Group</h2>
          <p className="mb-2">Summer 2021</p>
        </div>
      </div>
    </>
  );
};

export default Content;
