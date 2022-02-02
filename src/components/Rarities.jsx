import Uncommon from "./Uncommon";
import Rare from "./Rare";
import Legendary from "./Legendary";
import Exotic from "./Exotic";

export default function Rarities() {
  return (
    <section className="flex flex-col items-center justify-around">
      <h1 className="font-bold text-[3rem]">Rarities</h1>
      <p className="w-[30%] text-center">
        There are 140 different traits in the secret lurry society, each fall
        into a different category of rareness. Uncommon, Rare, Legendary, and
        exotic.
      </p>
      <div className="h-[50rem] my-[20rem]">
        <Uncommon />
      </div>
      <div className="h-[50rem] my-[20rem]">
        <Rare />
      </div>
      <div className="h-[50rem] my-[20rem]">
        <Legendary />
      </div>
      <div className="h-[50rem] my-[20rem]">
        <Exotic />
      </div>
    </section>
  );
}
