import React from 'react';
import classNames from 'classnames';
import styles from './Controls.module.sass';
import Icon from '@components/UI/Icon/Icon';
import radio from '/public/icons/radio.svg?sprite';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelClassName?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked, children, labelClassName, ...props }) => {
    return (
        <label htmlFor={props.id} className={classNames(styles.radio, labelClassName)}>
            <input {...props} type="radio" value={props.name} defaultChecked={checked} />
            <div className={styles.radio__image}>
                <Icon id={radio.id} viewBox={radio.viewBox} className={styles.checked} />
            </div>
            {children}
        </label>
    );
};

export default RadioButton;
