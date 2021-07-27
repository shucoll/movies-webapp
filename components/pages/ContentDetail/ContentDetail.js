import { useState, useEffect } from 'react';
import YouTubeEmbed from 'react-youtube';
import movieTrailer from 'movie-trailer';

import Button from '../../UI/Button/Button';
import styles from './ContentDetail.module.scss';

const ContentDetail = (props) => {
  const { data } = props;

  const [trailerUrl, setTrailerUrl] = useState('');
  const [error, setError] = useState(false);

  const videoOpts = {
    height: '500px',
    width: '100%',
    playerVars: {
      // autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const url = await movieTrailer(null, {
          tmdbId: data.id,
          apiKey: process.env.NEXT_PUBLIC_TMD_API_KEY,
        });
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      } catch (error) {
        setError(true);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.detail}>
      {error && <h2 className={styles.error}>Sorry! the trailer could not be found</h2>}
      {trailerUrl && !error && (
        <YouTubeEmbed videoId={trailerUrl} opts={videoOpts} />
      )}
      <div className={styles.detail__content}>
        <h1 className={styles.detail__content__title}>
          {data?.title || data?.name || data?.original_title}
        </h1>
        <div className={styles.detail__content__genres}>
          {data.genres.map((item) => (
            <div className={styles.detail__content__genre} key={item.id}>
              {item.name}
            </div>
          ))}
        </div>
        <p className={styles.detail__content__overview}>{data.overview}</p>

        {data.homepage && (
          <Button content='Visit Homepage' href={data.homepage} />
        )}
      </div>
    </div>
  );
};

export default ContentDetail;
