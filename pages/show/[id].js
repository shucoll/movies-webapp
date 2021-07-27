import Head from 'next/head';
import axios from '../../helpers/axios-instance';
import ContentDetail from '../../components/pages/ContentDetail/ContentDetail';

const ContentDetailPage = (props) => {
  const { data, error } = props;

  if (error) {
    return (
      <h1
        style={{
          padding: '3rem',
          textAlign: 'center',
        }}
      >
        {error}
      </h1>
    );
  }

  return (
    <>
      <Head>
        <title>{data?.title || data?.name || data?.original_title}</title>
      </Head>
      <ContentDetail data={data} />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { id, media_type } = query;

  try {
    const response = await axios.get(
      `/${media_type}/${id}?api_key=${process.env.NEXT_PUBLIC_TMD_API_KEY}&language=en-US`
    );
    return { props: { data: response.data } };
  } catch (error) {
      return {
        props: { error: 'Something went wrong. Please reload to view content' },
      };
  }
}

export default ContentDetailPage;
