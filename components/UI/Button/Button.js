import React from 'react';
import styles from './Button.module.scss';

const Button = React.forwardRef((props, ref) => {
  return (
    <a className={styles.btn} onClick={props.onClick} ref={ref} href={props.href}>
      {props.content}
    </a>
  );
});

export default Button;
