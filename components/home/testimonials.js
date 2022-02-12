import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import MentorImage from "../../public/home/mentor.png";
import LinkedinIcon from "../../public/home/linkedin.png";
import MailIcon from "../../public/home/mail.png";
import TwitterIcon from "../../public/home/twitter.png";

const data = [
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
  {
    src: MentorImage,
    name: "Mr. Robin Arya",
    position: "Founder",
    company: "Out Shade",
    testimony:
      "Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non, consectetur egestas nec. Lorem ipsum doler sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel, tellus in non. ",
    email: "https://mail.google.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/",
  },
];

const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
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

const HomeTestimonials = () => {
  return (
    <div style={{ background: "#000" }}>
      <div className="rb-container container py-5">
        <h1 className="rb-home-testimonial-heading pt-4">Testimonials</h1>
        <p className="rb-home-testimonial-txt mb-5">
          We are proud to be partnered by some of the top financial and banking
          corporations out there.
        </p>
        <div className="py-4">
          {data && (
            <Slider {...settings} className="">
              {data.map((item, index) => {
                return (
                  <div key={index} className="px-lg-5 px-md-4">
                    <div className="card rb-home-testiony-card p-lg-5 p-md-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <Image src={item.src} width={52} height={52} />
                          <div style={{ marginLeft: 25 }}>
                            <p className="rb-home-testimony-name mb-0">
                              {item.name}
                            </p>
                            <p className="rb-home-testimony-pos mb-0">
                              {item.position} at <span>{item.company} </span>{" "}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around">
                          <div style={{ marginRight: 20 }}>
                            <Image src={MailIcon} />
                          </div>
                          <div style={{ marginRight: 20 }}>
                            <Image src={LinkedinIcon} />
                          </div>
                          <div>
                            <Image src={TwitterIcon} />
                          </div>
                        </div>
                      </div>
                      <p className="rb-home-testimony pt-4">
                        &quot; {item.testimony} &quot;
                      </p>
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

export default HomeTestimonials;
