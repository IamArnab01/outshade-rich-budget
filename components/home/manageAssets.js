import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import ScreenImage1 from "../../public/home/screen-img2.png";
import ScreenImage2 from "../../public/home/screen-img2.png";
import ScreenImage3 from "../../public/home/screen-img2.png";

const data = [
  {
    src: ScreenImage1,
    heading: `Manage Assets & Liabilities without hassle.`,
    desc: "Instant Asset vs Liability overview.",
  },
  {
    src: ScreenImage2,
    heading: `Manage Assets & Liabilities without hassle.`,
    desc: "Net Worth Analysis like a pro!",
  },
  {
    src: ScreenImage3,
    heading: `Manage Assets & Liabilities without hassle.`,
    desc: "Get Exclusive RB club Recommendations",
  },
];

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  dots: true,
  arrows: false,
  infinite: false,
  nextArrow: null,
  prevArrow: null,
};

const HomeManageAssets = () => {
  return (
    <div className="rb-home-asset-bg">
      <div className="rb-home-height">
        <div className="rb-container container">
          <div className="">
            {data && (
              <Slider {...settings} className="">
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="row d-flex justify-content-center"
                    >
                      <div className="col-md-5">
                        <h1 className="rb-home-asset-heading pt-2">
                          {item.heading}
                        </h1>
                        <p className="rb-home-asset-txt">
                          Instant Asset vs Liability overview.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <Image
                          src={item.src}
                          alt=""
                          className="w-100"
                          layout="responsive"
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeManageAssets;
