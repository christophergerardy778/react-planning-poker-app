import { AuthLayoutFooterLinks } from './AuthLayoutFooterLinks.tsx';
import { useTranslation } from 'react-i18next';
import { AuthLayoutFooterLink } from './AuthLayoutFooterLink.tsx';

export const AuthLayoutFooter = () => {
  const { t } = useTranslation(['auth_layout_footer', "common"]);

  return (
    <div className={'container mx-auto flex flex-col items-center justify-center gap-y-4 md:gap-y-2 px-4 py-6'}>
      <AuthLayoutFooterLinks />

      <p className={'text-xs text-[#6d6e6f] text-center'}>
        { t('text_footer_property') }&nbsp;

        <AuthLayoutFooterLink
          to={'https://policies.google.com/privacy'}
          underline
        >
          { t('privacy_policy') }
        </AuthLayoutFooterLink>

        &nbsp;{ t('and', { ns: 'common' }) }&nbsp;

        <AuthLayoutFooterLink
          to={'https://policies.google.com/terms'}
          underline
        >
          { t('terms_of_service') }
        </AuthLayoutFooterLink>

        &nbsp;{ t('apply') }
      </p>
    </div>
  );
};
