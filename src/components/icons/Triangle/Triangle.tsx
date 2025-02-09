import { useWindowDimensions } from "../../../utils/hooks/useWindowDimension";

export default function Triangle() {
  const width = useWindowDimensions();

  return width < 1024 ? (
    <svg
      width="13"
      height="13"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6651 14.25C10.7028 15.9167 8.29719 15.9167 7.33494 14.25L1.70577 4.5C0.743522 2.83333 1.94633 0.75 3.87084 0.75L15.1292 0.750001C17.0537 0.750001 18.2565 2.83334 17.2942 4.5L11.6651 14.25Z"
        stroke="#6886BD"
      />
    </svg>
  ) : (
    <svg
      width="25"
      height="25"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6651 14.25C10.7028 15.9167 8.29719 15.9167 7.33494 14.25L1.70577 4.5C0.743522 2.83333 1.94633 0.75 3.87084 0.75L15.1292 0.750001C17.0537 0.750001 18.2565 2.83334 17.2942 4.5L11.6651 14.25Z"
        stroke="#6886BD"
      />
    </svg>
  );
}
