import Head from "next/head";
import React from "react";
import Layout from "../layouts";
import Hometop from "../components/home/hometop";
import HomeConnect from "../components/home/connect";
import HomePlans from "../components/home/plans";
import HomeKYC from "../components/home/kyc";
import HomeManageAssets from "../components/home/manageAssets";
import HomeExpenseTrack from "../components/home/expenseTrack";
import HomeReminders from "../components/home/reminders";
import HomeSecurity from "../components/home/security";
import HomeDocuments from "../components/home/docs";
import HomePrizes from "../components/home/prizes";
import HomePartners from "../components/home/partners";
import HomeTestimonials from "../components/home/testimonials";
import HomeMentors from "../components/home/mentors";
import HomeSuprheroes from "../components/home/superheroes";

const Home = () => {
  return (
    <Layout>
      <React.Fragment>
        <Head>
          <title>Home</title>
          <meta name="description" content="This is the home page" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish&family=Noto+Sans&family=Poppins&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* page content */}
        <div className="rb-top-margin">
          <Hometop />
          <HomeConnect />
          <HomePlans />
          <HomeKYC />
          <HomeManageAssets />
          <HomeExpenseTrack />
          <HomeReminders />
          <HomeSecurity />
          <HomeDocuments />
          <HomePrizes />
          <HomePartners />
          <HomeTestimonials />
          <HomeMentors />
          <HomeSuprheroes />
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Home;
