import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
}

export const AppCard = (props: Props) => {
  const cardClass = classNames(
    'border border-gray-300 rounded-lg p-4',
    props.className,
  );

  return (
    <div
      className={cardClass}
    >
      { props.children }
    </div>
  )
}