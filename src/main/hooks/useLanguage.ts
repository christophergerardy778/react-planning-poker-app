import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../store/AppSlice.ts';

export type Language = 'en' | 'es';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const appSelector = useSelector((state: any) => state.app);

  const changeLanguage = async (lang: Language) => {
    await i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
  }

  return {
    appSelector,
    changeLanguage,
  }
};
