export function secondsToTime(seconds: number | string) {
  const minutes = Math.floor(Number(seconds) / 60);
  const remainingSeconds = Number(seconds) % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
