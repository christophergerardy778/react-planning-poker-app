type Props = {
  title: string;
  subTitle: string;
};

export const FormAuthHeader = (props: Props) => {
  return (
    <div className={'flex flex-col gap-y-2'}>
      <h1 className={'text-center text-3xl leading-relaxed'}>
        { props.title }
      </h1>

      <p className={'text-center text-lg text-gray-500 font-semibold'}>
        { props.subTitle }
      </p>
    </div>
  );
}