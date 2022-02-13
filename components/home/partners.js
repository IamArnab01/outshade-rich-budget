import React from "react";
import Image from "next/image";
import PartnerLogo from "../../public/home/partner.png";

const data = [
  PartnerLogo,
  PartnerLogo,
  PartnerLogo,
  PartnerLogo,
  PartnerLogo,
  PartnerLogo,
  PartnerLogo,
  PartnerLogo,
  PartnerLogo,
  PartnerLogo,
];

const HomePartners = () => {
  return (
    <div className="rb-home-height">
      <div className="rb-container container py-5">
        <h1 className="rb-home-partner-heading">Our Partners</h1>
        <p className="rb-home-partner-txt mb-4">
          We are proud to be partnered by some of the top financial and banking
          corporations out there.
        </p>
        <div className="row d-flex justify-content-center">
          {data &&
            data.slice(0, 2).map((item, index) => {
              return (
                <div className="col-2" key={index}>
                  <Image src={item} />
                </div>
              );
            })}
        </div>
        <div className="row d-flex justify-content-center">
          {data &&
            data.slice(2, 6).map((item, index) => {
              return (
                <div className="col-2" key={index}>
                  <Image src={item} />
                </div>
              );
            })}
        </div>
        <div className="row d-flex justify-content-center pb-3">
          {data &&
            data.slice(6, 9).map((item, index) => {
              return (
                <div className="col-2" key={index}>
                  <Image src={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePartners;
