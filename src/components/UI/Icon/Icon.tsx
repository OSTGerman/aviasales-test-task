import React from 'react';
import classNames from 'classnames';
import styles from './Icon.module.sass';

interface IconProps {
    id: string;
    viewBox: string;
    className?: string;
    color?: string;
    name?: string;
    sizes?: {
        width: number;
        height: number;
    };
}
const Icon: React.FC<IconProps> = ({ id, viewBox, ...props }) => {
    return (
        <div className={classNames(styles.svg, styles[props.name ? props.name : ''], props.className)}>
            <svg viewBox={viewBox} fill={'currentColor'} {...props.sizes}>
                <use xlinkHref={`#${id}`} />
            </svg>
        </div>
    );
};

export default Icon;
