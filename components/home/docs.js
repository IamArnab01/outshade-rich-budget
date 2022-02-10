import React from "react";
import Image from "next/image";
import ScreenImage from "../../public/home/screen-img5.png";

const HomeDocuments = () => {
  return (
    <div className="rb-home-asset-bg py-5">
      <div className="rb-container container">
        <div className="row d-flex align-items-center pt-5">
          <div className="col-md-5">
            <h1 className="rb-home-docs-heading">
              Never worry
              <br /> about losing <br /> documents <br /> again.
            </h1>
          </div>
          <div className="col-md-7 text-end">
            <Image
              src={ScreenImage}
              alt=""
              className="w-100"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDocuments;
