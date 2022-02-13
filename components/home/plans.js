import React from "react";
import Image from "next/image";
import BgCard from "../../public/home/card-bg.png";
import Investment from "../../public/home/investment.png";
import Estate from "../../public/home/estate.png";
import Tax from "../../public/home/tax.png";
import Insurance from "../../public/home/insurance.png";

const HomePlans = () => {
  return (
    <div className="rb-home-plans-bg">
      <div className="rb-home-height">
        <div className="rb-container container">
          <h1 className="rb-home-plan-heading pb-4">
            Give wings to your finances. <br /> Plan smart.
          </h1>
          <div className="row pt-5 pb-3">
            <div className="col-md-3 d-flex justify-content-center">
              <div className="rb-home-plans-bg-card card">
                <div className="d-flex justify-content-center">
                  <Image src={Investment} alt="" className="w-100" />
                </div>
                <div className="text-center">
                  Investment <br /> Planning
                </div>
              </div>{" "}
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="rb-home-plans-bg-card card">
                <div className="d-flex justify-content-center">
                  <Image src={Estate} alt="" className="w-100" />
                </div>
                <div className="text-center">
                  Estate <br /> Planning
                </div>
              </div>{" "}
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="rb-home-plans-bg-card card">
                <div className="d-flex justify-content-center">
                  <Image src={Tax} alt="" className="w-100" />
                </div>
                <div className="text-center">
                  Tax <br /> Planning
                </div>
              </div>{" "}
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="rb-home-plans-bg-card card">
                <div className="d-flex justify-content-center">
                  <Image src={Insurance} alt="" className="w-100" />
                </div>
                <div className="text-center">
                  Insurance <br /> Planning
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <div className="rb-home-join-btn2">
              <span>Start Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePlans;
