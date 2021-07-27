import Link from 'next/link';
import styles from './SectionItem.module.scss';

const SectionItem = (props) => {
  const { content, isLarge } = props;

  return (
    <Link href={`/show/${content.id}?media_type=${content?.media_type || 'movie'}`}>
      <a className={styles.card}>
        <div className={styles.card__content}>
          <h3>{content?.title || content?.name || content?.original_title}</h3>
        </div>
        <img
          className={`${styles.card__poster} ${
            isLarge && styles.card__poster_large
          }`}
          src={`${process.env.NEXT_PUBLIC_IMG_BASE_URI}${
            isLarge ? content.poster_path : content.backdrop_path
          }`}
          alt={content.name}
        />
      </a>
    </Link>
  );
};

export default SectionItem;
