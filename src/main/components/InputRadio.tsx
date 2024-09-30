type Props = {
  label: string;
  name?: string;
  value: string;
  checked: boolean;
  onChange: any;
  onClick?: any;
}

export const InputRadio = (props: Props) => {
  return (
    <div
      className={'flex gap-x-2 items-center cursor-pointer'}
      onClick={props.onClick}
    >
      <input
        type={'radio'}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />

      <span>{ props.label }</span>
    </div>
  )
}