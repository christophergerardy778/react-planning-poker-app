import { useAuth } from '../../../auth/hooks/useAuth.ts';
import { AppLogo } from '../AppLogo.tsx';
import { LanguageSwitcher } from '../LanguageSwitcher.tsx';
import { Btn } from '../Btn.tsx';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { BtnSquare } from '../BtnSquare.tsx';

export const MainLayoutHeader = () => {
  const createNewGamePath = '/create-new-game';

  const navigate = useNavigate();
  const location = useLocation();

  const { authSelector, logoutUser } = useAuth();
  const { t } = useTranslation(['create_new_game']);

  const navigateToCreateNewGame = () => {
    if (location.pathname !== createNewGamePath) {
      navigate(createNewGamePath);
    }
  };

  return (
    <nav className={'w-full z-[1] bg-white sticky top-0'}>
      <div
        className={
          'container px-4 py-3 md:py-5 mx-auto flex justify-between items-center'
        }
      >
        <AppLogo />

        <div className={'flex gap-x-2 lg:gap-x-4 items-center'}>
          <span className={'hidden lg:flex'}>
            {authSelector.user.name}
          </span>

          <Btn
            onClick={navigateToCreateNewGame}
            className={'ripple-bg-blue-500 text-white hidden lg:flex'}
          >
            {t('create_new_game')}
          </Btn>

          <BtnSquare
            className={'flex lg:hidden'}
            onClick={navigateToCreateNewGame}
          >
            <span className="material-symbols-outlined select-none">add</span>
          </BtnSquare>

          <LanguageSwitcher />

          <BtnSquare onClick={logoutUser}>
            <span className="material-symbols-outlined select-none">logout</span>
          </BtnSquare>
        </div>
      </div>
    </nav>
  );
};
