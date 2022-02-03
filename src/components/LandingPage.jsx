import "../styles/LandingPage.css";
import React, { useState, useEffect } from "react";

export default function LandingPage() {
  const [trash, setTrash] = useState([]);

  const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const createTrash = (icon, arr) => {
    const top = randomNumberBetween(0, 50);
    const size = top / 5 + 1;

    const img = (
      <img
        style={{ top: `${top}vh`, left: `${randomNumberBetween(0, 100)}vw` }}
        className="trash"
        src={`../../images/trash/${icon}.svg`}
      ></img>
    );
    arr.push(img);
  };

  useEffect(() => {
    const trashArr = [];
    const temp = () => {
      let counter = 0;
      while (counter < 5) {
        createTrash("bag", trashArr);
        counter++;
      }
    };
    temp();
    setTrash(trashArr);
  }, []);

  return (
    <section>
      <div className="landscape">
        <div className="sun-container sun-container-1"></div>
        <div className="sun-container">
          <img src="../../images/lurry-sun.png" className="sun"></img>
        </div>
        <div className="sun-container sun-container-reflection">
          <div className="sun"></div>
        </div>
        <div className="flex justify-center absolute w-[20rem] h-[50rem] left-[75vw] bottom-[30vh] z-20 overflow-hidden">
          <div className="grass-3 relative bottom-0"></div>
          <div className="reed-3 relative bottom-0"></div>
        </div>
        <div className="water">
          {trash}
          <div className="front">
            <div className="grass"></div>
            <div className="reed reed-1"></div>
            <div className="grass grass-1"></div>
            <div className="reed"></div>
          </div>
        </div>
        <div className="splash"></div>
        <div className="splash delay-1"></div>
        <div className="splash delay-2"></div>
        <div className="splash splash-4 delay-2"></div>
        <div className="splash splash-4 delay-3"></div>
        <div className="splash splash-4 delay-4"></div>
        <div className="splash splash-stone delay-3"></div>
        <div className="splash splash-stone splash-4"></div>
        <div className="splash splash-stone splash-5"></div>
      </div>
    </section>
  );
}
