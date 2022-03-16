import React from 'react';
import styles from './Buttons.module.sass';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode?: 'primary' | 'secondary';
}
const Button: React.FC<ButtonProps> = ({ mode = 'primary', ...props }) => (
    <button type="button" className={classNames(styles.button, styles[`button--${mode}`], props.className)} {...props}>
        {props.children}
    </button>
);
export default Button;
