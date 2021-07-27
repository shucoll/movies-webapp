import styles from './Spinner.module.scss';

const Spinner = (props) => {
  let style;
  if (props.center)
    style = {
      display: 'block',
      margin: 'auto',
    };
  else if (props.centerPage) {
    style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
  }

  return (
    <div className={styles.ldsRing} style={style}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
