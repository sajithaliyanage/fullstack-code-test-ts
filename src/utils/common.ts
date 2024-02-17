export const wait = async (timerInMillis: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, timerInMillis);
  });
};
