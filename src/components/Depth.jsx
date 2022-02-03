import "../styles/Depth.css";
import Roadmap from "./Roadmap.jsx";
import Welcome from "./Welcome.jsx";
import Rarities from "./Rarities.jsx";
import Team from "./Team.jsx";

export default function Depth() {
  window.addEventListener("scroll", () => {
    const welcome = document.getElementById("welcome");
    const uncommon = document.getElementById("uncommon");
    const value = window.scrollY;
    welcome.style.top = (value - 1300) * -1 + "px";
    if (value < 1300) {
      welcome.style.opacity = (2 / 250) * (value - 1000);
    } else {
      welcome.style.opacity = 1 - (value - 1200) * (1 / 250);
    }
  });

  return (
    <section className="flex flex-col items-center text-white">
      <div className="h-[160rem] flex flex-col justify-around w-[80%]">
        <Welcome />
        <Roadmap />
      </div>
      <Rarities />
      <Team />
    </section>
  );
}
