import { useAuth } from '../../../auth/hooks/useAuth.ts';
import { AppLogo } from '../AppLogo.tsx';
import { LanguageSwitcher } from '../LanguageSwitcher.tsx';
import { Btn } from '../Btn.tsx';

export const MainLayoutHeader = () => {
  const { authSelector } = useAuth();

  return (
    <nav className={'w-full z-[1] bg-white sticky top-0'}>
      <div
        className={
          'container px-4 py-3 md:py-5 mx-auto flex justify-between items-center'
        }
      >
        <AppLogo />

        <div className={'flex gap-x-4 items-center'}>
          {authSelector.user.name}

          <Btn className={'ripple-bg-blue-500 text-white'}>
            Create a new game
          </Btn>

          <LanguageSwitcher />

          <button
            className={'flex justify-center items-center p-2 border rounded-lg'}
          >
            <span className="material-symbols-outlined select-none">
              logout
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
