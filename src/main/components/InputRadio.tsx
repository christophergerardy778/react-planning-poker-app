type Props = {
  label: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  onClick?: () => void;
}

export const InputRadio = (props: Props) => {
  const clickHandler = () => {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div
      className={'flex gap-x-2 items-center'}
      onClick={clickHandler}
    >
      <input
        type={'radio'}
        value={props.value}
        checked={props.checked}
        onChange={() => props.onChange()}
      />

      <span>{ props.label }</span>
    </div>
  )
}