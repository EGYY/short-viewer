export const mergedArray = (array: any[]) => { 
  const acc = array.reduce((acc, range) => {
  const [start, end] = range;
  for (let i = start; i <= end; i++) {
    acc.push(i);
  }
  return acc;
}, []);
return acc;
}