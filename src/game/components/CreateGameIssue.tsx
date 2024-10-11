import { TextArea } from '../../main/components/TextArea.tsx';
import { Btn } from '../../main/components/Btn.tsx';

export const CreateGameIssue = () => {
  return (
    <div>
      <TextArea label={'Issue description'} value={''} onChange={null} />

      <div className={'flex gap-x-2 mt-4'}>
        <Btn className={'ripple-bg-blue-500 text-white w-full'}>Save</Btn>

        <Btn outline className={'border-blue-500 text-blue-500 w-full'}>Cancel</Btn>
      </div>
    </div>
  );
}