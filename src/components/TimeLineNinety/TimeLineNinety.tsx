import { TimeLineProps } from "../../interfaces/TimeLineNine.interface";
import { mergedArray } from "../../utils/mergedArray";
import { Event } from "../Event/Event";
import { useRecoilValue } from "recoil";
import { events } from "../../atoms/events";

export const TimeLineNinety = ({ array, teamId, isHome }: TimeLineProps) => {
  const showEvents = useRecoilValue(events);
  const filltered = array.filter((item) => item.team_id === teamId);
  const halfF = filltered
    .filter((item) => item.half === 1)
    .map((item) => [item.start_possession || item.event_second, item.end_possession || item.event_second]);
  const halfS = filltered
    .filter((item) => item.half === 2)
    .map((item) => [item.start_possession || item.event_second, item.end_possession || item.event_second]);
  const eventsItemsF = filltered
    .filter(
      (item) =>
        item.half === 1 && item.event_type 
    )
    const eventsItemsS = filltered
    .filter(
      (item) =>
      item.half === 2 && item.event_type 
      )
  const mergedArrayF = mergedArray(halfF);
  const mergedArrayS = mergedArray(halfS);
  return (
    <div className="grid grid-cols-90 w-full relative">
      {[...Array(2700)].map((item, index) =>
        mergedArrayF.includes(index) ? (
          <div
            key={String(index + 1)}
            className={`w-[1px] h-[25px] ${
              isHome ? "bg-[#C90F32]" : "bg-[#00448B]"
            }`}
          >
            {showEvents && <Event isHome={isHome} array={eventsItemsF} id={index} />}
          </div>
        ) : (
          <div key={String(index + 1)} className="w-[1px]"></div>
        )
      )}
      {[...Array(2700)].map((item, index) =>
        mergedArrayS.includes(index) ? (
          <div
            key={String(index + 1)}
            className={`w-[1px] h-[25px] ${
              isHome ? "bg-[#C90F32]" : "bg-[#00448B]"
            }`}
          >
            {showEvents && <Event isHome={isHome} array={eventsItemsS} id={index} />}
          </div>
        ) : (
          <div key={String(index + 1)} className="w-[1px]"></div>
        )
      )}
    </div>
  );
};
