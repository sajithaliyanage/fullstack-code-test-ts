import { FC, useEffect, useState } from 'react';
import Layout from './components/Layout';
import { CssBaseline } from '@mui/material';
import LazyProgress from './components/LazyProgress';

const App: FC = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CssBaseline />
      {loading ? (
        <LazyProgress />
      ) : (
        <Layout>
          <div></div>
        </Layout>
      )}
    </>
  );
};

export default App;
