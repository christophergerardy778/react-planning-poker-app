import { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonType = 'button' | 'submit' | 'reset';

interface Props {
  children?: ReactNode;
  type?: ButtonType;
  className?: string;
  outline?: boolean;
  onClick?: () => void;
}

export const Btn = ({
  children,
  type = 'button',
  className = '',
  outline = false,
  onClick = () => {},
}: Props) => {
  const btnClass = classNames(
    className,
    'p-2 rounded-lg select-none',
    { 'font-light border': outline },
  );

  return (
    <button
      type={ type }
      className={ btnClass }
      onClick={ onClick }
    >
      { children }
    </button>
  )
}