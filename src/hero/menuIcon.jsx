import React from "react";

const MenuIcon = ({ size }) => {
  // const
  const select = () => {
    const elem1 = document.getElementById("strock1");
    const elem2 = document.getElementById("strock2");
    const elem3 = document.getElementById("menu");
    const elem4 = document.getElementById("mobileMenue-Items");
    const add = () => {
      elem4.classList.add("AddtoDom");
    };

    const remove = () => {
      elem4.classList.remove("AddtoDom");
    };
 

    if (elem1.classList.contains("rotate1")) {
      elem1.classList.remove("rotate1");
      elem2.classList.remove("rotate2");
      elem3.classList.remove("slideIn");
      remove()
    } else {
      elem1.classList.add("rotate1");
      elem2.classList.add("rotate2");
      elem3.classList.add("slideIn");
      const myTimeout = setTimeout(add, 500);
      myTimeout()
    
    }
 
  };
  return (
    <div onClick={() => select()} className="pieMenueStack  relative">
      <div id="strock1" className="piemenu1 transition position1 rotate"></div>
      <div id="strock2" className="piemenu2 transition position2 rotate "></div>
      {/* <div className="piemenu3"></div> */}
    </div>
  );
};

export default MenuIcon;
