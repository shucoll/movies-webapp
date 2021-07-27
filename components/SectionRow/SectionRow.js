import { useState, useEffect, useRef } from 'react';
import axios from '../../helpers/axios-instance';
import ArrowIcon from '../../public/svg/arrow.svg';
import Spinner from '../UI/Spinner/Spinner';

import SectionItem from './SectionItem/SectionItem';
import styles from './SectionRow.module.scss';

const SectionRow = (props) => {
  const { title, url, isLarge } = props;
  const ref = useRef();
  const [content, setContent] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setContent(response.data.results);
    }

    fetchData();
  }, [url]);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <button
        className={`${styles.section__arrow} ${styles.section__arrow_left}`}
        onClick={() => scroll(-200)}
      >
        <ArrowIcon className={styles.section__arrow__icon} />
      </button>

      <button
        className={`${styles.section__arrow} ${styles.section__arrow_right}`}
        onClick={() => scroll(200)}
      >
        <ArrowIcon className={styles.section__arrow__icon} />
      </button>

      {content ? (
        <div className={styles.section__container} ref={ref}>
          {content.map((item) => (
            <SectionItem content={item} key={item.id} isLarge={isLarge} />
          ))}
        </div>
      ) : (
        <Spinner center />
      )}
    </section>
  );
};

export default SectionRow;
