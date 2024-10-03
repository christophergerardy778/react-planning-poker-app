type Props = {
  text?: string;
}

export const GameIssueTag = (props: Props) => {
  return (
    <div className={'border border-blue-500 rounded-lg p-2'}>
      <p className={'text-xs text-blue-500'}>
        { props.text }
      </p>
    </div>
  )
}