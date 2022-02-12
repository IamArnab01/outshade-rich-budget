import React from "react";
import Image from "next/image";
// import BgCard from "../../public/home/card-bg.png";
import Investment from "../../public/home/investment.png";
import Estate from "../../public/home/estate.png";
import Tax from "../../public/home/tax.png";
import Insurance from "../../public/home/insurance.png";

const HomePlans = () => {
  return (
    <div className="rb-home-plans-bg py-4">
      <div className="container py-5">
        <h1 className="rb-home-plan-heading">
          Give wings to your finances. <br /> Plan smart.
        </h1>
        <div className="row">
          <div className="col-md-3">
            <Image src={Investment} alt="" />
            {/* <div className="text-center">
              Investment <br /> Planning
            </div> */}
          </div>
          <div className="col-md-3">
            <Image src={Estate} alt="" />
            {/* <div className="text-center">
              Estate <br /> Planning
            </div> */}
          </div>
          <div className="col-md-3">
            <Image src={Tax} alt="" />
            {/* <div className="text-center">
              Tax <br /> Planning
            </div> */}
          </div>
          <div className="col-md-3">
            <Image src={Insurance} alt="" />
            {/* <div className="text-center">
              Insurance <br /> Planning
            </div> */}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="rb-home-join-btn2">
            <span>Start Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePlans;
