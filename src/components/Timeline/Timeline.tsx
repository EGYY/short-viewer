import { useParams } from "react-router-dom";
import { PossessionService } from "../../services/Possession.Service";
import { useEffect, useRef } from "react";
import { possession } from "../../atoms/possession";
import { useRecoilState, useRecoilValue } from "recoil";
import { teams } from "../../atoms/team";
import { TimeLineNinety } from "../TimeLineNinety/TimeLineNinety";
import { events } from "../../atoms/events";
import { time } from "../../atoms/time";
import { match } from "../../atoms/match";

export default function Timeline() {
  const [possessionData, setPossessionData] = useRecoilState(possession);
  const [showEvent, setShowEvents] = useRecoilState(events);
  const { analyse_status } = useRecoilValue(match);
  const matchData = useRecoilValue(match);
  const intervalRef = useRef<NodeJS.Timer | number | null>(null);

  const { away_team, home_team } = useRecoilValue(teams);
  const times = useRecoilValue(time);
  let { id } = useParams();
  const fetchData = async () => {
    const response = await PossessionService.getPossession(Number(id));
    const newData = await response.data;
    setPossessionData(newData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (analyse_status === 2){
      const interval = setInterval(fetchData, times.time);
      intervalRef.current = interval;
    }
  },[analyse_status])
  useEffect(() => {
    if (analyse_status !== 2 && analyse_status !== 0) {
      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current as NodeJS.Timer);
        }
      };
    }
  }, [matchData]);

  const handleClickTimeline = () => {
    setShowEvents(!showEvent);
  };
  const checherHalf = possessionData.some((item) => item.half > 1)
    ? "2-nd half"
    : "1-st half";
  return (
    <div className="box relative flex items-center gap-[15px] bg-[#EAD399] dark:bg-[#3A4C6C] shadow-timeline rounded-[10px] px-[20px] h-[110px]">
      <div className="lg:text-[20px] font-[700] w-max dark:text-white">
        {checherHalf}
      </div>
      <div onClick={handleClickTimeline} className="flex flex-col w-full">
        <div className="flex justify-between font-bold leading-[13px] text-[14px] dark:text-white">
          <div>0</div>
          <div>
            15{" "}
            <div className="absolute z-10 ml-[5px] h-[80px] border border-dashed"></div>
          </div>
          <div>
            30{" "}
            <div className="absolute z-10 ml-[5px] h-[80px] border border-dashed"></div>
          </div>
          <div>
            45+{" "}
            <div className="absolute z-10 ml-[5px] h-[80px] border border-white"></div>
          </div>
          <div>
            60{" "}
            <div className="absolute z-10 ml-[5px] h-[80px] border border-dashed"></div>
          </div>
          <div>
            75{" "}
            <div className="absolute z-10 ml-[5px] h-[80px] border border-dashed"></div>
          </div>
          <div>90</div>
        </div>
        <div className="flex items-end h-[40px] bg-[#C90F324D] dark:bg-[#af5c6bcf] rounded-t-md">
          <TimeLineNinety array={possessionData} teamId={home_team.id} isHome />
        </div>
        <div className="flex items-start h-[40px] bg-[#00448B4D] dark:bg-[#6d90b54d] rounded-b-md">
          <TimeLineNinety array={possessionData} teamId={away_team.id} />
        </div>
        <div className="leading-[15px] text-[14px] h-[13px]"></div>
      </div>
    </div>
  );
}

const timeLineHundredTwenty = () => {
  return (
    <div className="grid grid-cols-90 justify-between w-full">
      {[...Array(120)].map((item, index) => (
        <div key={String(index)} className="border"></div>
      ))}
    </div>
  );
};
