import React from "react";
import Image from "next/image";
import User1 from "../../public/home/user1.png";
import User2 from "../../public/home/user2.png";

const HomeRecomendation = () => {
  return (
    <div className="bg-black">
      <div>
        <div className="rb-home-recom-bg">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <div className="row d-flex justify-content-center rb-home-recom-row">
                  <div className="col-5" style={{ paddingLeft: 0 }}>
                    <div className="card rb-home-recom-card">
                      <div className="d-flex justify-content-center pb-3">
                        <Image src={User1} alt="" className="w-100" />
                      </div>
                      <h3>Hi Jatin,</h3>
                      <p>
                        Your Risk Profile is moderately high, we recommend the
                        following investment pattern for higher returns.
                      </p>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="card rb-home-recom-card">
                      <div className="d-flex justify-content-center pb-3">
                        <Image src={User2} alt="" className="w-100" />
                      </div>
                      <h3>Hey arya,</h3>
                      <p>
                        Your Risk Profile is moderately high, we recommend the
                        following investment pattern for higher returns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div>
                  <h1 className="rb-home-recom-heading mb-4">
                    Get customised <br /> recommendations <br /> with our Risk{" "}
                    <br /> Profiler!
                  </h1>
                  <p className="rb-home-recom-txt">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Non vel, tellus in non, <br /> consectetur egestas nec
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
        </div>
      </div>
    </div>
  );
};

export default HomeRecomendation;
