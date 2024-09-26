import { Language, useLanguage } from '../hooks/useLanguage.ts';
import { useFloating, autoUpdate, offset } from '@floating-ui/react';
import { useEffect, useState } from 'react';
import { InputRadio } from './InputRadio.tsx';
import { useTranslation } from 'react-i18next';
import { AvailableLanguage } from '../store/AppSlice.ts';

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(['common']);
  const { changeLanguage, appSelector } = useLanguage();

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    placement: 'bottom-end',
    middleware: [offset(15)],
    whileElementsMounted: autoUpdate,
    onOpenChange: setIsOpen,
  });

  const toggleFloating = () => {
    setIsOpen(!isOpen);
  };

  const changeAppLanguage = (language: Language) => {
    changeLanguage(language).then(() => toggleFloating());
  };

  useEffect(() => {changeLanguage(appSelector.lang)}, []);

  return (
    <>
      <span
        role={'button'}
        ref={refs.setReference}
        onClick={toggleFloating}
        className="material-symbols-outlined cursor-pointer select-none"
      >
        translate
      </span>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="bg-white rounded-lg border shadow-md w-max min-w-[200px] overflow-auto"
        >
          <h3 className={'px-6 py-3 text-xs text-gray-500'}>
            { t('select_language') }
          </h3>

          <div className={'flex flex-col'}>
            {appSelector.availableLanguages.map(
              (language: AvailableLanguage) => (
                <div
                  key={language.key}
                  onClick={() => changeAppLanguage(language.lang)}
                  className={'px-6 py-3 ripple-bg-white cursor-pointer'}
                >
                  <InputRadio
                    label={t(language.key)}
                    value={language.lang}
                    checked={language.lang === i18n.language}
                    onChange={() => changeAppLanguage(language.lang)}
                  />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};
