import React from "react";
import Image from "next/image";
import Cartoon from "../../public/home/connect-img.png";

const HomeConnect = () => {
  return (
    <div className="rb-home-height">
      <div className="rb-container container">
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <h1 className="rb-home-cnct-heading mb-3">
              We connect <br />
              you to your <br /> superhero <br /> es.
            </h1>
            <p className="rb-home-cnct-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel,
              tellus in non, consectetur egestas nec tellus quisque.
            </p>
          </div>
          <div className="col-md-7 text-center">
            <Image src={Cartoon} alt="" className="rb-home-cnct-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeConnect;
