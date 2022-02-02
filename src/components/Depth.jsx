import "../styles/Depth.css";
import Roadmap from "./Roadmap.jsx";
import Welcome from "./Welcome.jsx";

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
        <Welcome />
        <Roadmap />
      </div>
    </section>
  );
}
