import React from 'react';
import classNames from 'classnames';
import styles from './Icon.module.sass';

interface IconProps {
    id: string;
    viewBox: string;
    className?: string;
}
const Icon: React.FC<IconProps> = ({ id, viewBox, ...props }) => {
    return (
        <div className={classNames(styles.svg, props.className)}>
            <svg viewBox={viewBox} fill={'currentColor'}>
                <use xlinkHref={`#${id}`} />
            </svg>
        </div>
    );
};

export default Icon;
