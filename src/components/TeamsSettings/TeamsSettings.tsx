import CheckBox from "../CheckBox/CheckBox";

export interface RowData {
  key: string;
  home: any;
  away: any;
  isShow: boolean;
}

interface TeamsSettingsProps {
  isShow: boolean;
  data: RowData[];
  changeState: any;
  changeIsShow: any;
}

export default function TeamsSettings({
  isShow,
  data,
  changeState,
  changeIsShow,
}: TeamsSettingsProps) {
  const handleClick = () => {
    const tmp = data.filter((item) => item.isShow === true);
    changeState(tmp);
    changeIsShow();
  };
  return (
    <div
      className={`${
        isShow ? "" : "hidden"
      } absolute z-10 top-0 left-0 right-0 bottom-0 backdrop-blur-sm rounded-[10px]`}
    >
      <ul className="float-right w-[60%] bg-[#EAD399] dark:bg-[#B4EB54] rounded-b-[10px] py-[25px]">
        {data.map((item) => (
          <CheckBox
            key={String(item.key)}
            keys={item.key}
            isChecked={item.isShow}
            item={item}
          />
        ))}
        <li>
          <button
            onClick={handleClick}
            className="bg-white px-[25px] float-right mr-[25px]"
          >
            Confirm
          </button>
        </li>
      </ul>
    </div>
  );
}
