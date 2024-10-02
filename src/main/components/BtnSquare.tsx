import classNames from 'classnames';

type Props = {
  className?: string;
  children: JSX.Element | string;
  onClick?: any;
};

export const BtnSquare = (props: Props) => {
  const btnSquareClass = classNames(
    props.className,
    'flex justify-center items-center p-2 border rounded-lg'
  );

  return (
    <button
      onClick={props.onClick}
      className={btnSquareClass}
    >
      { props.children }
    </button>
  )
}