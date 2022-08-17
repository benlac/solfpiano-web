const randomArrayInRange = (min: number, max: number, n: number): number[] =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

export default randomArrayInRange;

export const generateMultipleValues = (arr: any) => {
  const newArr = new Array(20).fill(0);
  return newArr.map((_) => {
    console.log(Math.floor(Math.random() * (arr.length - 0 + 1) + 0));
    return arr[Math.floor(Math.random() * (arr.length - 1 - 0 + 1) + 0)];
  });
};
