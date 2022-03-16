import React from 'react';
import classNames from 'classnames';
import styles from './Controls.module.sass';
import Icon from '@components/UI/Icon/Icon';
import checkbox from '/public/icons/checkbox.svg?sprite';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelClassName?: string;
}
const Checkbox: React.FC<CheckboxProps> = ({ checked, children, labelClassName, disabled, ...props }) => {
    return (
        <label
            htmlFor={props.id}
            className={classNames(styles.checkbox, labelClassName, { [styles.disabled]: disabled })}
        >
            <input {...props} type="checkbox" defaultChecked={checked} />
            <div className={styles.checkbox__image}>
                <Icon id={checkbox.id} viewBox={checkbox.viewBox} className={styles.checked} />
            </div>
            {children}
        </label>
    );
};

export default Checkbox;
