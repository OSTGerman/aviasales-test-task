import React from 'react';
import styles from './Block.module.sass';

const Block: React.FC = (props) => <div className={styles.container}>{props.children}</div>;
export default Block;
