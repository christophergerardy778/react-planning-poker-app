import classNames from 'classnames';

type Props = {
  text?: string;
  className?: string;
}

export const GameIssueTag = (props: Props) => {
  const gameIssueTagClassName = classNames(
    'border border-blue-500 rounded-lg p-2',
    props.className,
  );

  return (
    <div className={gameIssueTagClassName}>
      <p className={'text-xs text-blue-500'}>
        { props.text }
      </p>
    </div>
  )
}