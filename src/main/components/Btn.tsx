import { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonType = 'button' | 'submit' | 'reset';

interface Props {
  children?: ReactNode;
  type?: ButtonType;
  className?: string;
  outline?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const Btn = ({
  children,
  type = 'button',
  className = '',
  outline = false,
  onClick,
  disabled
}: Props) => {
  const btnClass = classNames(
    'px-6 py-2 rounded-lg select-none',
    { 'font-light border': outline },
    { [className]: !disabled },
    { 'bg-gray-500/20 !text-gray-400 !cursor-not-allowed': disabled }
  );

  const clickEvent = () => {
    if (disabled) {
      return;
    }

    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      disabled={disabled}
      type={ type }
      className={ btnClass }
      onClick={ clickEvent }
    >
      { children }
    </button>
  )
}