import { useState } from "react";
import { useTranslation } from "react-i18next";

interface CheckBoxProps {
  item: any;
  keys: string;
  isChecked: boolean;
  isRow?: boolean;
  teams?: boolean;
}

export default function CheckBox({
  item,
  keys,
  isChecked,
  isRow,
  teams,
}: CheckBoxProps) {
  const [state, setState] = useState(isChecked);
  const { t } = useTranslation();
  const handleChecked = () => {
    setState(!state);
    item.isShow = !state;
  };
  return (
    <li
      className={`flex justify-between ${
        isRow ? "gap-[5px]" : "px-[30px] lg:px-[60px]"
      } mb-[10px] cursor-pointer`}
      onClick={handleChecked}
    >
      <p title={t(keys)}>{teams ? keys : t(keys)}</p>
      <div
        className={`${
          state ? "bg-white dark:bg-[#0F1521]" : ""
        } w-[20px] h-[20px] border border-white dark:border-black rounded-[5px]`}
      ></div>
    </li>
  );
}
