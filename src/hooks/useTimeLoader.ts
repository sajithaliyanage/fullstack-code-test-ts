import { useEffect, useState } from 'react';

const useTimeLoader = (): boolean => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading;
};

export default useTimeLoader;
