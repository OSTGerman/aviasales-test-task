import React from 'react';
import styles from './Buttons.module.sass';

const ButtonGroup: React.FC = (props) => <div className={styles['button-group']}>{props.children}</div>;
export default ButtonGroup;
