import { useState } from "react";
import { useWindowDimensions } from "../../utils/hooks/useWindowDimension";
import { Formation } from "../Formation/Formation";
import TecticsTeam from "../TacticsTeam/TacticsTeam";
import Timeline from "../Timeline/Timeline";
import { CSSTransition } from "react-transition-group";
import "../../styles/transition.css";

export default function Tactics() {
  const width = useWindowDimensions();
  const [isShowTimeline, setIsShowTimeline] = useState(false);
  const handleClickTimeline = () => {
    setIsShowTimeline(!isShowTimeline);
  };
  return (
    <div className="flex flex-col gap-[15px] h-fit">
      {width < 1024 ? (
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col  gap-[3px]">
            <div
              onClick={handleClickTimeline}
              className="text-center bg-[#d4d4d4] rounded-b shadow-sm"
            >
              Timeline
            </div>
            <CSSTransition
              in={isShowTimeline}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <Timeline />
            </CSSTransition>
          </div>
          {/* <Formation /> */}
        </div>
      ) : (
        <></>
        // <Formation />
      )}

      <TecticsTeam />
    </div>
  );
}
