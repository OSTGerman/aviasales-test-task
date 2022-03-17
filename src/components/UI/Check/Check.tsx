import React from 'react';
import classNames from 'classnames';
import styles from '@components/UI/Check/Check.module.sass';
import Icon from '@components/UI/Icon/Icon';
import radio from '/public/icons/radio.svg?sprite';
import checkbox from '/public/icons/checkbox.svg?sprite';

export interface ControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelClassName?: string;
    mode: 'checkbox' | 'radio';
}

const icons = {
    radio,
    checkbox,
};

const Check: React.FC<ControlProps> = ({ mode, checked, children, labelClassName, disabled, ...props }) => (
    <label htmlFor={props.id} className={classNames(styles[mode], labelClassName, { [styles.disabled]: disabled })}>
        <input {...props} type={mode} value={props.name} defaultChecked={checked} />
        <div className={styles[`${mode}__image`]}>
            <Icon id={icons[mode].id} viewBox={icons[mode].viewBox} className={styles.checked} />
        </div>
        {children}
    </label>
);
export default Check;
