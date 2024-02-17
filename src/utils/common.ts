export const wait = async (timerInMillis: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, timerInMillis);
  });
};

export const THEME_MODES: { LIGHT_MODE: string; DARK_MODE: string } = {
  LIGHT_MODE: 'light',
  DARK_MODE: 'dark',
};
