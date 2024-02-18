import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Theme } from '@emotion/react';
import { createTheme, CssBaseline, PaletteOptions, ThemeProvider } from '@mui/material';

import Layout from './components/Layout';
import LazyProgress from './components/LazyProgress';
import Users from './pages/Users';
import { RootState } from './store/store';
import useTimeLoader from './hooks/useTimeLoader';

const App: FC = (): JSX.Element => {
  const palette: PaletteOptions = useSelector((state: RootState) => state.theme.palette);

  const appTheme: Theme = createTheme({
    palette,
  });

  const loading = useTimeLoader();

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {loading && <LazyProgress />}
      <Layout>
        <Users />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
