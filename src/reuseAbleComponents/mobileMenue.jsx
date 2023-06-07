import React from "react";

const MobileMenu = () => {
  return (
    <div id="menu" className="MobileMenue transition">
      <div id="mobileMenue-Items" className="MobileMenueContent shift">
        <div className="stack centerText mainText">
          <p className="SlideUp group" >Classes</p>
          <p className="SlideUp group">Team</p>
          <p className="SlideUp group">About us</p>
          <p className="SlideUp group">Gallery</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
