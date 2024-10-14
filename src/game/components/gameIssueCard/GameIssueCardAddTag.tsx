import { GameChip } from '../../pages/GameChip.tsx';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';

type Props = {
  onCancel?: any;
}

export const GameIssueCardAddTag = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      tagName: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const input = inputRef.current;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const fontSize = window.getComputedStyle(input!).fontSize;
    const fontFamily = window.getComputedStyle(input!).fontFamily;

    ctx!.font = `${fontSize} ${fontFamily}`;

    const textWidth = ctx!.measureText(
      formik.values.tagName || input!.placeholder
    ).width;

    input!.style.width = `${textWidth}px`;

  }, [formik.values.tagName]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={'flex gap-x-2 items-center'}
    >
      <div className={'grow'}>
        <GameChip className={'border-blue-500 text-blue-500'}>
          <div className={'flex'}>
            <input
              type="text"
              name={'tagName'}
              className={'text-xs outline-none max-w-[240px]'}
              placeholder={'Tag name'}
              ref={inputRef}
              autoComplete={'off'}
              value={formik.values.tagName}
              onChange={formik.handleChange}
            />
          </div>
        </GameChip>
      </div>

      <div className={'flex gap-x-2'}>
        <button
          type={'submit'}
          className={
            'bg-blue-500 rounded-full flex w-[24px] h-[24px] items-center justify-center'
          }
        >
          <span className="material-symbols-outlined text-sm text-white">
            check
          </span>
        </button>

        <button
          onClick={props.onCancel}
          className={
            'border-blue-500 border rounded-full flex w-[24px] h-[24px] items-center justify-center'
          }
        >
          <span className="material-symbols-outlined text-sm text-blue-500">
            close
          </span>
        </button>
      </div>
    </form>
  );
};
