import Head from 'next/head';
import Homepage from '../components/pages/Homepage/Homepage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>All Shows</title>
        <meta name='description' content='All shows page' />
      </Head>

      <Homepage />
    </div>
  );
}
