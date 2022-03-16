import React from 'react';
import styles from './Block.module.sass';

const BlockHeader: React.FC = (props) => <div className={styles.header}>{props.children}</div>;
export default BlockHeader;
