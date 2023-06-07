import React from "react";
import "./clases.css";
import { Cards } from "../reuseAbleComponents/reuseAbles";
import image1 from "../../public/class1.png";
import image2 from "../../public/class2.png";
import image3 from "../../public/class3.png";
import Vector from "../assets/Vector";
import Clock from "../assets/Clock";
import Animate from "../animator";
const Clases = () => {
  Animate("SlideUp")
  return (
    <div className="clasesImage">
      <div className="centerText">
        <p className="maintext marginTop">Clases</p>
      </div>
      <div className="mainPadding ">
        <div>
          <div style={{paddingBottom:"3rem"}} className="grid2 shiftButtom">
            <div className="stack SlideUp group">
              <Cards image={image1} />
              <div className="grid3">
                <div className="stack2">
                  <div className="align-start">
                    <div className="flexBox ">
                      <div className="circle"></div>
                      <p className="smallText">yoga</p>
                    </div>
                  </div>

                  <h3 className="highLightText">Strength & Sweat</h3>
                  <p className="smallText">Strength & Sweat</p>
                  <div className="align-start">
                    <div className="flexBox ">
                      <div className="white-circle"></div>
                      <p className="smallText">No.of classes:30</p>
                    </div>
                  </div>
                  <div className="align-start">
                    <div className="flexBox ">
                      <div className="white-circle"></div>
                      <p className="smallText">Difficulty:Beginner</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="stack2">
                    <div className="align-start">
                      <div className="flexBox ">
                        <Vector />
                        <p className="smallText">24 students</p>
                      </div>
                    </div>

                    <div className="flexBox ">
                      <Clock />
                      <p className="smallText">2 H</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flexBox2">
                <button className="coolbtn">Learn more</button>
                <button className="outlineBtn">Learn more</button>
              </div>
            </div>
            <div className="stack SlideUp group">
              <Cards image={image2} />
              <div className="grid3">
                <div className="stack2">
                  <div className="align-start">
                    <div className="flexBox ">
                      <div className="circle"></div>
                      <p className="smallText">yoga</p>
                    </div>
                  </div>

                  <h3 className="highLightText">Strength & Sweat</h3>
                  <p className="smallText">Strength & Sweat</p>
                  <div className="align-start">
                    <div className="flexBox ">
                      <div className="white-circle"></div>
                      <p className="smallText">No.of classes:30</p>
                    </div>
                  </div>
                  <div className="align-start">
                    <div className="flexBox ">
                      <div className="white-circle"></div>
                      <p className="smallText">Difficulty:Beginner</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="stack2">
                    <div className="align-start">
                      <div className="flexBox ">
                        <Vector />
                        <p className="smallText">24 students</p>
                      </div>
                    </div>

                    <div className="flexBox ">
                      <Clock />
                      <p className="smallText">2 H</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flexBox2">
                <button className="coolbtn">Learn more</button>
                <button className="outlineBtn">Learn more</button>
              </div>
            </div>
            <div className="stack SlideUp group">
              <Cards image={image3} />
              <div className="grid3">
                <div className="stack2">
                  <div className="align-start">
                    <div className="flexBox ">
                      <div className="circle"></div>
                      <p className="smallText">yoga</p>
                    </div>
                  </div>

                  <h3 className="highLightText">Strength & Sweat</h3>
                  <p className="smallText">Strength & Sweat</p>
                  <div className="align-start">
                    <div className="flexBox ">
                      <div className="white-circle"></div>
                      <p className="smallText">No.of classes:30</p>
                    </div>
                  </div>
                  <div className="align-start">
                    <div className="flexBox ">
                      <div className="white-circle"></div>
                      <p className="smallText">Difficulty:Beginner</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="stack2">
                    <div className="align-start">
                      <div className="flexBox ">
                        <Vector />
                        <p className="smallText">24 students</p>
                      </div>
                    </div>

                    <div className="flexBox ">
                      <Clock />
                      <p className="smallText">2 H</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flexBox2">
                <button className="coolbtn">Learn more</button>
                <button className="outlineBtn">Learn more</button>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clases;
