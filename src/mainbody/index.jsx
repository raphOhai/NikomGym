import "./mainbody.css";
import image1 from "/martialArt.png";
import image2 from "/weightLifter.png";
import image3 from "/yo.png";
import image4 from "/zumba.png";
import image5 from "/excersise.png";
import { Cards } from "../reuseAbleComponents/reuseAbles";
import Animate from "../animator";
const MainContent = () => {
  Animate("sideSlide")
  Animate("SlideUp")
  return (
    <>
      <div className="mainBody mainPadding">
        <div className="stack paddingButtom">
          <div className="centerText">
            <p className="maintext">Find what moves you</p>
          </div>
          <div className="grid">
            <div className="sideSlide group">
              <img className="mainImage" src={image2} alt="" />
            </div>
            <div className="sideSlide group">
              <img className="mainImage" src={image4} alt="" />
            </div>
            <div className="sideSlide group">
              <img className="mainImage" src={image3} alt="" />
            </div >
            <div className="hideMobileAndTab sideSlide group">
              <img className="mainImage" src={image1} alt="" />
            </div>
          </div>

          <div className="centerText">
            <p className="maintext">Fit for your lifestyle</p>
          </div>
          <div className="centerText">
            <div className="widthRestrict2">
              <p className="smallText ">
                Get ready to sweat it out and achieve your fitness goals with
                our high-energy fitness classes! Our classes are designed to
                cater to all fitness levels and provide a fun and motivating
                environment to help you reach your peak performance.
              </p>
            </div>
          </div>
          <div className="SlideUp">
             <Cards image={image5}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
