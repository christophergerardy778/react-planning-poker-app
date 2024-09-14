import classNames from 'classnames';
import { ChangeEvent } from 'react';

type InputType = 'text' | 'number' | 'password' | 'email';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  error?: string;
  type?: InputType;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  type = 'text',
  placeholder = '',
  label = '',
  disabled = false,
  required = false,
  value = '',
  onChange,
  name,
  error,
}: Props) => {
  const inputClasses = classNames(
    'text-sm rounded-lg px-3 py-2 border border-gray-300',
    {
      'text-gray-500 bg-gray-100': disabled,
      '!border-red-500 !outline-red-500': error,
    }
  );

  const labelClasses = classNames(
    'text-xs text-gray-500 font-semibold',
    {
      '!text-red-500': error,
    }
  );

  return (
    <div className={'flex flex-col gap-y-2'}>
      <span className={ labelClasses }>
        { label }
      </span>

      <input
        name={ name }
        type={ type }
        placeholder={ placeholder }
        className={ inputClasses }
        disabled={ disabled }
        value={ value }
        required={ required }
        onChange={ onChange }
      />

      { error && <span className={'text-xs text-red-500'}>
        { error }
      </span>}
    </div>
  )
}
