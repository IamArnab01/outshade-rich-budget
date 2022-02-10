import React from "react";
import Image from "next/image";
import ScreenImage from "../../public/home/screen-img3.png";

const HomeExpenseTrack = () => {
  return (
    <div className="py-5">
      <div className="rb-container container py-4">
        <div className="row d-flex align-items-center">
          <div className="col-md-7">
            <Image
              src={ScreenImage}
              alt=""
              className="w-100"
              layout="responsive"
            />
          </div>
          <div className="col-md-5">
            <h1 className="rb-home-expns-track-heading mb-4">
              Use our expense <br /> tracker and start <br /> saving money{" "}
              <br /> effectively.
            </h1>
            <p className="rb-home-expns-track-txt">
              Onboard quickly on our application and start your <br /> financial
              journey.
            </p>
            <div className="d-flex justify-content-end mt-4">
              <div className="rb-home-join-btn2 mx-4">
                <span>Join Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExpenseTrack;
