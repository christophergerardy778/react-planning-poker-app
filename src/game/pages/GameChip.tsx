import classNames from 'classnames';

type Props = {
  className?: string;
  children?: any;
  onClear?: any;
  onClick?: any;
  clearable?: boolean;
};

export const GameChip = (props: Props) => {
  const {
    clearable = false,
    className = 'border-blue-500 text-blue-500',
  } = props;

  const gameChipClass = classNames(
    className,
    'px-2 py-1 border rounded-lg text-xs w-fit flex items-center justify-center gap-x-1'
  );

  return (
    <div className={gameChipClass} onClick={props.onClick}>
      {props.children}

      {clearable && (
        <button
          onClick={props.onClear}
          className="material-symbols-outlined text-sm text-blue-500"
        >
          close
        </button>
      )}
    </div>
  );
};
