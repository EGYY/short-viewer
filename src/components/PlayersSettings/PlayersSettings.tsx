import { positionArray } from "../../utils/constants";
import CheckBox from "../CheckBox/CheckBox";

interface PlayersSettingsProps {
  isShow: boolean;
  data?: any[];
  handleClick?: any;
  changeIsShow?: any;
}

export default function PlayerSettings({
  isShow,
  handleClick,
}: PlayersSettingsProps) {
  return (
    <div
      className={`${
        isShow ? "" : "hidden"
      } absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm rounded-[10px]`}
    >
      <ul className="float-right flex flex-col lg:flex-row justify-around lg:w-[80%] bg-[#6886BD] dark:bg-[#B4EB54] rounded-b-[10px] px-[20px] py-[25px]">
        {positionArray.map((item) => (
          <CheckBox
            teams
            key={item.keys}
            isRow
            keys={item.keys}
            isChecked={true}
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
