import React from "react";
import Link from "next/link";
import Image from "next/image";
import TwitterImg from "../../public/twitter.png";
import MailImg from "../../public/mail.png";
import LinkedinImg from "../../public/linkedin.png";
import Logo from "../../public/logo.png";

const data = [
  {
    title: "Lorem Ipsum",
    url: "/",
  },
  {
    title: "consectetuer nec",
    url: "/",
  },
  {
    title: "Lorem Ipsum",
    url: "/",
  },
  {
    title: "consectetuer nec",
    url: "/",
  },
  {
    title: "Lorem Ipsum",
    url: "/",
  },
  {
    title: "consectetuer nec",
    url: "/",
  },
];

const Footer = () => {
  return (
    <React.Fragment>
      <div className="rb-footer-bg">
        <div className="container rb-container py-4">
          <div className="row d-flex align-items-center pb-4">
            <div className="col-md-10">
              <h1 className="rb-footer-bold-txt">What are you waiting for?</h1>
              <p className="rb-footer-txt">
                Millions have already started their journey to financial
                freedom. You can start today.
              </p>
            </div>
            <div
              className="col-md-2 d-flex align-items-center justify-content-between"
              style={{ paddingLeft: 0 }}
            >
              <Image src={TwitterImg} />
              <div className="rb-footer-btn">
                <span>Join Us</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <Image src={Logo}></Image>{" "}
                <p className="mb-0 rb-footer-logo-txt">RC Club</p>
              </div>
              <p className="rb-footer-bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                vel, tellus in non, consectetur egestas nec tellus quisque.
                Fames mauris, egestas at dictum maecenas integer imperdiet
                consectetur egestas.
              </p>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div>
                <h2 className="rb-footer-logo-txt2">About Us</h2>
                {data.map((item, index) => {
                  return (
                    <Link href={item.url} key={index}>
                      <p className="mb-0 rb-footer-link-txt">{item.title}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div>
                <h2 className="rb-footer-logo-txt2">More</h2>
                {data.map((item, index) => {
                  return (
                    <Link href={item.url} key={index}>
                      <p className="mb-0 rb-footer-link-txt">{item.title}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <div>
                <h2 className="rb-footer-logo-txt2">Contacts</h2>
                <p className="rb-footer-addr-txt">
                  <span>Visit us at</span> - 32 Park Street,
                  <br /> Cvgyjdshv, City, State Name, PIN - <br /> 710025
                </p>
                <p className="rb-footer-addr-txt">
                  <span> Call us at</span> - +91 99855 25489
                </p>
                <div className="d-flex align-items-start">
                  <div>
                    <Image src={MailImg}></Image>
                  </div>
                  <div className="mx-3">
                    <Image src={LinkedinImg}></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="rb-footer-copyright-bg">
        <p className="rb-footer-copyright-txt mb-0">
          Copyright 2022. all rights reserved @GoalFi Club
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
