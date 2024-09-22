import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  children?: JSX.Element | string;
  className?: string;
  target?: string;
}

export const AppLink = (props: Props) => {
  const { target = '' } = props;
  const linkClasses = classNames('text-blue-500', props.className);

  return (
    <Link
      to={props.to}
      className={linkClasses}
      target={target}
    >
      { props.children }
    </Link>
  )
}