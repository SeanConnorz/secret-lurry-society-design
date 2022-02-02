import "../styles/Depth.css";

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
      <div className="h-[80rem] flex flex-col justify-around w-[80%] text-center text-white">
        <div id="welcome" className="relative">
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
        <div className="chalkboard">
          pure css chalkboard
          <br />
          <ol>
            <li>only requires a html tag and div tag</li>
            <li>
              thanks to{" "}
              <a
                href="http://stackoverflow.com/a/19258938/1654250 "
                title="Stackoverflow Link"
                contenteditable="false"
              >
                RhinoWalrus
              </a>{" "}
              for his help :)
            </li>
            <li>
              thanks to{" "}
              <a
                href="https://codepen.io/HugoGiraudel/pen/layxv"
                title="CodePen Link"
                contenteditable="false"
              >
                HugoGiraudel
              </a>{" "}
              for his awesome work :)
            </li>
          </ol>
          <br />
        </div>
      </div>
    </section>
  );
}
