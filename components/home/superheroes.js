import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import MentorImage1 from "../../public/home/mentor.png";
import MentorImage2 from "../../public/home/mentor2.png";
import LinkedinImg from "../../public/home/linkedin.png";
import MailImg from "../../public/home/mail.png";
import TwitterImg from "../../public/home/twitter.png";

const data = [
  {
    src: MentorImage1,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage2,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage1,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage2,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage1,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage2,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage1,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage2,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage1,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage2,
    name: "Mr. Robin Arya",
    position: "Founder, Google",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
];

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: false,
  arrows: false,
  infinite: false,
  nextArrow: null,
  prevArrow: null,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      },
    },
  ],
};

const HomeSuprheroes = () => {
  return (
    <div className="rb-home-height">
      <div className="rb-container container pb-5">
        <h1 className="rb-home-partner-heading">Our Superheroes</h1>
        <p className="rb-home-partner-txt mb-4">
          We are proud to be partnered by some of the top financial and banking
          corporations out there.
        </p>
        <div className="pt-4 pb-5">
          {data && (
            <Slider {...settings} className="">
              {data.map((item, index) => {
                return (
                  <div key={index} className="d-flex justify-content-center">
                    <div>
                      <Image src={item.src} className="rb-home-mentor-img" />
                      <div className="d-flex justify-content-evenly mb-1 pt-2">
                        <a href={item.email} target="_blank" rel="noreferrer">
                          <Image src={MailImg} className="cursor-pointer" />
                        </a>
                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={LinkedinImg} className="cursor-pointer" />
                        </a>
                        <a href={item.twitter} target="_blank" rel="noreferrer">
                          <Image src={TwitterImg} className="cursor-pointer" />
                        </a>
                      </div>
                      <p className="rb-home-mentor-name mb-1 mt-2">
                        {item.name}
                      </p>
                      <p className="rb-home-mentor-pos mb-5">{item.position}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSuprheroes;
