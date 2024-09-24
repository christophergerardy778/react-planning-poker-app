type Props = {
  isVisible: boolean;
  errorMessage: string;
};

export const ErrorNotification = (props: Props) => {
  if (!props.isVisible) {
    return null;
  }

  return (
    <div
      className={
        'w-full bg-red-500/30 rounded-lg p-4 flex items-center gap-x-4'
      }
    >
      <span className="material-symbols-outlined text-red-500 text-[48px]">
        error
      </span>

      <div>
        <span className={'text-red-500 font-semibold'}>Error</span>

        <p className={'text-red-500 text-xs'}>{props.errorMessage}</p>
      </div>
    </div>
  );
};
