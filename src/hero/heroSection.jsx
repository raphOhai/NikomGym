import Animate from "../animator";
import "./hero.css";
import MenuIcon from "./menuIcon";

const HeroSection = () => {
  Animate("SlideUp");
  return (
    <div>
      <div className="header">
        <p className="logo">NICOM</p>
        <div className="flexBox hideMobileAndTab">
          <p className="headingText">classes</p>
          <p className="headingText">Team</p>
          <p className="headingText">About Us</p>
          <p className="headingText">Gallery</p>
        </div>

        <div className="hideDesktop">
          <MenuIcon size={"35"} />
        </div>

        {/* <button className="btn hideMobileAndTab">
          <p className="headingText"> contact us</p>
        </button> */}
      </div>
      <div>
        <div className="align-start">
          <div className="widthRestrict marginTop">
            <div className="stack">
              <p className="mainText SlideUp group">Unleash your Inner Athlete</p>
              <div className="smallText SlideUp group">
                <p className="">
                  Get ready to sweat it out and achieve your fitness goals with
                  our high-energy fitness classes! Our classes are designed to
                  cater to all fitness levels and provide a fun and motivating
                  environment to help you reach your peak performance.
                </p>
              </div>
              <div className="btnRestrict ">
                <button className="btn">
                  <p className="headingText"> contact us</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
