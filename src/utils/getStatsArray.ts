export const getStatsArray = (obj1: any, obj2: any) => {
  const array = [];
  for (let key in obj1) {
    array.push({ key, home: obj1[key], away: obj2[key], isShow: true });
  }
  return array;
};
