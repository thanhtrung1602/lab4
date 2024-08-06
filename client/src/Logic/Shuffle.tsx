function Shuffle<T>(arr: T[]): T[] {
  const arrShuffle: T[] = [];
  const shuffleIdx: number[] = [];
  let i = 0;
  while (i < arr.length) {
    const randomArr = Math.floor(Math.random() * arr.length);
    if (!shuffleIdx.includes(randomArr)) {
      arrShuffle.push(arr[randomArr]);
      shuffleIdx.push(randomArr);
      i++;
    }
  }
  return arrShuffle;
}

export default Shuffle;
