type Props = {
  children: JSX.Element | string | number;
  onClick?: any;
};

export const GameVotingCard = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'w-[80px] cursor-pointer flex justify-center border border-gray-300 py-8 rounded-lg shadow-md hover:text-white hover:bg-blue-500'
      }
    >
      { props.children }
    </div>
  );
};
