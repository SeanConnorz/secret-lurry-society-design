import "../styles/Team.css";

export default function Team() {
  const red =
    "rounded-full object-contain w-[20rem] border-solid border-2 border-red-600 shadow-2xl shadow-red-600";
  return (
    <section className="flex flex-col justify-around items-center w-[60%] h-[60rem]">
      <h1 className="text-[6rem]">Meet the team</h1>
      <div className="flex justify-between w-full">
        <img
          className="rounded-full object-contain w-[20rem] border-solid border-2 border-yellow-600 shadow-2xl shadow-yellow-600"
          src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"
        ></img>
        <img
          className={red}
          src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"
        ></img>
        <img
          className="rounded-full object-contain w-[20rem] border-solid border-2 border-purple-600 shadow-2xl shadow-purple-600"
          src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"
        ></img>
        <img
          className="rounded-full object-contain w-[20rem] shadow-2xl"
          src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"
        ></img>
      </div>
      <div className="flex justify-around text-[2rem] w-[75%]">
        <h1 className="cursor-pointer hover:text-yellow-500 enlarge">
          Marketing
        </h1>
        <h1 className="cursor-pointer hover:text-red-500 enlarge">Artist</h1>
        <h1 className="cursor-pointer hover:text-purple-500 enlarge">
          Developer
        </h1>
      </div>
    </section>
  );
}
