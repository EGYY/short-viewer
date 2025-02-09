import { useState } from "react";
import { useRecoilState } from "recoil";
import { time, valuesRefresh } from "../../atoms/time";



export const RefreshSettings = () => {
  const [show, setShow] = useState(false);
  const [recoilState, setRecoilState] = useRecoilState(time);
  const [state, setState] = useState(String(recoilState.name));
  if(!localStorage.getItem('time')){
    localStorage.setItem('time', JSON.stringify(valuesRefresh[0]))
  }
  const setTime = (item: {
    time: number;
    name: string;
}) => {
    setState(item.name)
    localStorage.setItem('time', JSON.stringify(item));
    setRecoilState({time: item.time, name: item.name})
  }
  return (
    <div
      onClick={() => setShow(!show)}
      className="text-black min-w-[180px] relative cursor-pointer flex justify-between items-center gap-[5px] text-[16px] font-semibold bg-gray-blue dark:bg-[#B4EB54] py-[5px] px-[15px] rounded-full"
    >
      <TimeIcon />{state}<ArrowIcon show={show} />
      {show && (
        <div className="absolute top-10 right-0 bg-white p-3 rounded-xl z-50">
          <ul className="flex flex-col gap-1 text-black">
            {valuesRefresh.map((item) => <li onClick={() => setTime(item)} key={item.name} className="hover:bg-[#d4d4d4] px-2 rounded-md">{item.name}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

const TimeIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.63989 0.492989C6.91989 0.0169891 7.53001 -0.141991 8.01001 0.138009L13.01 3.076C13.24 3.214 13.41 3.44401 13.47 3.71101C13.54 3.97801 13.4901 4.25801 13.3401 4.48701L10.3401 9.04902C10.0301 9.51102 9.40995 9.63901 8.94995 9.33601C8.48995 9.03201 8.35991 8.412 8.65991 7.951L10.52 5.12403C5.67002 6.04803 2 10.315 2 15.438C2 21.237 6.7 25.938 12.5 25.938C18.3 25.938 23 21.237 23 15.438C23 12.363 21.6801 9.59901 19.5701 7.67701C19.1601 7.30501 19.14 6.67199 19.51 6.26399C19.88 5.85599 20.5099 5.82698 20.9199 6.19898C23.4299 8.48398 25 11.778 25 15.438C25 22.341 19.4 27.938 12.5 27.938C5.6 27.938 0 22.341 0 15.438C0 9.583 4.01996 4.66898 9.45996 3.31098L6.98999 1.86201C6.51999 1.58201 6.35989 0.969989 6.63989 0.492989Z"
        fill="white"
      />
    </svg>
  );
};
const ArrowIcon = ({ show }: { show?: boolean }) => {
  return (
    <svg
      className={`${show ? "-rotate-90" : ""}`}
      width="5"
      height="10"
      viewBox="0 0 15 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.290059 13.293C-0.0999414 13.683 -0.0999414 14.3169 0.290059 14.7069L13.2901 27.7069C13.6801 28.0979 14.32 28.0979 14.71 27.7069C15.1 27.3169 15.1 26.683 14.71 26.293L2.40993 14L14.71 1.70695C15.1 1.31695 15.1 0.683006 14.71 0.293006C14.32 -0.0979941 13.6801 -0.0979941 13.2901 0.293006L0.290059 13.293Z"
        fill="white"
      />
    </svg>
  );
};
