import { useWindowDimensions } from "../../utils/hooks/useWindowDimension";
import PlayersTactics from "../PlayersTactics/PlayersTactics";
import Tactics from "../Tactics/Tactics";
import Timeline from "../Timeline/Timeline";

export default function MainTactics() {
  const width = useWindowDimensions();
  return (
    <div className="px-[10px] lg:px-[25px] py-[20px] lg:py-[40px] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[10px]">
      <Tactics />
      <div className="h-full flex flex-col gap-[10px] lg:gap-[30px] ">
        {width < 1024 ? <></> : <Timeline />}
        <PlayersTactics />
      </div>
    </div>
  );
}
