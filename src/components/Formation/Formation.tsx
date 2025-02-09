import TacticsBlock from "../TacticsBlock/TacticsBlock";
import Field from "../../images/field.png";
import FieldD from "../../images/field-dark.png";
import { useWindowDimensions } from "../../utils/hooks/useWindowDimension";
export const Formation = () => {
  const width = useWindowDimensions();
  return (
    <div className="flex-1 relative ">
      {width < 1024 ? (
        <img src={FieldD} alt="" className="h-full w-full" />
      ) : (
        <img src={Field} alt="" className="h-full w-full" />
      )}
      <p className="absolute top-[50%] -left-16 -rotate-90 text-[20px] text-white">
        FORMATION 4 - 1 - 2 - 3
      </p>
      <p className="absolute top-[50%] -right-16 rotate-90 text-[20px] text-white">
        FORMATION 4 - 1 - 2 - 3
      </p>
      <div className="absolute top-2 bottom-2 left-16 right-16 grid grid-cols-2">
        <TacticsBlock color={"red"} tactics={"1"} />
        <TacticsBlock color={"red"} tactics={"1"} />
      </div>
    </div>
  );
};
