import TMDLogo from '../../public/svg/tmd_logo.svg';
import styles from './Footer.module.scss';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.TMDLogoContainer}>
        <span>API by</span>
        <TMDLogo className={styles.TMDLogo} />
      </div>
    </footer>
  );
};

export default Footer;
