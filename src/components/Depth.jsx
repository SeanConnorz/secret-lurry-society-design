import "../styles/Depth.css";
import Roadmap from "./Roadmap.jsx";

export default function Depth() {
  window.addEventListener("scroll", () => {
    const welcome = document.getElementById("welcome");
    const value = window.scrollY;
    welcome.style.top = (value - 700) * -1 + "px";
    if (value < 700) {
      welcome.style.opacity = (4 / 250) * (value - 600);
    } else {
      welcome.style.opacity = 1 - (value - 700) * (1 / 250);
    }
    console.log(value);
  });

  return (
    <section className="flex flex-col items-center ">
      <div className="h-[100rem] flex flex-col justify-around w-[80%] text-white">
        <div id="welcome" className="relative text-center">
          <h1 className="font-bold text-[2rem]">
            Welcome to the Secret Lurry Society
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Roadmap />
      </div>
    </section>
  );
}
