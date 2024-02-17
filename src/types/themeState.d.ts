import '@mui/material/styles/createPalette';

export type Theme = {
  palette: Mode;
};

export type ThemeState = {
  palette: PaletteOptions;
};

declare module '@mui/material/styles/createPalette' {
  export type PaletteOptions = {
    mode: string;
  };
}
