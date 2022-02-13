import React from "react";
import Image from "next/image";
import ScreenImage from "../../public/home/screen-img1.png";

const HomeKYC = () => {
  return (
    <div className="rb-home-height">
      <div className="rb-container container">
        <div className="row d-flex align-items-center">
          <div className="col-md-7">
            <Image src={ScreenImage} alt="" className="w-100" />
          </div>
          <div className="col-md-5">
            <h1 className="rb-home-kyc-heading">
              Automated KYC
              <br />
              and Onboarding
              <br />
              via Documents!
            </h1>
            <p className="rb-home-kyc-txt mt-3">
              Onboard quickly on our application and start <br />
              your financial journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeKYC;
