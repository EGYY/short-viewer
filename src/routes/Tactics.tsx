import { useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import MainTactics from "../components/MainTactics/MainTactics";
import { MatchService } from "../services/Match.Service";
import { useRecoilState, useRecoilValue } from "recoil";
import { match } from "../atoms/match";
import { useParams } from "react-router-dom";
import { LexiconService } from "../services/Lexicon.Service";
import { time } from "../atoms/time";

export default function Tactics() {
  const [matchData, setMatchData] = useRecoilState(match);
  const { analyse_status } = useRecoilValue(match);
  const intervalRef = useRef<NodeJS.Timer | number | null>(null);
  let { id } = useParams();
  const times = useRecoilValue(time);

  const fetchData = async () => {
    const response = await MatchService.getMatch(Number(id));
    const newData = await response.data;
    setMatchData(newData);
  };

  useEffect(() => {
   
    const fetchLexics = async () => {
      const response = await LexiconService.getLexic(
        localStorage.getItem("i18nextLng") || "en"
      );
      const newData = await response.data;
      localStorage.setItem("lexics", JSON.stringify(newData));
    };
    fetchData();
    
    fetchLexics();
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

  return (
    <div className="bg-[#EBF1FF] dark:bg-[#0F1521] h-full">
      <Header />
      <MainTactics />
    </div>
  );
}
