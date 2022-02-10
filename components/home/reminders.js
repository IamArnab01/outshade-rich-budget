import React from "react";
import Image from "next/image";
import ScreenImage from "../../public/home/reminder.png";

const HomeReminders = () => {
  return (
    <div className="rb-home-remindrs-bg py-5">
      <div className="rb-container container">
        <div className="row d-flex align-items-center py-4">
          <div className="col-md-6">
            <div>
              <h1 className="rb-home-asset-heading mb-4">
                Get regular <br /> reminders & always <br />
                be on top of your <br />
                plans!
              </h1>
              <p className="rb-home-reminder-txt mt-5">
                Onboard quickly on our application and start your <br />{" "}
                financial journey.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <Image
              src={ScreenImage}
              alt=""
              className="w-100"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReminders;
