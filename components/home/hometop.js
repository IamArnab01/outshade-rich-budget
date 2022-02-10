import React from "react";
import Image from "next/image";
import LaptopImage from "../../public/home/laptop.png";

const Hometop = () => {
  return (
    <div className="rb-home-top-bg">
      <div className="rb-container container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 px-0">
            <Image
              src={LaptopImage}
              alt=""
              className="rb-hometop-img"
              width={600}
              height={600}
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-end rb-homtop-heading">
              Start your money <br />
              journey with the most <br /> powerful financial <br /> launchpad.
            </h1>
            <p className="text-end rb-homtop-txt mb-4">
              Manage your finances with accuracy and experience!
            </p>
            <div className="d-flex justify-content-end">
              <div className="rb-home-join-btn1 mx-4">
                <span>Join Us</span>
              </div>
              <div className="rb-home-learn-btn1">
                <span>Learn More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometop;
