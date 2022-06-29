export const randomizer = (width: number, height: number) => {
  const randomResult = {
    width: Math.floor(Math.random() * (width - 0 + 1)) + 0,
    height: Math.floor(Math.random() * (height - 0 + 1)) + 0,
  };
  console.log(randomResult);
  return randomResult;
};
