import classNames from 'classnames';

type Props = {
  isSelected?: boolean;
  children: JSX.Element | string | number;
  onClick?: any;
};

export const GameVotingCard = (props: Props) => {
  const { isSelected = false } = props;

  const containerClass = classNames(
    'w-[80px] cursor-pointer flex justify-center border border-gray-300 py-8 rounded-lg shadow-md hover:text-white hover:bg-blue-500',
    {
      'text-white bg-blue-500': isSelected,
    }
  )

  return (
    <div
      onClick={props.onClick}
      className={containerClass}
    >
      { props.children }
    </div>
  );
};
