import { FC, useEffect, useState } from 'react';
import Layout from './components/Layout';
import { createTheme, CssBaseline, PaletteOptions, ThemeProvider } from '@mui/material';
import LazyProgress from './components/LazyProgress';
import Users from './pages/Users';
import { Theme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App: FC = (): JSX.Element => {
  const palette: PaletteOptions = useSelector((state: RootState) => state.theme.palette);
  const [loading, setLoading] = useState<boolean>(true);

  const appTheme: Theme = createTheme({
    palette,
  });

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {loading ? (
        <LazyProgress />
      ) : (
        <Layout>
          <Users />
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default App;
