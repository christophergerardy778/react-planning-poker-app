import classNames from 'classnames';

type Props = {
  children?: JSX.Element | string | number;
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