import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/HOC/Layout/Layout';

import Spinner from '../components/UI/Spinner/Spinner';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
    };
    const handleStop = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <Layout>
      {loading ? <Spinner centerPage /> : <Component {...pageProps} />}
    </Layout>
  );
}

export default MyApp;
