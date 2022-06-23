import React from 'react';
import style from './Button.module.scss';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={style.button}>{props.label}</button>;
};

export default Button;
