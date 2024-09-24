import classNames from 'classnames';
import { ChangeEvent } from 'react';

type InputType = 'text' | 'number' | 'password' | 'email';

type Props = {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  value: string;
  error?: string;
  type?: InputType;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

export const TextField = ({
  type = 'text',
  placeholder = '',
  label = '',
  value = '',
  name = '',
  autoComplete = '',
  disabled = false,
  required = false,
  id,
  onChange,
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
        id={id}
        name={ name }
        type={ type }
        value={ value }
        placeholder={ placeholder }
        autoComplete={ autoComplete }
        className={ inputClasses }
        disabled={ disabled }
        required={ required }
        onChange={ onChange }
      />

      { error && <span className={'text-xs text-red-500'}>
        { error }
      </span>}
    </div>
  )
}
