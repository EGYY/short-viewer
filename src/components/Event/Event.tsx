import { EventProps } from "../../interfaces/event.interface";
import { formatSecondsToMMSS } from "../../utils/formatDate";
import goal from "../../images/goal.svg";
import red from "../../images/red-card.svg";
import yellow from "../../images/yellow-card.svg";

export const Event = ({ array, id, isHome, idKey }: EventProps) => {
  const checkEvent = array.filter(
    (item: { event_second: number }) => item.event_second === id
  );
  if (!checkEvent[0]) return <></>;
  const home = isHome ? "-mt-[28px]" : "mt-[42px]";
  const homeLine = isHome ? '-top-[15px]' : '' 
  const time = formatSecondsToMMSS(id);
  const event = array.find((item) => item.event_second === id);
  switch (event.event_type) {
    case "Goal":
      return (
        <>
          <img
            title={time}
            className={
              "absolute flex items-center text-[14px] font-bold " + home
            }
            alt="icon"
            src={goal}
          />
          <div className={"absolute border border-dashed w-[1px] h-[160%] ml-[4px] " + homeLine }></div>
        </>
      );
    case "Yellow card":
      return (
        <>
        <img
          title={time}
          className={
            "absolute flex items-center text-[14px] font-bold " + home
          }
          alt="icon"
          src={yellow}
        />
        <div className={"absolute border border-dashed w-[1px] h-[160%] ml-[3px] " + homeLine }></div>
      </>
      );
    case "Red card":
      return (
        <>
        <img
          title={time}
          className={
            "absolute flex items-center text-[14px] font-bold " + home
          }
          alt="icon"
          src={red}
        />
        <div className={"absolute border border-dashed w-[1px] h-[160%] ml-[3px] " + homeLine }></div>
      </>
      );
    default:
      return <></>;
  }
};
