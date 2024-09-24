import { AppLogo } from '../../../main/components/AppLogo.tsx';

export const AuthLayoutHeader = () => {
  return (
    <div className={'px-4 py-3 md:py-5 w-full z-[1] bg-white sticky top-0'}>
      <div className={'container mx-auto'}>
        <div className={'flex justify-between items-center'}>
          <AppLogo />

          <div>ES</div>
        </div>
      </div>
    </div>
  );
};
