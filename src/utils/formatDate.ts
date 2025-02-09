export const formatDate = (date: Date): string => {
  const d = new Date(String(date));
  let day, month, year;
  day = d.getDate();
  month = d.getMonth() + 1;
  year = d.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  return `${day}.${month}.${year}`;
};

export function formatSecondsToMMSS(seconds: number) {
  if (isNaN(seconds) || seconds < 0) {
    return '0';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}