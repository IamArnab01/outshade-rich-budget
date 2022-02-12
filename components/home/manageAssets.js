import React from "react";
import Image from "next/image";
import ScreenImage from "../../public/home/screen-img2.png";
import LinesImage from "../../public/home/lines.png";

const HomeManageAssets = () => {
  return (
    <div className="rb-home-asset-bg pt-5">
      <div className="rb-container container">
        <div className="row pt-5 pb-4">
          <div className="col-md-6">
            <h1 className="rb-home-asset-heading mb-4">
              Manage Assets &
              <br />
              Liabilities without
              <br />
              hassle.
            </h1>
            <p className="rb-home-asset-txt mt-5">
              Instant Asset vs Liability overview.
            </p>
          </div>
          <div className="col-md-6">
            <Image
              src={ScreenImage}
              alt=""
              className="w-100"
              layout="responsive"
            />
          </div>
        </div>
        <div
          className="pt-5 text-center"
          style={{ position: "relative", bottom: "-6px" }}
        >
          <Image src={LinesImage} />
        </div>
      </div>
    </div>
  );
};

export default HomeManageAssets;
