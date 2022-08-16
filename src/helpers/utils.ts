const randomArrayInRange = (min: number, max: number, n: number): number[] =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

export default randomArrayInRange;
