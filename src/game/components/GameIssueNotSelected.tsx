import { AppCard } from '../../main/components/AppCard.tsx';
import { useTranslation } from 'react-i18next';

export const GameIssueNotSelected = () => {
  const { t } = useTranslation(["game"]);

  return (
    <AppCard className={'py-10'}>
      <p className={'text-center text-gray-400 text-xs uppercase'}>
        { t('select_issue_to_start') }
      </p>
    </AppCard>
  )
}