import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Layout from './components/Layout';
import LazyProgress from './components/LazyProgress';
import Users from './pages/Users';
import useTimeLoader from './hooks/useTimeLoader';
import useTheme from './hooks/useTheme';

const App: FC = (): JSX.Element => {
  const appTheme = useTheme();
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
