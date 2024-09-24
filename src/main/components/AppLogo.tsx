import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const AppLogo = () => {
  const { t } = useTranslation(['common']);

  return (
    <Link to={'/'} className={'flex items-center gap-x-2 md:gap-x-4'}>
      <img
        alt="icon"
        src="/favicon.png"
        className={'max-h-[40px] md:max-h-[48px]'}
      />

      <div className={'flex flex-col'}>
        <h3 className={'text-lg md:text-2xl font-semibold'}>Poker planning</h3>

        <span className={'text-[10px] text-blue-500 md:text-xs font-normal'}>
          {t('header_subtitle_nav')}
        </span>
      </div>
    </Link>
  );
};
