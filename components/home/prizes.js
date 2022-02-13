import React from "react";
import Image from "next/image";
import ScreenImage from "../../public/home/coins.png";

const HomePrizes = () => {
  return (
    <div className="rb-home-remindrs-bg">
      <div className="rb-home-height">
        <div className="rb-container container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div>
                <h1 className="rb-home-prizes-heading mb-4">
                  Earn exciting prizes <br />
                  by giving referrals and <br />
                  completing tasks
                </h1>
                <p className="rb-home-reminder-txt mt-5">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Non vel, tellus in non, consectetur <br /> egestas nec
                </p>
              </div>
            </div>
            <div className="col-md-6" style={{ paddingTop: 60 }}>
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
    </div>
  );
};

export default HomePrizes;
