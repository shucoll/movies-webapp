import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from '../../helpers/axios-instance';

import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';

import styles from './Banner.module.scss';

const Banner = (props) => {
  const { url } = props;
  const [content, setContent] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setContent(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, [url]);

  let bannerBgStyle = {};

  if (content)
    bannerBgStyle = {
      backgroundSize: 'cover',
      backgroundImage: `linear-gradient(to bottom, #11111133, #111),url(${process.env.NEXT_PUBLIC_IMG_BASE_URI}${content.backdrop_path})`,
      backgroundPosition: 'center center',
    };

  return (
    <header className={styles.banner} style={bannerBgStyle}>
      <div className={styles.banner__content}>
        {content ? (
          <>
            <h1>
              {content?.title || content?.name || content?.original_title}
            </h1>
            <p className={styles.banner__content__overview}>
              {content.overview}
            </p>
            <Link
              href={`/show/${content.id}?media_type=${
                content?.media_type || 'movie'
              }`}
              passRef
            >
              <Button content='Know More' />
            </Link>
          </>
        ) : (
          <Spinner center/>
        )}
      </div>
    </header>
  );
};

export default Banner;
