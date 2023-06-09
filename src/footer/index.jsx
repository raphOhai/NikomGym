import React from "react";
import LastCtA from "./lastCtA";

const Footer = () => {
  return (
    <>
      <div className="mainBody ">
        <LastCtA />
      </div>
      <div className="footerImage">
        <div className="centerText ">
          <div className="stack mainPadding shift">
            <p className="logo">NIKOM</p>
            <p className="smallText mainPadding">
              Join us today and experience the transformative power of our
              fitness classes. Don't wait to start your fitness journey. Take
              the first step towards a healthier, stronger you. Let's sweat,
              have fun, and make fitness a way of life together!
            </p>
            <div className="line"></div>
            <div className="centerText">
              <p className="smallText">© NICOM 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
