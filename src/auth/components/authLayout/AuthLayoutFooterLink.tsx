import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  children: JSX.Element | string;
  target?: string;
  underline?: boolean;
}

export const AuthLayoutFooterLink = (props: Props) => {
  const { target = '_blank', underline = false } = props;

  const linkClasses = classNames(
    'text-xs text-[#6d6e6f] hover:underline hover:text-blue-500',
    { 'underline': underline },
  );

  return (
    <Link
      to={props.to}
      className={linkClasses}
      target={ target }
    >
      { props.children }
    </Link>
  )
}