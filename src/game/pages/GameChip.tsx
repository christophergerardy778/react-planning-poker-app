import classNames from 'classnames';

type Props = {
  className?: string;
  children?: any;
}

export const GameChip = (props: Props) => {
  const { className = 'border-blue-500 text-blue-500' } = props;

  const gameChipClass = classNames(
    className,
    'px-2 py-1 border rounded-lg text-xs w-fit',
  );

  return (
    <div className={gameChipClass}>
      { props.children }
    </div>
  )
}