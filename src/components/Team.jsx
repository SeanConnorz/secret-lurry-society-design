import "../styles/Team.css";
import { useState, useEffect } from "react";

export default function Team() {
  const [connor, setConnor] = useState();
  const [iouri, setIouri] = useState();
  const [tobias, setTobias] = useState();
  const [amber, setAmber] = useState();

  const red =
    "border-solid border-[4px] border-red-600 shadow-2xl shadow-red-600";

  const yellow =
    "border-solid border-[4px] border-yellow-600 shadow-2xl shadow-yellow-600";

  const purple =
    "border-solid border-[4px] border-purple-600 shadow-2xl shadow-purple-600";

  const determineHover = (array, color) => {
    array.forEach((obj) => {
      obj.setState(color);
    });
  };

  useEffect(() => {
    const developer = document.getElementById("developer");
    const marketing = document.getElementById("marketing");
    const artist = document.getElementById("artist");
    developer.addEventListener("mouseover", () => {
      determineHover(
        [
          { state: connor, setState: setConnor },
          { state: tobias, setState: setTobias },
        ],
        purple
      );
      setAmber(" ");
      setIouri(" ");
    });
    marketing.addEventListener("mouseover", () => {
      determineHover([{ state: iouri, setState: setIouri }], yellow);
      setAmber(" ");
      setConnor(" ");
      setTobias(" ");
    });
    artist.addEventListener("mouseover", () => {
      determineHover([{ state: amber, setState: setAmber }], red);
      setIouri(" ");
      setConnor(" ");
      setTobias(" ");
    });
  }, []);

  return (
    <section className="flex flex-col justify-around items-center w-[60%] h-[60rem]">
      <h1 className="text-[6rem]">Meet the team</h1>
      <div className="flex justify-between w-full">
        <img
          id="connor"
          className={"rounded-full object-contain w-[20rem] " + connor}
          src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"
        ></img>
        <img
          id="tobias"
          className={"rounded-full object-contain w-[20rem] " + tobias}
          src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"
        ></img>
        <img
          id="iouri"
          className={"rounded-full object-contain w-[20rem] " + iouri}
          src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"
        ></img>
        <img
          id="amber"
          className={"rounded-full object-contain w-[20rem] " + amber}
          src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"
        ></img>
      </div>
      <div className="flex justify-around text-[2rem] w-[75%]">
        <h1
          id="marketing"
          className="cursor-pointer hover:text-yellow-500 enlarge"
        >
          Marketing
        </h1>
        <h1 id="artist" className="cursor-pointer hover:text-red-500 enlarge">
          Artist
        </h1>
        <h1
          id="developer"
          className="cursor-pointer hover:text-purple-500 enlarge"
        >
          Developer
        </h1>
      </div>
    </section>
  );
}
