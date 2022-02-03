import Uncommon from "./Uncommon";
import Rare from "./Rare";
import Legendary from "./Legendary";
import Exotic from "./Exotic";

export default function Rarities() {
  return (
    <section className="flex flex-col items-center justify-around text-[6rem] mb-[40rem]">
      <h1 className="font-bold text-[6rem] mt-[20rem]">Rarities</h1>
      <p className="w-[30%] text-center text-[2rem] mb-[20rem]">
        There are 140 different traits in the secret lurry society, each fall
        into a different category of rareness. Uncommon, Rare, Legendary, and
        exotic.
      </p>
      <div className="h-[130rem] my-[20rem]">
        <Uncommon />
      </div>
      <div className="h-[130rem] my-[20rem]">
        <Rare />
      </div>
      <div className="h-[130rem] my-[20rem]">
        <Legendary />
      </div>
      <div className="h-[130rem] my-[20rem]">
        <Exotic />
      </div>
    </section>
  );
}
