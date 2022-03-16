import React from 'react';
import styles from './List.module.sass';
import classNames from 'classnames';

const List: React.FC = (props) => {
    const childrenArray = React.Children.toArray(props.children) as Array<React.ReactElement>;
    return (
        <ul className={styles.list}>
            {React.Children.map(childrenArray, (child: React.ReactElement) => (
                <li className={classNames(styles.item, { [styles.disabled]: child.props.disabled })}>{child}</li>
            ))}
        </ul>
    );
};
export default List;
